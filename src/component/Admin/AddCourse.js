// import { View, Text,StyleSheet } from 'react-native'
import {ScrollView, StyleSheet, Text, View,ImageBackground, TextInput,TouchableOpacity,} from 'react-native';
import React, {useState} from 'react'
import auth from '@react-native-firebase/auth';
// import { useNavigation } from '@react-navigation/native';
import { firebase } from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database';
// import { ScrollView } from 'react-native-gesture-handler';
export default function AddCourse() {
    const [name,setName] = useState();
    const [duration,setDuration] = useState();
    const [timming,setTimming] = useState();
    const [day,setDay] = useState();
    const [teacher,setTeacher] = useState();
    const [criteria ,setCriteria ] = useState();   
    const [message,setMessage] = useState("");
    AddCourse = () =>{
        // var key = database().ref('course').push().getkey();
        var obj = {
            name:name,
            duration:duration,
            timming:timming,
            day:day,
            teacher:teacher,
            criteria:criteria,
                }
        database().ref('course').push(obj);
    }

    return (

      <ScrollView>
      <View style={styles.container}>
        <View style={styles.main1}>
            <Text style={styles.heading}> ADD COURSE  </Text>
        </View>
        {/* <ScrollView> */}
      <ImageBackground style={styles.img} source={{uri: "https://thumbs.dreamstime.com/b/cement-gray-texture-cement-gray-texture-background-high-res-135880292.jpg"}}>
        <View style={styles.form}>
       {/* <Text style={styles.text}>Log In</Text> */}
         <TextInput style={styles.textfield} placeholder="Course Name"
             value={name} 
            onChangeText={(e)=>setName(e)}
          />
          <TextInput style={styles.textfield} placeholder="Course Duration"
             value={duration} 
            onChangeText={(e)=>setDuration(e)}
          />
          <TextInput style={styles.textfield} placeholder="Course Teacher"
             value={teacher} 
            onChangeText={(e)=>setTeacher(e)}
          />
          <TextInput style={styles.textfield} placeholder="Course Tmming"
             value={timming} 
            onChangeText={(e)=>setTimming(e)}
          />
        <TextInput style={styles.textfield} placeholder="Course Days"
             value={day} 
            onChangeText={(e)=>setDay(e)}
            />
          <TextInput style={styles.textfield} placeholder="Criteria"
             value={criteria} 
            onChangeText={(e)=>setCriteria(e)}
            />
          <View style={styles.btnGroup}>            
            {/* <TouchableOpacity style={styles.btn} onPress={()=>handleLogin()}>
             <Text style={styles.text1}>Sign In</Text>
           </TouchableOpacity> */}
           <TouchableOpacity style={styles.btn} onPress={()=>{AddCourse()}}>
             <Text style={styles.text1}>Add Course</Text>
           </TouchableOpacity>
         </View>
           <Text>
              {message}
            </Text>

    
    </View>
      </ImageBackground>
    {/* </ScrollView> */}
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
main1:{
    flex:0,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#eee",
    width:"100%",
    
},
form:{
    // flex:
},
heading:{
  marginTop:20,
  marginBottom:20,
  color:"#000",
    fontSize:30,
},
img:{
    width:500,
    height:740,
    resizeMode:'contain', 
    alignItems:"center",
    justifyContent:"center",
  },
  textfield:{
    // padding:10,
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
      flexDirection:'row'
  }


,



  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop:-30
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
    // marginLeft:10
  }


  

})