import React,{ useReducer} from "react";
import CatalogueContext from "./catalogueContext";
import CatalogueReducer from "./catalogueReducer";
import { SELECCIONAR_PRODUCTO } from "../../types";
import { CONFIRMAR_COMPRA } from "../../types";
import {ELIMINAR_CARRO} from "../../types";
import { MOSTRAR_RESUMEN } from "../../types";

const CatalogueState = props =>{
    // Crear estado inicial
    const inicialState ={
        catalogo: [],
        NuestroCatalogue: null,
        total: 0
    }
    //Definir useReducer
    const[state, dispatch] = useReducer(CatalogueReducer, inicialState)
    
    const seleccionarProducto = NuestroCatalogue => {
        dispatch({
            type: SELECCIONAR_PRODUCTO,
            payload: NuestroCatalogue
        })
    }

    //Cuando se confirma el pedido
    const guardarCompra = compra =>{
        dispatch({
            type: CONFIRMAR_COMPRA,
            payload: compra
        })
    }

    const mostrarResumen = total => {
        dispatch({
            type: MOSTRAR_RESUMEN,
            payload: total
        })
    }

    //Eliminar un articulo
    const eliminarCarro = id =>{
        dispatch({
            type: ELIMINAR_CARRO,
            payload: id
        })
    }

    return(
        <CatalogueContext.Provider
            value={{
                catalogo: state.catalogo,
                NuestroCatalogue: state.NuestroCatalogue,
                total: state.total,
                seleccionarProducto,
                mostrarResumen,
                guardarCompra,
                eliminarCarro
            }}
        >
            {props.children}
        </CatalogueContext.Provider>
    )

}
export default CatalogueState;