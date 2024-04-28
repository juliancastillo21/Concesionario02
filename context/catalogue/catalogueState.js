import React,{ useReducer} from "react";
import firebase from "../../firebaseDB";
import CatalogueContext from "./catalogueContext";
import CatalogueReducer from "./catalogueReducer";
import Home from "../../src/Screens/Home";

const CatalogueState = props =>{
    // Crear estado inicial
    const inicialState ={
        Home: []
    }
    //Definir useReducer
    const[state, dispatch] = useReducer(CatalogueReducer, inicialState)
    return(
        <CatalogueContext.Provider
            value={{
                Home: state.Home, firebase
            }}
        >
            {props.children}
        </CatalogueContext.Provider>
    )

}
export default CatalogueState;