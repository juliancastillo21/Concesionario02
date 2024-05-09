import React,{ useReducer} from "react";
import firebase from "../../firebaseDB";
import CatalogueContext from "./catalogueContext";
import CatalogueReducer from "./catalogueReducer";
import Home from "../../src/Screens/Home";
import { SELECCIONAR_PRODUCTO } from "../../types";

const CatalogueState = props =>{
    // Crear estado inicial
    const inicialState ={
        Home: [],
        NuestroCatalogue:null

    }
    //Definir useReducer
    const[state, dispatch] = useReducer(CatalogueReducer, inicialState)
    const seleccionarProducto =()=>{
        dispatch({
            type:SELECCIONAR_PRODUCTO,
            payload:NuestroCatalogue
        })
    }
    return(
        <CatalogueContext.Provider
            value={{
                Home: state.Home, firebase,seleccionarProducto
            }}
        >
            {props.children}
        </CatalogueContext.Provider>
    )

}
export default CatalogueState;