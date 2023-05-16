import React, { useRef, useState } from 'react';
import { StyleSheet, SafeAreaView, Button } from 'react-native';
import { SketchCanvas, SketchCanvasRef } from 'rn-perfect-sketch-canvas';

const Rnprefect = () => {
  const canvasRef = useRef<SketchCanvasRef>(null);
  const [color , setColor] = useState('rgba(0,0,0,0.2)')
  return (
    <SafeAreaView style={styles.container}>
      <SketchCanvas
        ref={canvasRef}
        strokeColor={color}
        strokeWidth={8}
        containerStyle={styles.container}

      />
      <Button onPress={()=>canvasRef.current?.reset()} title="Reset" />
      <Button onPress={()=>setColor('rgba(0,0,0)')} title="black" />
      <Button onPress={()=>setColor('#fff')} title="erase" />
    </SafeAreaView>
  );
}

export default Rnprefect

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});