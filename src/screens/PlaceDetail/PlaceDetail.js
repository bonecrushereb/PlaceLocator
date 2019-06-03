import React from "react";
import { View, Image, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

import Icon from 'react-native-vector-icons/Ionicons';

import styles from '../../../styles/styles';

const placeDetailScreen = props => {
  return (
      <View style={styles.placeDetailContainer}>
        <View>
          <Image source={props.selectedPlace.image} style={styles.placeImageLg} />
          <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={props.onItemDeleted}>
            <View style={styles.deleteButton}>
              <Icon size={30} name="ios-trash" color="red"/>
            </View>
          </TouchableOpacity>
        </View>
      </View>
  );
};

export default placeDetailScreen;
