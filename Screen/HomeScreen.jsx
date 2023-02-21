import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import NoteHeadline from "../component/NoteHeadline";
import AddNoteScreen from "./AddNoteScreen";

export default function HomeScreen({
  switchToNoteScreen,
  switchToAddNoteScree,
}) {
  const titles = [
    { id: 1, title: "School Note", desc: "Mobile development- Ios & Andriod Development" },
    { id: 2, title: "Homework", desc: "Week 6, Develop a notebook" },
  ];

  function switchToNoteScreenHandler (title, desc){
    switchToNoteScreen(title, desc)
  }

  return (
    <View style={styles.wholeContainer}>
      <Pressable onPress={switchToAddNoteScree}>
        <View style={styles.addIcon}>
          <Ionicons name="md-add" size={40} />
        </View>

      </Pressable>
      {titles.map((title) => ( 
        <NoteHeadline title={title.title} onPress={switchToNoteScreenHandler.bind(this, title.title, title.desc)} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wholeContainer: {
    flex: 1,
  },
  addIcon: {
    marginLeft: 310,
    marginTop: 10,
  },
});
