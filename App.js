import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [allGoals, setAllGoals] = useState([]);

  function goalInputhandler (enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler () {
    setAllGoals(currentCourseGoals => [
      ...currentCourseGoals,
      enteredGoalText
    ]);
    setEnteredGoalText("");
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Your course goal'
          value={enteredGoalText}
          onChangeText={goalInputhandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
          {
            allGoals.map((goal, index) => (
              <View style={styles.goal} key={index}>
                <Text style={styles.goalText}>{goal}</Text>
              </View>
            ))
          }
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 4,
  },
  goal: {
    margin: 5,
    borderRadius: 6,
    padding: 8,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: 'white',
  }
});
