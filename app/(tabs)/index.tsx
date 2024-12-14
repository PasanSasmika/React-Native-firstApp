import LoginScreem from "@/components/screens/LoginScreem";
// import SignupScreen from "@/components/screens/SignupScreen";
import { View } from "react-native";




 function HomeScreen() {

  return (
   
  
    <View style={{ backgroundColor: 'white', flex:1}}>
      <LoginScreem/>
      {/* <SignupScreen/> */}
  
  </View>
 
  );  
}


export default HomeScreen