import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation()

    const func = () => {
        navigation.navigate('Onboard')
    }
  return (
    <SafeAreaView className='flex-1 justify-center items-center'>
        <View>
            <Text onPress={func}>To be continue...</Text>
        </View>
        
    </SafeAreaView>
  )
}

export default HomeScreen