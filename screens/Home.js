import React from 'react'
import { View,Text, ScrollView, Pressable, TextInput} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
function Home() {
  return (
    <ScrollView>
      <Text style={{marginTop:30, fontWeight:'bold',fontSize:30}}>TradStore</Text>
      <Pressable style={{justifyContent:"center",alignItems:"center"}}>
        <TextInput style={{width:"90%",height:50,backgroundColor:'black',marginTop:12,borderRadius:12}}>
          	<Text style={{color:"white"}}>Search</Text>
            <FontAwesome name="search" size={24} color="black" />
        </TextInput>
      </Pressable>
    </ScrollView>
  )
}

export default Home