import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useRoute } from '@react-navigation/native';
import IonicIcons from 'react-native-vector-icons/Ionicons'
import SignIn from '../component/signin'
import SignUp from '../component/signup'
import Profile from '../component/Home'
import Splash from '../component/splashScreen'
import About from '../component/about';
import Slider from '../component/slider';
import Register from '../component/Register';
// import Admin from '../component/admin'
import View from '../component/Admin/view';
import AddCourse from '../component/Admin/AddCourse';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Enroll from '../component/Admin/viewSubmittedForm'
import slider from '../component/slider';
const Tab = createMaterialBottomTabNavigator();


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function AdminDrawer(){
  return (
    <Drawer.Navigator  >
      <Drawer.Screen name="View" options={{drawerIcon:() => <IconContainer name="eye-outline"/>}} component={View} />
      <Drawer.Screen name="AddCourse" options={{drawerIcon:() => <IconContainer name="add-circle-outline"/>}} component={AddCourse}/>
      <Drawer.Screen name="Enroll" options={{drawerIcon:() => <IconContainer name="eye-outline"/>}} component={Enroll} />
    </Drawer.Navigator>
  );
}

function MyDrawer() {
  const route = useRoute();
    const{email,uid} = route.params
  return (

<Tab.Navigator initialRouteName="Slider" shifting="true"
    // activeColor="#f0edf6"
    // inactiveColor="#3e2465"
  barStyle={{ backgroundColor: '#eee' ,paddingBottom: 8, }} >
      <Tab.Screen name="Home"  component={() => <Profile uid={uid} email={email} />}  options={{ tabBarLabel: 'Home',tabBarIcon:() => <IconContainer name ="home"/>}} />
      <Tab.Screen name="About" component={Slider} options={{tabBarLabel: 'About',tabBarIcon:() => <IconContainer name ="image-outline"/>}} />
      <Tab.Screen name="Register" component={() => <Register uid={uid} email={email}/> } options={{tabBarLabel: 'Enroll',tabBarIcon:() => <IconContainer name ="information-circle-outline"/>}} />
</Tab.Navigator>
    
    // <Drawer.Navigator  >
    //   <Drawer.Screen name="Profile" options={{drawerIcon:() => <IconContainer name="person"/>}} component={() => <Profile uid={uid} email={email} />} />
    //   <Drawer.Screen name="About" options={{drawerIcon:() => <IconContainer name="setting"/>}} component={About} />
    //   <Drawer.Screen name="Register" options={{drawerIcon:() => <IconContainer name="Register"/>}} component={Register} />
    // </Drawer.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Splash"  component={Splash} options={{ headerShown: false }}  />
        <Stack.Screen name="SignUp"  component={SignUp} options={{ headerShown: false }}  />
        <Stack.Screen name="SignIn" component={SignIn}  options={{ headerShown: false }} />
        <Stack.Screen name="Drawer" component={MyDrawer} options={{ headerShown: false }}  />
        <Stack.Screen name="AdminDrawer" component={AdminDrawer} options={{ headerShown: false }}  />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const IconContainer = props =>{
  return <IonicIcons name={props.name} size={20} color={"#000"}/>
}


const IconContainer1 = props =>{
  return <IonicIcons name={props.name} size={20} color={"#000"}/>
}
export default Navigation;