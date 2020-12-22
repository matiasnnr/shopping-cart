import { useState } from 'react'
import initialState from '../initialState'

// se encarga de manejar el estado, recibirlo y tener funciones que lo van a actualizar según sea el caso
const useInitialState = () => {
    const [state, setState] = useState(initialState);
    
    const addToCart = payload => {
        setState({
            ...state,
            cart: [...state.cart, payload],
        })
    }

    const removeFromCart = (payload, cartIndex) => {
        setState({
            ...state,
            cart: state.cart.filter((item, index) => index !== cartIndex)
        })
    }

    const addToBuyer = payload => {
        setState({
            ...state,
            buyer: [...state.buyer, payload]
        })
    }

    return {
        addToCart,
        removeFromCart,
        addToBuyer,
        state
    }
}

export default useInitialState;

