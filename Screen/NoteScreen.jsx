import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

export default function NoteScreen({ title, desc }) {
  return (
    <View style={styles.wholeContainer}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.descView}>
        <Text style={styles.desc}>{desc}</Text>
      </View>
    </View>
  );
}

const dynamicWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  wholeContainer: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 30,
  },
  descView: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
  },
  desc: {
    margin: 5,
    alignItems: 'center',
    
  },
});
