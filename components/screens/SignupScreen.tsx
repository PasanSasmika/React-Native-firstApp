import {  Image, Text, TextInput, View } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Icon } from '@rneui/themed';


function SignupField(){
    return(
      <View style={{marginTop:80}} >
        <View style={{backgroundColor: 'white', borderRadius:20, height:65, marginHorizontal:30, justifyContent:'center',paddingLeft:20}}>
          <TextInput placeholder="Your Name" placeholderTextColor={'#000'} style={{fontSize:18}}/>
        </View>
        <View style={{backgroundColor: 'white', borderRadius:20, height:65,  marginTop:16,marginHorizontal:30, justifyContent:'center',paddingLeft:20}}>
          <TextInput placeholder="Your Email" placeholderTextColor={'#000'} style={{fontSize:18}}/>
        </View>
        <View style={{backgroundColor: 'white', borderRadius:20, height:65,  marginTop:16,marginHorizontal:30, justifyContent:'center',paddingLeft:20}}>
          <TextInput placeholder="Your Password" placeholderTextColor={'#000'} style={{fontSize:18}}/>
        </View>
        <SignInButton/>
        <BottomSection/>
        
        
      </View>
    );
  }

  function  BottomSection(){
    return(
      <View style={{flexDirection: 'row', marginTop: 15}}>
        
       <View style={{height:70, flex:2, justifyContent:'center', alignItems:'flex-end'}}>
        <Text style={{fontSize:16, fontWeight:'700', color:'#000', marginRight:40}}>Sign in</Text>
       </View>
      </View>
    )
  }

  function SignInButton(){
    return(
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <View style={{ height:70, flex:1 , justifyContent:'center'}}>
          <Text style={{fontSize:25, fontWeight:'500', color:'#000', marginLeft:40}}>Sign Up</Text>
        </View>
        <View style={{ height:70, flex:1, justifyContent:'center', alignItems:'flex-end'}}>
          <View style={{width:55, height:55, backgroundColor: 'red', marginRight:40, borderRadius:100, justifyContent:'center', alignItems:'center'}}>
          <Icon size={40} name="arrow-forward-ios" type="material" color="black" />
          </View>
        </View>
      </View>
    )
  }

export default function SignupScreen() {
  return (
    <View style={{ backgroundColor: 'white', flex:1}}>
     <Image style={{width:'100%', height:'100%',position:'absolute'}} source={require('../../assets/images/bg.jpg')}/>
   
     
     <Text style={{fontSize:45, color:'white', fontWeight:'600', marginTop:100 , marginLeft:20}}>{'Create\naccount'}</Text>
   
     <KeyboardAwareScrollView keyboardShouldPersistTaps={'never'}>
   
     < SignupField/>
   
     </KeyboardAwareScrollView> 
     </View>
    
  )
}

