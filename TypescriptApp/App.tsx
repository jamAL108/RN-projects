import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Modal, Alert, SafeAreaView, Image, ImageBackground } from 'react-native';
import { NativeWindStyleSheet, styled } from "nativewind";
import { useState } from 'react';
import AntIcons from 'react-native-vector-icons/AntDesign';
const LinearGrad = require('./assets/images/linear.png')
NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  const [modelOpen, setModalOpen] = useState<boolean>(false)
  return (
    <SafeAreaView className='flex-1'>
      <View className='flex-1 bg-[#0e0f10] text-white border-[2px] px-[4px] border-black flex-col items-center'>
        <ImageBackground style={styles.image} source={LinearGrad} className='w-full relative flex justify-end py-[40px]  h-[250px] overflow-hidden '>
          <View className='isolate w-10 flex justify-center items-center absolute top-[30%] left-[5%]  h-10 bg-white/20 shadow-lg ring-1 ring-black/5 rounded-full'>
            <AntIcons name="arrowleft" size={28} color="black" />
          </View>
          <View className='px-[30px] flex gap-3'>
            <Text className='text-2xl'>21,546.00 USD</Text>
            <Text className='text-lg'>$21,546.00</Text>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
   image:{
      borderBottomLeftRadius:35,
      borderBottomRightRadius:35
   }
});

