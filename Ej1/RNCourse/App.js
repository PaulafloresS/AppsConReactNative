import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList} from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem'; 
import GoalInput from './components/GoalInput';
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ... currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }
  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal)=>goal.id !== id);
    });
  }
  return (
    <View style ={styles.appConteiner}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <View style = {styles.goalsContainer}>
      <FlatList 
        data = {courseGoals} 
        renderItem = {(itemData) => {
        return (
        <GoalItem 
         text ={itemData.item.text}
         id = {itemData.item.id}
         onDeleteItem = {deleteGoalHandler}
         />
        );
      }}
      keyExtractor = {(item, index) => {
        return item.id;
      } }
      alwaysBounceVertical = {false}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appConteiner : {
    flex: 1,
    padding : 50,
    paddingHorizontal: 16
  },
  goalsContainer:{
    flex: 5
  }
});
