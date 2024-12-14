import { Button, Text, TextInput, View, Image } from "react-native";

 function HomeScreen() {

  return (
   
  <View style={{ backgroundColor: 'white', flex:1}}> 
  <Image style={{width:'100%', height:'100%',position:'absolute'}} source={require('../../assets/images/bg.jpg')}/>

  <Text style={{fontSize:45, color:'white', fontWeight:'600', marginTop:100 , marginLeft:20}}>{'Welcome\nBack'}</Text>
    
  </View>
  );  
}


export default HomeScreen