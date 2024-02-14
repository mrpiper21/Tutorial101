import { View, Text } from 'react-native'
import LottieView from 'lottie-react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
    const navigation = useNavigation() as any
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home')
        }, 2500)
    },[])
  return (
    <View className='bg-yellow-400 flex-1 justify-center items-center'>
        {/**welcome image */}
        <View
        style={{
            padding: hp(7)
        }}
         className='bg-white/20 rounded-full'>
            <View 
                style={{
                    padding: hp(7)
                }}
                className='bg-white/20 rounded-full'>
                <LottieView
                    source={require("../../assets/loaders/welcome.json")}
                    autoPlay
                    loop
                    style={{
                        width: hp(15),
                        height: wp(30)
                    }}
                 />
            </View>
           
        </View>
        {/**welcome text description */}
        <View style={{ marginTop: hp(10)}}className='flex items-center space-y-4 '>
                <Text style={{ 
                    fontSize: hp(5)
                }} className='font-bold text-white tracking-widest'>Foody</Text>
                <Text style={{ 
                    fontSize: hp(2)
                }} className='text-white'>food is always good</Text>
            </View>

    </View>
  )
}

export default WelcomeScreen