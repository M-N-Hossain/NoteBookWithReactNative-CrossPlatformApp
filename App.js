import { useState } from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import AddNoteScreen from "./Screen/AddNoteScreen";
import HomeScreen from "./Screen/HomeScreen";
import NoteScreen from "./Screen/NoteScreen";

// const Stack = createNativeStackNavigator();

export default function App() {
  const [isHomeScreen, setScreen] = useState(true);
  const [isAddNoteScreen, setAddNoteScreen] = useState(false);

  const [noteTitile, setNoteTitle] = useState();
  const [desc, setDesc] = useState();

  function switchToNoteScreen(title, desc) {
    setNoteTitle(title);
    setDesc(desc);
    setScreen(false);
  }
  function switchToAddNoteScreen() {
    setAddNoteScreen(true);
  }

  let screens = (
    <HomeScreen
      switchToNoteScreen={switchToNoteScreen}
      switchToAddNoteScree={setAddNoteScreen}
    />
  );
  if (!isHomeScreen) {
    screens = <NoteScreen title={noteTitile} desc={desc} />;
  }
  if (isAddNoteScreen) {
    screens = <AddNoteScreen />;
  }

  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Notes" component= {HomeScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    <SafeAreaView style={styles.container}>{screens}</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
