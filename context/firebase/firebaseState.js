import React, { useReducer } from "react";
import firebase from "../../firebaseDB";
import FirebaseContext from "./firebaseContext";
import FirebaseReducer from "./firebaseReducer";
import Catalogue from "../../src/Screens/Catalogue";
import { OBTENER_CATALOGUE } from "../../types";
import _ from 'lodash'


const FirebaseState = props => {
    // Crear estado inicial
    const inicialState = {
        Catalogues: []
    }
    //Definir useReducer
    const [state, dispatch] = useReducer(FirebaseReducer, inicialState)
    //consulta para traer los datos de DB
    const obtenercatalogue = () => {
        //consultar la base de datos
        firebase.db
            .collection('catalogue')
            .onSnapshot(manejarSnapshot) //para traer los datos en timpo real 

        function manejarSnapshot(snapshot) {
            let NuestroCatalogue = snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            });

            //ordenar los datos 
            NuestroCatalogue = _.sortBy(NuestroCatalogue, 'categoriaScrollView')
            dispatch({
                type: OBTENER_CATALOGUE,
                payload: NuestroCatalogue
            })

        }

    }
    return (
        <FirebaseContext.Provider
            value={{
                Catalogues: state.Catalogues, 
                firebase,
                obtenercatalogue
            }}
        >
            {props.children}
        </FirebaseContext.Provider>
    )

}
export default FirebaseState;