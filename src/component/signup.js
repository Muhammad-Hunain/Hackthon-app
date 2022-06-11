import { StatusBar } from 'expo-status-bar';
import {ScrollView, StyleSheet, Text, View,ImageBackground, TextInput,TouchableOpacity,} from 'react-native';
import React,{useState,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
// import firestore from '@react-native-firebase/firestore';


// import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
export default function SignUp(props) {
 const [name,setName] = useState();
 const [fname,setFName] = useState();
 const [email,setEmail] = useState();
 const [password,setPassword] = useState();
 const [message,setMessage] = useState("");
 const navigation = useNavigation();



 const signup =()=>{

    auth()
    .createUserWithEmailAndPassword(email, password)
    .then((data) => {
      console.log('User account created & signed in!');
      console.log(data.user.uid);
      // const usersCollection = ;
      var obj ={
        name:name,
        fname:fname,
        email:email,
        password:password,
        uid:data.user.uid,
      }
      database().ref('Users').child(data.user.uid).set(obj);
      navigation.navigate('SignIn')
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        setMessage('That email address is already in use!');
      }
  
      if (error.code === 'auth/invalid-email') {
     setMessage('That email address is invalid!');
      }
      // console.error(error);
      setMessage(error.message);
    });
  } 
  return (
<ScrollView>
<View style={styles.container}>
      <ImageBackground style={styles.img} source={{uri: "https://thumbs.dreamstime.com/b/cement-gray-texture-cement-gray-texture-background-high-res-135880292.jpg"}}>
      <ImageBackground style={styles.img1} source={{uri: "https://airforshare.com/files/qHlIWH.png"}}></ImageBackground>
    <View style={{flex:3}}>
        <Text style={styles.text}>Create Account</Text>
      <TextInput style={styles.textfield} placeholder="Enter Name"
             value={name} 
            onChangeText={(e)=>setName(e)}
            />
      <TextInput style={styles.textfield} placeholder="Enter Name"
             value={fname} 
            onChangeText={(e)=>setFName(e)}
      />
         <TextInput style={styles.textfield} placeholder="Enter Email"
             value={email} 
            onChangeText={(e)=>setEmail(e)}
            />
        <TextInput style={styles.textfield} placeholder="Password"
             value={password} 
             onChangeText={(e)=>setPassword(e)}
              secureTextEntry={true}
/>
            <View style={styles.btnGroup}>            
            <TouchableOpacity style={styles.btn} onPress={()=>{props.navigation.navigate("SignIn")}}>
             <Text style={styles.text1}>Sign In</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.btn} >
             <Text style={styles.text1} onPress={()=>signup()}>Create Account</Text>
           </TouchableOpacity>
           </View>
         </View>
         <Text>
              {message}
            </Text>

      </ImageBackground>
    </View>
  </ScrollView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:-30
  },
  img:{
    width:500,
    height:740,
    resizeMode:'contain', 
    alignItems:"center",
    justifyContent:"center",
  },
  textfield:{
    padding:10,
    margin:20,
    borderWidth:3,
    width:200,
    borderRadius:10
  },
  text:{
    fontSize:30,
    marginBottom:20
  },
  btn:{
    borderColor:"#fff",
    padding:10,
    paddingLeft:20,
    paddingRight:20,
    marginTop:20,
    marginLeft:20,
    borderWidth:1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  text1:{
    fontWeight:'800',
    color:'#fff'
  },
  btnGroup:{
    flexDirection:'row'},


img1:{
  flex:1,
  width:200,
  height:200,
  justifyContent:"center",
  resizeMode:"contain",
  marginTop:50,
},
textfield:{
  padding:10,
  margin:20,
  borderWidth:1,
  width:300,
  borderRadius:10,
  backgroundColor:"#eee",
  borderRadius:40,

},
img:{
  flex:1,
  width:100+"%",
  height:100+"%",
  resizeMode:'contain', 
  alignItems:"center",
  justifyContent:"center",
  backgroundSize:"cover"
},
text:{
  fontSize:30,
  // marginBottom:20
  textAlign:"center",
  color:"#fff",
  fontWeight:"bold"    
},
btn:{
  // borderColor:"#fff",
  padding:10,
  paddingLeft:20,
  paddingRight:20,
  marginTop:20,
  marginLeft:20,
  borderWidth:1,
  borderRadius:40,
  shadowColor: "#000",
  backgroundColor:"#eee",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
},
text1:{
  fontWeight:'800',
  color:'#000'
},
btnGroup:{
    flexDirection:'row',
    // justifyContent:"center"
    marginLeft:10
  }
});

