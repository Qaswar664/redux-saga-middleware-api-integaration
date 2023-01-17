
import { ADD_TO_CART } from "./constant"
import { REMOVE_FROM_CART } from "./constant";
import { EMPTY_CART } from "./constant";



export const cartData = (data = [], action) => {
    // if (action.type === ADD_TO_CART) {
    // console.warn("ADD_TO_CART condtion ", action)

    //     // some logic
    //     return data
    // } else {
    //     return "no action called"
    // }

    switch(action.type){
        case ADD_TO_CART:
            return [...data,action.data]

            case REMOVE_FROM_CART:
                console.warn("REMOVE_FROM_CART condition ", action);
                data.length= data.length? data.length-1:[]
                return [...data]

                case EMPTY_CART:
                    console.warn("EMPTY CART condition ", action);
                    data =[]
                    return [...data]
            default:
               return data;
    }
    

}
