import React, { Component } from "react";
import { View, Image, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/Ionicons';

import { deletePlace } from '../../store/actions/index';
import styles from '../../../styles/styles';

class PlaceDetail extends Component {
  placeDeletedHandler = () => {
    this.props.onDeletePlace(this.props.selectedPlace.key);
    this.props.navigator.pop();
  };
  render () {
    return (
      <View style={styles.placeDetailContainer}>
        <View>
          <Image source={this.props.selectedPlace.image} style={styles.placeImageLg} />
        <Text style={styles.placeName}>{this.props.selectedPlace.name}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={this.placeDeletedHandler}>
            <View style={styles.deleteButton}>
              <Icon size={30} name="ios-trash" color="red"/>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: key => dispatch(deletePlace(key))
  };
};

export default connect(null, mapDispatchToProps)(PlaceDetail);
