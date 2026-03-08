import React,{useState} from "react";
import {View,Text,TextInput,TouchableOpacity,StyleSheet} from "react-native";

export default function Signup({navigation}){

const [email,setEmail]=useState("")
const [pass,setPass]=useState("")

return(

<View style={styles.container}>

<Text style={styles.title}>Signup</Text>

<TextInput
placeholder="Email"
style={styles.input}
onChangeText={setEmail}
/>

<TextInput
placeholder="Password"
style={styles.input}
secureTextEntry
onChangeText={setPass}
/>

<TouchableOpacity
style={styles.button}
onPress={()=>navigation.navigate("Login")}
>
<Text style={styles.btnText}>Signup</Text>
</TouchableOpacity>

</View>

)

}

const styles=StyleSheet.create({

container:{
flex:1,
justifyContent:"center",
padding:20,

},

title:{
fontSize:28,
fontWeight:"bold",
marginBottom:20,
textAlign:"center"
},

input:{
borderWidth:1,
padding:10,
marginBottom:15,
borderRadius:8
},

button:{
backgroundColor:"green",
padding:12,
borderRadius:8
},

btnText:{
color:"#fff",
textAlign:"center",
fontWeight:"bold"
}

})