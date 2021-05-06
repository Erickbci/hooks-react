import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0
  }

function reducer(state, action) {
    switch (action.type) {
        case 'numberAdd2':
            return {...state, number: state.number + 2}
        case 'numberMtp7':
            return {...state, number: state.number * 7}
        case 'numberMod25':
            return {...state, number: state.number / 25}
        case 'numberInt':
            return {...state, number: parseInt(state.number)}
        case 'numberAddN' :
            return {...state, number: state.number + action.payload}
        case 'login' :
            return {...state, user: { name: action.payload } }
        default:
            return state
    }
  }

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Another way to have a state in functional components!"
            />

            <div className="center">
                {state.user 
                    ? <span className="text">{state.user.name}</span>
                    : <span className="text">Login</span>
                }

                <span className="text">{state.number}</span>

                <div>
                    <button 
                    className="btn"
                    onClick={() => dispatch({ type: 'numberMtp7'})}
                    >x7</button>

                    <button 
                    className="btn"
                    onClick={() => dispatch({ type: 'numberMod25' })}
                    >/25</button>

                    <button 
                    className="btn"
                    onClick={() => dispatch({ type: 'numberInt'})}
                    >Int</button>


                    <button 
                    className="btn"
                    onClick={() => dispatch({ type: 'login', payload: 'ERickBatista' })}
                    >Login</button>


                    <button 
                    className="btn"
                    onClick={() => dispatch({ type: 'numberAdd2'})}
                    >+2</button>

                    <button 
                    className="btn"
                    onClick={() => dispatch({ type: "numberAddN", payload: 4})}
                    >+4</button>

                    <button 
                    className="btn"
                    onClick={() => dispatch({ type: "numberAddN", payload: -24})}
                    >-24</button>


                </div>
            </div>
        </div>
    )
}

export default UseReducer
