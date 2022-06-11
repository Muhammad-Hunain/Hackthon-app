import { ScrollView,StyleSheet, Text, View,ImageBackground,FlatList, TextInput,TouchableOpacity,} from 'react-native';
import React, {useEffect, useState} from 'react'
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database';
// import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


export default function view() {

  let [data1,setData] = useState([]);


  useEffect(()=>{
  database().ref('course').once("value").then(function(snapshot){
   
    // console.log(snapshot.val())
    var key = Object.values(snapshot.val()) 
    var userdata =[]
    for(var i=0;i<key.length;i++){
      console.log(key[i])

      userdata.push(key[i])

    } 
    
    console.log(userdata)
    // console.log(key);
    setData(userdata);
    // console.log(data)
    // console.log(key[0].name);
  })
},[])

// console.log(data1[0])





return(
  <ScrollView>
<View style = {styles.container}>
     <ImageBackground style={styles.img} source={{uri: "https://images.creativetemplate.net/wp-content/uploads/2018/01/Grey-Texture-Design-1.png"}}>
    <Text style={{color:"#fff",fontWeight:'bold',marginTop:20}}>View Records</Text>
{data1.map((v,i)=>{
  console.log(v)
  return (


    <View style={styles.box} key={i} >
    <Text style={styles.text}>Course Namqe : {v.name}</Text>
    <Text style={styles.text}>Course Criteria :{v.criteria}</Text>
    <Text style={styles.text}>Course Duration :{v.duration}</Text>
    <Text style={styles.text}> Days{v.day}</Text>
    <Text style={styles.text}> Subject  Teacher :{v.teacher}</Text>
    <Text style={styles.text}>Course Timming{v.timming}</Text>
    </View>
  )
})}
      
      
</ImageBackground>
  </View>
</ScrollView>
)
  }
const styles = StyleSheet.create({
container:{
    flex:1,
    // backgroundColor:"red",
    alignItems:"center"
},
img:{
  width:500,
  height:740,
  resizeMode:'contain', 
  alignItems:"center",
  
  // justifyContent:"center",
},
text:{
  color:"#fff",
  padding:5,
  color:"#000"
  
},
box:{
  backgroundColor:"#eee",
  width:60+"%",
  margin:5,
  padding:20,
  borderRadius:25
},
main1:{
    flex:1,
    backgroundColor:"green",
    width:"100%"
},

})