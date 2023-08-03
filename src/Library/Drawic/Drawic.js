import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Main from "./Main";

/**
 *
 * Drawing library made by
 * @author Muaaz Bin Sarfaraz
 * @genral Name given to this library by Abdullah Sajjad (Peer Sahib , My Mentor , My Teacher, My Brother , My Friend , My Colleague , My Murshad)
 * @version 1.0.0
 * chaning of base Library and Patch the old issues and adding new features
 * @version 2.0.0
 *
 */

const Drawic = ({ view="edit", CanvasRef }) => {
  return( 
  <Main view={view} CanvasRef={CanvasRef} />
  );
};

export default Drawic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
