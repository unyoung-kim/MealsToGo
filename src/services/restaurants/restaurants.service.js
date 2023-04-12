import { mocks, mockImages } from "./mock/index";
import camelize from "camelize";

// Fake API request for restaurants data
export const restaurantRequest = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("Location Not found");
    }
    resolve(mock);
  });
};

// Transforming Data (adding two more fields so that we have what we need)
export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    console.log(restaurant);

    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
};
