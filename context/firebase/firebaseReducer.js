import { OBTENER_CATALOGUE } from "../../types";

export default (state, action) => {
    switch (action.type) {
        case OBTENER_CATALOGUE:
            return {
                ...state,
                Catalogues: action.payload
            }
        default:
            return state;
    }
}