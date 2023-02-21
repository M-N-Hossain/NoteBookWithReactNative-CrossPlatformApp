import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";

export default function NoteHeadline({ title, onPress }) {
  return (
    <Pressable style={({ pressed }) => pressed && styles.buttonPressed} onPress={onPress}>
      <View style={styles.noteHeadlineView}>
        <Text style={styles.noteHeadLineText}> {title} </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  noteHeadlineView: {
    backgroundColor: "gray",
    marginTop: 10,
    alignItems: "center",
    borderRadius: 5,
    padding: 5,
  },
  noteHeadLineText: {
    fontSize: 20,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
