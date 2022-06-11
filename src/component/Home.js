// import { View, Text,ImageBackground } from 'react-native'
import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View,ImageBackground, TextInput,TouchableOpacity,} from 'react-native';

// import { useRoute } from '@react-navigation/native';
import { firebase } from '@react-native-firebase/database';

export default function Home(props) {
  const [data,setdata] =useState();
  // const route = useRoute();
    // const{email,uid} = route.params
    useEffect(()=>{
      firebase.database().ref("Users").child(props.uid).once("value")
      .then((userdata)=>{
          console.log(userdata.val())
          setdata(userdata.val().name)
      })
  },[])
  
    return (
      
      <View style={styles.container}>
        <ImageBackground  style={styles.img} source={{uri: "https://images.creativetemplate.net/wp-content/uploads/2018/01/Grey-Texture-Design-1.png"}}>
      <View style={{position:"absolute",top:40,left :20}}>
      <Text style={{color:"#000",fontWeight:"bold",fontSize:25,marginLeft:60}}>{data}</Text>
      <Text style={{color:"#000",fontWeight:"bold",fontSize:25,marginLeft:60}}>{props.email}</Text>
      <ImageBackground style={styles.img} source={{uri: 'https://www.cicnews.com/wp-content/uploads/2022/01/what-to-know-about-life-in-canada-as-a-student-scotiabank-1200-x-800.jpg'
}}></ImageBackground>
      </View>
      </ImageBackground>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    width:500,
    height:740,
    resizeMode:'contain', 
    alignItems:"center",
    justifyContent:"center",
  }
})