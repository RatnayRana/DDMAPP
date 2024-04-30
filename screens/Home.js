import React from 'react'
import { View, Text, ScrollView, Pressable, TextInput, Image, Dimensions } from 'react-native'
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
function Home() {
  const dimensions = Dimensions.get('window');
  const navigation = useNavigation()
  const list = [
    {
      id: 0,
      name: "ALL"

    },
    {
      id: 1,
      name: "Gho"
    },
    {
      id: 2,
      name: "Kira"
    },
    {
      id: 3,
      name: "Banchung"
    }
  ]
  const Images = [
    {
      id: 0,
      name: "banchung",
      imageUrl: require("../Images/banchung.webp")
    },
    {
      id: 1,
      name: "gho",
      imageUrl: require("../Images/gho.webp")
    },
    {
      id: 2,
      name: "Jeru",
      imageUrl: require("../Images/jeru.jpeg")
    },
    {
      id: 3,
      name: "Kira",
      imageUrl: require("../Images/kira.webp")
    }
  ]

  return (
    <ScrollView style={{ backgroundColor: '#FFFFFF' }} showsVerticalScrollIndicator={false}>
      <Text style={{ marginTop: 30, fontWeight: 'bold', fontSize: 30 }}>TradStore</Text>
      <Pressable style={{ justifyContent: "center", alignItems: "center", position: "relative" }}>
        <TextInput
          placeholderTextColor="#000000"
          placeholder="Search"  // Correct placement of placeholder
          style={{
            paddingLeft: 23,
            width: "90%",
            height: 50,
            backgroundColor: '#F1F3F2',
            marginTop: 12,
            borderRadius: 12,
            color: "white"
          }}
        />
        <FontAwesome top={23} right={39} name="search" size={24} color="black" position='absolute' />
      </Pressable>
      <View style={{ backgroundColor: "#19C463", width: "90%", height: 200, borderRadius: 10, marginTop: 23, marginLeft: 20, flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
        <Text style={{ color: "white", fontSize: 25, marginLeft: 23, fontWeight: "bold" }}>Get 50%  {'\n'} of Sales</Text>
        <Image source={require("../Images/gho.webp")} style={{ width: 150, height: 150, resizeMode: "contain", marginLeft: 12 }} />
      </View>
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "centers", marginTop: 23 }}>
        <Text style={{ color: "#000000", fontWeight: "bold", fontSize: 19, marginLeft: 20 }}>Categories</Text>
        <Pressable>
          <Text style={{ color: "#9DE5BD", fontWeight: "bold", fontSize: 19, marginRight: 20 }}>See All</Text>
        </Pressable>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {list.map((item, index) => (
          <Pressable key={item.id} style={{ marginHorizontal: 4, marginTop: 20, justifyContent: 'center' }} >
            <Text style={{
              width: 90,
              height: 40,
              marginLeft: 12,
              borderRadius: 12,
              textAlign: 'center',
              lineHeight: 40, 
              backgroundColor: '#EEE'
            }}>
              {item.name}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
      <View style={{ flexDirection: "row", alignItems: "center", marginTop: 23, flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
        {Images.map((item, index) => (
          <Pressable key={item.id} style={{ margin: 5 }} onPress={() => navigation.navigate("ProductDetails", {
            id: item.id,
            name: item.name,
            imageUrl: item.imageUrl
          })}>
            <View style={{ justifyContent: "center", alignItems: "center", width: 150, height: 150 }}>
              <Image style={{ borderRadius: 7, flex: 1, width: "100%", height: "auto", resizeMode: "cover" }} source={item.imageUrl} />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 12 }}>
              <Text style={{ fontSize: 15 }}>{item.name}</Text>
              <View style={{ flexDirection: "row", gap: 12 }}>
                <AntDesign name="hearto" size={24} color="black" />
                <Text>89</Text>
              </View>
            </View>
          </Pressable>
        ))}
      </View>

    </ScrollView>
  )
}

export default Home;
