import React, {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      padding: 40,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    inputContainer: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    },
    placeInput: {
      width: "70%"
    },
    placeButton: {
      width: "30%"
    },
    listItem: {
      width: "100%",
      padding: 10,
      marginBottom: 5,
      backgroundColor: "#eee",
      flexDirection: "row",
      alignItems: "center",
    },
    placeImage: {
      marginRight: 8,
      height: 30,
      width: 30
    },
    placeImageModal: {
      width: "100%",
      height: 200,
      marginTop: 50
    },
    placeTextModal: {
      fontWeight: "bold",
      textAlign: "center",
      textTransform: "uppercase",
      fontSize: 24,
      margin: 10,
    },
    listContainer: {
      width: "100%"
    },
    placeDetailContainer: {
      margin: 25
    },

    placeImageLg: {
      marginTop: 40,
      width: "100%",
      height: 200
    },
    placeName: {
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 28
    },
    deleteButton: {
      alignItems: "center"
    }
  });
