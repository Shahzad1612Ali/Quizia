import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {

  const navigation=useNavigation();

  // const gotoGK=()=>{
  //   console.log('Going To GK')
  //   navigation.navigate('GK');
  // }
  
  
  return (
    <View style={{display:'flex',flex:1, alignItems:'center', justifyContent:'space-evenly'}}>
    <Text style={{textAlign:'center', fontWeight:'bold', fontSize:35}}>Ready For Quiz?</Text>
    <View style={{width:'100%', minHeight:'60%',display:'flex', alignItems:'center', justifyContent:'space-between'}}>
    <TouchableOpacity style={styles.navButton} onPress={()=>{navigation.navigate('GK', {namePakro:'Haji Bey'})}}>
        <Text style={styles.navButtonText}>
          General Knowledge
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton} onPress={()=>navigation.navigate('PakStudy')}>
      <Text style={styles.navButtonText}>
          Pakistan Studies
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton} onPress={()=>navigation.navigate('Science')}>
      <Text style={styles.navButtonText}>
          Science
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton} onPress={()=>navigation.navigate('Math')}>
      <Text style={styles.navButtonText}>
          Mathematics
        </Text>
      </TouchableOpacity>
    </View>

  </View>
  )
}

const styles=StyleSheet.create({
  navButtonText:{
    textAlign:'center', color:'white', textAlignVertical:'center', fontWeight:'bold', fontSize:20, margin:'auto'
  },
  navButton:{
    width:'80%', height:'15%', backgroundColor:'blue', borderRadius:15, elevation:5
  }
})

export default HomeScreen

