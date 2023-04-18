import React, { useState } from "react";
import { ScrollView } from "react-native";

import { List } from "react-native-paper";

export const RestaurantDetailComponent = (title) => {
  const [expandedBreakfast, setExpandedBreakfast] = useState(false);
  const [expandedLunch, setExpandedLunch] = useState(false);
  const [expandedDinner, setExpandedDinner] = useState(false);

  return (
    <ScrollView>
      <List.Section>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={expandedBreakfast}
          onPress={() => setExpandedBreakfast(!expandedBreakfast)}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={expandedLunch}
          onPress={() => setExpandedLunch(!expandedLunch)}
        >
          <List.Item title="Burger w/ freis" />
          <List.Item title="Pizza" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="pasta" />}
          expanded={expandedDinner}
          onPress={() => setExpandedDinner(!expandedDinner)}
        >
          <List.Item title="Steak" />
          <List.Item title="Pasta" />
        </List.Accordion>
      </List.Section>
    </ScrollView>
  );
};
