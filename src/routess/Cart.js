import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, increase } from "./../store/userSlice.js";
// import './Cart.css'
import { addCount } from "./../store.js"

function Cart(){

    // let a = useSelector((state) => state.user)
    // console.log(a)
    // console.log(a.user)
    // console.log(a.stock)

    let state = useSelector((state) => state)
    console.log(state.cart)

    let dispatch = useDispatch() // store.js 한테 요청을 보내주는 함수


    return (
        <div>
            {state.user.name}({state.user.age}) 의 장바구니
            <button className="change-name" onClick={() => {
                dispatch(changeName())
            }}>이름 변경</button>
            <button onClick={() => {
                dispatch(increase(2))
            }}>나이 추가</button>
            <Table>
                <thead>
                    <tr>
                        <th>no</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map((a, i) =>
                            <tr key={i}>
                                <td>{state.cart[i].id}</td>
                                <td>{a.name}</td>
                                <td>{state.cart[i].count}</td>
                                <td onClick={() =>{
                                    dispatch(addCount(state.cart[i].id))
                                }}>변경</td>
                            </tr>
                        )
                    }

                </tbody>
            </Table>
        </div>
    )
}

export default Cart;