import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import styles from '../../../styles/styles';

const listItem = props => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Image resizeMode="cover" source={props.placeImage} style={styles.placeImage} />
      <Text>{props.placeName}</Text>
    </View>
  </TouchableOpacity>
);

export default listItem;
