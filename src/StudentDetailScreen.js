import React,{useState} from "react";
import {View,Text,TextInput,TouchableOpacity,StyleSheet} from "react-native";

export default function Detail({route,navigation}){

const {student}=route.params
const [marks,setMarks]=useState(student.marks)

return(

<View style={styles.container}>

<Text style={styles.name}>Name: {student.name}</Text>
<Text style={styles.name}>class: {student.class}</Text>
<Text style={styles.name}>subject: {student.subject}</Text>

<TextInput
style={styles.input}
value={marks.toString()}
onChangeText={setMarks}
/>

<TouchableOpacity style={styles.update}>
<Text style={styles.btnText}>Update Marks</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.delete}
onPress={()=>navigation.goBack()}
>
<Text style={styles.btnText}>Delete</Text>
</TouchableOpacity>

</View>

)

}

const styles=StyleSheet.create({

container:{
flex:1,
padding:20
},

name:{
fontSize:22,
marginBottom:20
},

input:{
borderWidth:1,
padding:10,
borderRadius:8,
marginBottom:20
},

update:{
backgroundColor:"green",
padding:12,
borderRadius:8,
marginBottom:10
},

delete:{
backgroundColor:"red",
padding:12,
borderRadius:8
},

btnText:{
color:"#fff",
textAlign:"center",
fontWeight:"bold"
}

})