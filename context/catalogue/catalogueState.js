import React,{ useReducer} from "react";
import CatalogueContext from "./catalogueContext";
import CatalogueReducer from "./catalogueReducer";
import { SELECCIONAR_PRODUCTO } from "../../types";


const CatalogueState = props =>{
    // Crear estado inicial
    const inicialState ={
        catalogo: [],
        NuestroCatalogue: null
    }
    //Definir useReducer
    const[state, dispatch] = useReducer(CatalogueReducer, inicialState)
    
    const seleccionarProducto = NuestroCatalogue => {
        dispatch({
            type: SELECCIONAR_PRODUCTO,
            payload: NuestroCatalogue
        })
    }

    return(
        <CatalogueContext.Provider
            value={{
                catalogo: state.catalogo,
                NuestroCatalogue: state.NuestroCatalogue,
                seleccionarProducto
            }}
        >
            {props.children}
        </CatalogueContext.Provider>
    )

}
export default CatalogueState;