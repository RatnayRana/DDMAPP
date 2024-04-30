import React from 'react';
import { View, Text, ScrollView, Image, ImageBackground, TextInput, Pressable } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
function ProductDetails() {
    const route = useRoute();
    return (
        <ScrollView vertical showsVerticalScrollIndicator={false}>
            <View style={{ flex: 1, justifyContent: "center", borderColor: "black", alignItems: "center", borderRadius: 10, overflow: 'hidden', elevation: 5 }}>

                <ImageBackground style={{ flex: 1, width: '100%', height: 400, alignItems: "center", justifyContent: "center" }}>
                    <Image source={route.params?.imageUrl} style={{ width: '100%', resizeMode: "cover", height: 400 }} />
                </ImageBackground>
            </View>
            <Text style={{ fontSize: 23, marginLeft: 12, marginTop: 12, fontWeight: 600 }}>{route.params?.name}</Text>
            <View style={{ flex: 1, flexDirection: "row", gap: 20, marginTop: 23 }}>
                <Text style={{
                    width: 90,
                    height: 40,
                    marginLeft: 12,
                    borderRadius: 12,
                    textAlign: 'center',
                    lineHeight: 40,
                    borderWidth: 1,
                    borderColor: '#E0E0E0',
                    gap: 23
                }}>
                    <View style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-around", gap: 20 }}>
                        <AntDesign name="staro" size={24} color="black" />
                        <Text>45</Text>
                    </View>
                </Text>

                <Text style={{
                    width: 90,
                    height: 40,
                    marginLeft: 12,
                    borderRadius: 12,
                    textAlign: 'center',
                    lineHeight: 40,
                    borderWidth: 1,
                    borderColor: '#E0E0E0',
                    gap: 23
                }}>
                    <View style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-around", gap: 20 }}>
                        <AntDesign name="hearto" size={24} color="black" />
                        <Text>45</Text>
                    </View>
                </Text>

                <Pressable>
                    <Text style={{
                        width: 120,
                        height: 40,
                        marginLeft: 12,
                        borderRadius: 12,
                        textAlign: 'center',
                        lineHeight: 40,
                        borderWidth: 1,
                        borderColor: '#E0E0E0',
                        backgroundColor: "#39A57C",
                        gap: 23,

                    }}>Review</Text>
                </Pressable>
            </View>

            <View style={{
                flex: 1, flexDirection: "row",
                flexWrap: "wrap", justifyContent: "center",  marginTop: 23,alignItems: "center"
            }}>
                <Text style={{ lineHeight: 28, marginLeft: 18 }}>
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.
                </Text>

            </View>
            <Text style={{borderBottomColor:"#B7B7B7",borderBottomWidth: 1,marginTop:26}}></Text>
            <View style={{marginTop:23,flex:1,flexDirection:"row",justifyContent:"space-around"}}> 
                <Text style={{fontSize:27,fontWeight:600}}>Nu  700</Text>
                
                <Pressable>
                    <Text style={{
                        fontSize:20,
                        fontWeight:600,
                        marginTop:-9,
                        color:"#ffffff",
                        width: 200,
                        height: 55,
                        marginLeft: 12,
                        borderRadius: 12,
                        lineHeight:50,
                        textAlign: 'center',
                        borderWidth: 1,
                        borderColor: '#E0E0E0',
                        backgroundColor: "#19C463"

                    }}>Add to Cart</Text>
                </Pressable>
              
            </View>
        </ScrollView>
    )
}

export default ProductDetails;
