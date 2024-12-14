import { Button, Text, TextInput, View, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

function LoginField(){
  return(
    <View style={{marginTop:120}} >
      <View style={{backgroundColor: 'white', borderRadius:20, height:65, marginHorizontal:30, justifyContent:'center',paddingLeft:20}}>
        <TextInput placeholder="Your Email" placeholderTextColor={'#000'} style={{fontSize:18}}/>
      </View>
      <View style={{backgroundColor: 'white', borderRadius:20, height:65,  marginTop:16,marginHorizontal:30, justifyContent:'center',paddingLeft:20}}>
        <TextInput placeholder="Your Password" placeholderTextColor={'#000'} style={{fontSize:18}}/>
      </View>
    </View>
  );
}



 function HomeScreen() {

  return (
   
  
    <View style={{ backgroundColor: 'white', flex:1}}>
  <Image style={{width:'100%', height:'100%',position:'absolute'}} source={require('../../assets/images/bg.jpg')}/>

  
  <Text style={{fontSize:45, color:'white', fontWeight:'600', marginTop:100 , marginLeft:20}}>{'Welcome\n Back'}</Text>

  <KeyboardAwareScrollView keyboardShouldPersistTaps={'never'}>

  <LoginField/>
  
  </KeyboardAwareScrollView> 
  </View>
 
  );  
}


export default HomeScreen