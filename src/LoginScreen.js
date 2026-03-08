import React, {useState} from "react";
import {View,Text,TextInput,TouchableOpacity,StyleSheet} from "react-native";

export default function Login({navigation}){

const [email,setEmail]=useState("")
const [pass,setPass]=useState("")

return(

<View style={styles.container}>

<Text style={styles.title}>Login</Text>

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
onPress={()=>navigation.navigate("Home")}
>
<Text style={styles.btnText}>Login</Text>
</TouchableOpacity>

<TouchableOpacity onPress={()=>navigation.navigate("Signup")}>
<Text style={styles.link}>Create Account</Text>
</TouchableOpacity>

</View>

)

}

const styles=StyleSheet.create({

container:{
flex:1,
justifyContent:"center",
padding:20,
backgroundColor:"#ffeeee"
},

title:{
fontSize:28,
fontWeight:"bold",
marginBottom:20,
textAlign:"center"
},

input:{
borderWidth:1,
borderColor:"#ccc",
padding:10,
marginBottom:15,
borderRadius:8, 
backgroundColor:"#fff7f7"
},

button:{
backgroundColor:"#007bff",
padding:12,
borderRadius:8
},

btnText:{
color:"#fff",
textAlign:"center",
fontWeight:"bold"
},

link:{
textAlign:"center",
marginTop:15,
color:"blue"
}

})