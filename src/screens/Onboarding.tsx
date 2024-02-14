import { View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native'
import React from 'react'
const Onboarding = () => {
  return (
    <SafeAreaView className={'flex-1 bg-black'}>
        <View className='left-[365] mt-[30]'>
          <Text className='text-2xl text-white'>skip</Text>
        </View>
        <View className='justify-center top-10 px-[15] mt-[30]'>
          <Text className='font-bold text-4xl text-white'>Discover great events at your fingertips</Text>
        </View>
        <View className='justify-center top-9 px-[15] mt-10'>
          <Text className='text-xl text-gray-300 font-normal'>Find and attend events that fuel their passions. From music festivals, arts, conferences and fundraisers, to gaming competitions</Text>
        </View>
        <View className='mt-[100] left-[70]'>
          <Image 
          source={require('../../assets/imagediv.jpg')}/>
        </View>
        <TouchableOpacity>
          <View className='mt-[130] items-center  size-full bg-white rounded-xl py-3 w-11/12 left-4'>
            <Text className='text-black text-2xl'>Next</Text>
          </View>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Onboarding