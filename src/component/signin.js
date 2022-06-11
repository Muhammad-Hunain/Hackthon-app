
import {ScrollView, StyleSheet, Text, View,ImageBackground, TextInput,TouchableOpacity,} from 'react-native';
import React, {useState} from 'react'
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database';
// import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
export default function SignIn(props) {
 const [email,setEmail] = useState();
 const [password,setPassword] = useState();
 const [admin,setAdmin] = useState("w@gmail.com");
const [Apassword,setAPassword] = useState("123");
const navigation  = useNavigation();
const [message,setMessage] = useState("");

 const handleLogin = async () =>{

  try{
  
    // database().ref('Admin').once("value").then(function(snapshot) {
    //   var admin = snapshot.val()["email"]
    // })
// console.log(admin);

      if(admin == email  && password  == Apassword){
        console.log(admin);
        console.log(Apassword);
        navigation.navigate('AdminDrawer',{
          // email:isUserLogin.user.email,
          // // name:isUserLogin.user.name,
          // uid:isUserLogin.user.uid,
        })
      }
      else {
        const isUserLogin = await auth().signInWithEmailAndPassword(email,password);
        console.log(isUserLogin);
        navigation.navigate('Drawer',{
          email:isUserLogin.user.email,
          // name:isUserLogin.user.name,
          uid:isUserLogin.user.uid,
        })
       }
      }

 catch(err){
  setMessage(err.message)   
 }
}; 

  return (
    <ScrollView>
    <View style={styles.container}>

      <ImageBackground style={styles.img} source={{uri: "https://thumbs.dreamstime.com/b/cement-gray-texture-cement-gray-texture-background-high-res-135880292.jpg"}}>
 
    <ImageBackground style={styles.img1} source={{uri: "https://airforshare.com/files/qHlIWH.png"}}>
</ImageBackground>      
    <View style={{flex:3}}>
       <Text style={styles.text}>Log In</Text>
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
            <TouchableOpacity style={styles.btn} onPress={()=>handleLogin()}>
             <Text style={styles.text1}>Sign In</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.btn} onPress={()=>{props.navigation.navigate("SignUp")}}>
             <Text style={styles.text1}>Create Account</Text>
           </TouchableOpacity>
         </View>
           <Text>
              {message}
            </Text>

            </View>
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
  },
  img1:{
    flex:1,
    width:200,
    height:200,
    justifyContent:"center",
    resizeMode:"contain",
    marginTop:100,
    marginBottom:30,
  },
  img:{
    flex:10,
    width:100+"%",
    height:100+"%",
    resizeMode:'contain', 
    alignItems:"center",
    justifyContent:"center",
    backgroundSize:"cover"
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
    marginLeft:20,
    marginBottom:100
  }
});

