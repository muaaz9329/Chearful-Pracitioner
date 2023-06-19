import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AnimatedLottieView from 'lottie-react-native'

const Success = () => {
    const animationRef = useRef()
    const [animation, setAnimation] = useState(true)
    useEffect(()=>{
        animationRef.current?.play(0, 60);
    },[])

    const LoadingSuccess = async ()=>{
       
       await animationRef.current?.play(60, 120);
     setAnimation(false)
    }
  return (
    <SafeAreaView>
      <AnimatedLottieView ref={animationRef} source={require('./animation/Success.json')} autoPlay loop={animation} style={styles.AnimatedView} />
        <Button onPress={LoadingSuccess} title="Success" />
    </SafeAreaView>
  )
}

export default Success

const styles = StyleSheet.create({
    AnimatedView: {
        width: 200,
        height: 200,
        alignSelf: 'center'

    }
})