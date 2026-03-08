import React, {useState} from "react";
import {
View,
Text,
FlatList,
TouchableOpacity,
StyleSheet,
ActivityIndicator
} from "react-native";
import CustomLoader from './components/CustomLoader'

const students=[
{id:1,name:"Ali",class:"10",subject:"Math",marks:80,},
{id:2,name:"Ahmed",class:"10",subject:"Math",marks:70},
{id:3,name:"bilal",class:"10",subject:"Math",marks:90},
{id:4,name:"veera",class:"10",subject:"Math",marks:60},
{id:5,name:"nhel", class:"10",subject:"Math",marks:50},
{id:6,name:"ahsan", class:"10",subject:"Math",marks:80},
{id:7,name:"hassan", class:"10",subject:"Math",marks:30},
{id:8,name:"Saira", class:"10",subject:"Math",marks:92},
{id:9,name:"Samia", class:"10",subject:"Math",marks:91},
{id:10,name:"fraya",class:"10",subject:"Math",marks:45}

]

export default function Home({navigation}){

const [loading,setLoading]=useState(false)

const openStudent=(item)=>{

setLoading(true)

setTimeout(()=>{

setLoading(false)
navigation.navigate("Detail",{student:item})

},2000)

}

return(

<View style={styles.container}>

<Text style={styles.title}>Students</Text>

{loading && (

<CustomLoader />

)}

<FlatList 
data={students}
keyExtractor={item=>item.id.toString()}
renderItem={({item})=>(

<TouchableOpacity
style={styles.card}
onPress={()=>openStudent(item)}
>

<Text style={styles.name}>{item.name}</Text>

</TouchableOpacity>

)}
/>

</View>

)

}

const styles=StyleSheet.create({

container:{
flex:1,
padding:20,
backgroundColor:'#aaa'
},

title:{
fontSize:26,
fontWeight:"bold",
marginBottom:20
},

card:{
backgroundColor:"#eee",
padding:15,
marginBottom:10,
borderRadius:10
},

name:{
fontSize:18
},

loader:{
position:"absolute",
top:0,
bottom:0,
left:0,
right:0,
justifyContent:"center",
alignItems:"center",
backgroundColor:"rgba(0,0,0,0.3)"
}

})