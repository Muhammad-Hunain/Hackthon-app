import { View, Text,StyleSheet } from 'react-native'
import React from 'react' 

export default function flex() {
  return (
    <View style={styles.container}>
        <View style={styles.main1}>

        </View>
        <View style={styles.main2}>
            <View style={styles.boxes}>
                <View style={styles.box1}>
                <Text>Item1</Text>
                </View>
                <View style={styles.box1}>
                <Text>Item1</Text>
                </View>
                <View style={styles.box1}>
                <Text>Item1</Text>

                </View>
                <View style={styles.box1}>
                <Text>Item1</Text>

                </View>
                <View style={styles.box1}>
                <Text>Item1</Text>

                </View>
                <View style={styles.box1}>
                <Text>Item1</Text>

                </View>
        
            </View>
        </View>
        <View style={styles.main3}>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
container:{
    flex:1,
    // backgroundColor:"red",
    alignItems:"center"
},
main1:{
    flex:1,
    backgroundColor:"green",
    width:"100%"
},
main2:{
    flex:8,
    // backgroundColor:"blue",
    width:"100%"
},
main3:{
    flex:1,
    backgroundColor:"yellow",
    width:"100%"
},
boxes:{
    marginTop:40,
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    flexWrap:"wrap",
},
box1:{
// backgroundColor:'#fff',
width:100,
height:100,   
marginBottom:10,
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,
},





})