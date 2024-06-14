import { createSlice } from "@reduxjs/toolkit"

// store에 state보관하는 법
let user = createSlice({
    name : 'user', // state 이름
    initialState: {name: 'hong', age: 18}, // 값

    // 수정하는 함수들 등록
    reducers : {
        changeName(state){ // state -> 기존값
            //return {name: 'kim', age: 18} // 변경값
            state.name = "kim"
        },
        increase(state, action) {
            state.age += action.payload
        }
    }
})

export let {changeName, increase} = user.actions // 변경함수들 등록

export default user