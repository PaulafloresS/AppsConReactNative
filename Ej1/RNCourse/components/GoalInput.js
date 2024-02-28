import { useState } from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
function GoalInput(props){
    const [enteredGoalText, setEnteredGoalText] = useState('');
    function goalInputHandler(enteredText){
        setEnteredGoalText(enteredText);
      }
      function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
      }
    return (
        <View style = {styles.inputContainer}>
        <TextInput style = {styles.TextInput} 
        placeholder = 'Your couse goal ' 
        onChangeText={goalInputHandler}
        value={enteredGoalText}
         ></TextInput>
        <Button title = "Add Goal" onPress={addGoalHandler}></Button>
      </View>
    );
}
export default GoalInput;
const styles = StyleSheet.create({
    inputContainer: {
        flex : 1,
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom : 24,
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC'
      },
      TextInput :{
        borderWidth : 1, 
        borderColor: '#CCCCCC',
        width: '70%', // ocupa el 80% del contenedor 
        marginRight: 8,
        padding: 8 // recorrer un poco el texto del borde 
      },
})