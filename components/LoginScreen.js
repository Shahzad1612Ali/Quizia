import { View, Text, TextInput, TouchableOpacity,ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const Login = () => {

  const navigation=useNavigation();
  const [LoginData,setLoginData]=useState([]);
  const [userName, setuserName]=useState('');
  const [myPassword, setPassword]=useState('');
  const [loading, setLoading] = useState(false); // Loading state

  const ReadData = async () => {
    setLoading(true); // Set loading to true before fetching data
    try {
      const response = await fetch('https://sheetdb.io/api/v1/mstlueekjwc12');
      const data = await response.json();
      setLoginData(data);
      console.log(data);
      checkCridentials();
    } catch (error) {
      console.error('Error fetching data:', error);
    }finally {
      setLoading(false); // Set loading to false once fetching is complete
    }

  };

  const checkCridentials=()=>{
    LoginData.forEach((item) =>{
      if(item.username==userName && item.password==myPassword)
      {
        console.log("Login Successfully");
        navigation.navigate('Home');
      }
    } )
  }



  return (
    <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
      <View style={{width:'80%', height:'40%', elevation:5, backgroundColor:'grey', justifyContent:'space-around', alignItems:'center', borderRadius:10}}>
     <Text style={{color:'white', fontSize:24, fontWeight:'bold'}}>Login Form</Text>

      <TextInput
        style={{width:'80%', height: 40, backgroundColor:'white', padding:'8', borderRadius:5,elevation:5,color:'black', paddingLeft:5}}
        placeholder="Username"
        onChangeText={(txt)=>{setuserName(txt)}}
      />

      <TextInput
      style={{width:'80%', height: 40, backgroundColor:'white', padding:'8', borderRadius:5,elevation:5,color:'black', paddingLeft:5}}
      placeholder="Password"
      onChangeText={(txt)=>{setPassword(txt)}}
    />

      <TouchableOpacity onPress={ReadData} style={{backgroundColor:'black', elevation:5, borderRadius:5, width:'40%', height:40}}>
        <Text style={{color:'white', padding:'auto', margin:'auto'}}>Login</Text>
      </TouchableOpacity>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      </View>
    </View>
  )
}

export default Login