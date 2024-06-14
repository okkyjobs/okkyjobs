import { configureStore, createSlice } from "@reduxjs/toolkit";


let stock = createSlice({
    name: "stock",
    initialState : [10, 11, 12]
})

let cart = createSlice({
    name : 'cart',
    initialState : [
        {id : 0, name : "white shoes", count : 2},
        {id : 2, name : "pink shoes", count : 3}
    ],
    reducers : {
        addCount(state, action){
            //state[action.payload].count += 10

            let id = state.findIndex((a) => {return a.id === action.payload})
            state[id].count += 10
        },
        addItem(state, action) {
            state.push(action.payload)
        }
    }
})

export let { addCount, addItem } = cart.actions

export default configureStore ({
    reducer: {
        // 등록
        // user : user.reducer,
        stock : stock.reducer,
        cart : cart.reducer
    }
})

