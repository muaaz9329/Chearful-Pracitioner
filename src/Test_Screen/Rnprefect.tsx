import React, { useRef } from 'react';
import { StyleSheet, SafeAreaView, Button } from 'react-native';
import { SketchCanvas, SketchCanvasRef } from 'rn-perfect-sketch-canvas';

const Rnprefect = () => {
  const canvasRef = useRef<SketchCanvasRef>(null);

  return (
    <SafeAreaView style={styles.container}>
      <SketchCanvas
        ref={canvasRef}
        strokeColor={'black'}
        strokeWidth={8}
        containerStyle={styles.container}
      />
      <Button onPress={()=>canvasRef.current?.reset()} title="Reset" />
    </SafeAreaView>
  );
}

export default Rnprefect

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});