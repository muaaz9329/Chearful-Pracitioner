import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import { Provider, useDispatch } from "react-redux";
import { store } from "./utils/store/store";
import Main from "./Main";



/**
 *
 * Drawing library made by
 * @author Muaaz Bin Sarfaraz
 * @genral Name given to this library by Abdullah Sajjad (Peer Sahib , My Mentor , My Teacher, My Brother , My Friend , My Colleague , My Murshad)
 * @{V1.0.0}
 *
 */

const Drawic = ({view ,CanvasRef}) => {


  return (
    <Provider store={store}>
      <Main view={view} CanvasRef={CanvasRef} />
    </Provider>
  );
};

export default Drawic;





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});


