import { ADD_TO_CART } from "./constant"
import { REMOVE_FROM_CART } from "./constant";
import { EMPTY_CART } from "./constant";

export const cartData = (data = [], action) => {
    switch(action.type){
        case ADD_TO_CART:
            return [...data,action.data]

            case REMOVE_FROM_CART:
                console.warn("REMOVE_FROM_CART condition ", action);
                const remainingItems= data.filter((item)=>item.id!==action.data)
                return [...remainingItems]
                
              

                case EMPTY_CART:
                    console.warn("EMPTY CART condition ", action);
                    data =[]
                    return [...data]
            default:
               return data;
    }
}
