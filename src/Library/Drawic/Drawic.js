import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Provider, useDispatch } from "react-redux";
import { store } from "./utils/store/store";
import Index from "./Main";
import Main from "./Main";

/**
 *
 * Drawing library made by
 * @author Muaaz Bin Sarfaraz
 * @genral Name given to this library by Abdullah Sajjad (Peer Sahib , My Mentor , My Teacher, My Brother , My Friend , My Colleague , My Murshad)
 * @{V1.0.0}
 *
 */

const Drawic = () => {



  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default Drawic;


