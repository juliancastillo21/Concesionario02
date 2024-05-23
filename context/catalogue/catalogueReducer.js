import { SELECCIONAR_PRODUCTO,
    CONFIRMAR_COMPRA,
    ELIMINAR_CARRO, MOSTRAR_RESUMEN} from "../../types";
    

export default (state, action) => {
    switch(action.type){
        case SELECCIONAR_PRODUCTO:
            return{
                ...state,
                NuestroCatalogue: action.payload
            }
        case CONFIRMAR_COMPRA:
            return{
                ...state,
                compra: [action.payload]
            }
        case MOSTRAR_RESUMEN:
            return{
               ...state,
                total: action.payload
            }
        case ELIMINAR_CARRO:
            return{
                ...state,
                compra: state.compra.filter (articulo => articulo.id !== action.payload)
            }
        default:
            return state;
    }
}