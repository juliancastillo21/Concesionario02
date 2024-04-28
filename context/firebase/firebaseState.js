import React,{ useReducer} from "react";
import firebase from "../../firebaseDB";
import FirebaseContext from "./firebaseContext";
import FirebaseReducer from "./firebaseReducer";
import Catalogue from "../../src/Screens/Catalogue";

const FirebaseState = props =>{
    // Crear estado inicial
    const inicialState ={
        Catalogue: []
    }
    //Definir useReducer
    const[state, dispatch] = useReducer(FirebaseReducer, inicialState)
    return(
        <FirebaseContext.Provider
            value={{
                Catalogue: state.Catalogue, firebase
            }}
        >
            {props.children}
        </FirebaseContext.Provider>
    )

}
export default FirebaseState;