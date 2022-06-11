// import { View, Text } from 'react-native'
import React,{useState,Component} from 'react'
import { Image,StyleSheet, Text, Dimensions,View,ImageBackground, TextInput,ScrollView,SafeAreaView} from 'react-native';

const images  = [
    'https://st2.depositphotos.com/3662505/6878/i/600/depositphotos_68789187-stock-photo-students.jpg',
    'https://image.cnbcfm.com/api/v1/image/106922887-1628206615260-gettyimages-887132600-as1700__08.jpeg',
    'https://www.cicnews.com/wp-content/uploads/2022/01/what-to-know-about-life-in-canada-as-a-student-scotiabank-1200-x-800.jpg'

]
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function slider() {
  const [imageActive, setimageActive] = useState()
    onchange = (nativeEvent) =>{
        if(nativeEvent){
            const slide = Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width)
           if(slide != imageActive){
               setimageActive(slide)
           } 
        }
    }
 return (
    <ScrollView>
<SafeAreaView style={styles.container}>
    <View style={styles.wrap}>
    <ScrollView
        onScroll={({nativeEvent})=> onchange(nativeEvent)}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        style={styles.wrap}
    >
        {
            images.map((e,i)=>
                <Image
                    key={e}
                    resizemode='scratch'
                    style={styles.wrap}
                    source={{uri:e}}
                />   
            )
        }
    </ScrollView>
        <View style={styles.wrapDot}>
            {
                images.map((i,e)=>{
                    <Text
                        key={e}
                        style={imageActive == i ? styles.dotActive : styles.dot}
                    >
                        &#x25cf;
                    </Text>
                })
            }
        </View>  
            


    </View>
        <View style={styles.main2}>
            <Text style={{fontSize:25,fontWeight:'bold',textAlign:'center',marginTop:20}}>
                Sucess Story of SMIT STUDENTS
            </Text>
            <View style={styles.boxes}>
                <View style={styles.box1}>
                <ImageBackground style={styles.img} source={{uri: "https://image.cnbcfm.com/api/v1/image/106922887-1628206615260-gettyimages-887132600-as1700__08.jpeg"}}></ImageBackground>
                </View>
                <View style={styles.box1}>
                <ImageBackground style={styles.img} source={{uri: "https://st2.depositphotos.com/3662505/6878/i/600/depositphotos_68789187-stock-photo-students.jpg"}}></ImageBackground>
                </View>
                <View style={styles.box1}>
                    <ImageBackground style={styles.img} source={{uri: 'https://www.cicnews.com/wp-content/uploads/2022/01/what-to-know-about-life-in-canada-as-a-student-scotiabank-1200-x-800.jpg'
    }}></ImageBackground>
                
                </View>
                <View style={styles.box1}>
                <ImageBackground style={styles.img} source={{uri: "https://image.cnbcfm.com/api/v1/image/106922887-1628206615260-gettyimages-887132600-as1700__08.jpeg"}}></ImageBackground>
                </View>
                <View style={styles.box1}>
                <ImageBackground style={styles.img} source={{uri: 'https://www.cicnews.com/wp-content/uploads/2022/01/what-to-know-about-life-in-canada-as-a-student-scotiabank-1200-x-800.jpg'
}}></ImageBackground>
                
                </View>
                <View style={styles.box1}>
                <ImageBackground style={styles.img} source={{uri: "https://st2.depositphotos.com/3662505/6878/i/600/depositphotos_68789187-stock-photo-students.jpg"}}></ImageBackground>
                </View>
            </View>          
      </View>
    
</SafeAreaView>
</ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    wrap:{
        width:WIDTH,
        height:HEIGHT * 0.25,
    },
    wrapDot:{
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        alignSelf:'center'
    },
    dotActive:{
        margin:3,
        color:'black',
    },
    dotActive:{
        margin:3,
        color:'#fff',
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
    width:150,
    height:150,   
    // backgroundColor:'#000',
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
    img:{
        flex:10,
        width:100+"%",
        height:100+"%",
        resizeMode:'contain', 
        alignItems:"center",
        justifyContent:"center",
        backgroundSize:"cover"
      },
    
})