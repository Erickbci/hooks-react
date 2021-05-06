import React, { useContext } from 'react'

import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

import DataContext from '../../data/DataContext'
import {AppContext} from '../../data/Store'

const UseContext = (props) => {
    const { state, setState } = useContext(DataContext)

    function addNumber(delta) {
        setState({
            ...state,
            number: state.number + delta
        })
    }

    const { number, setNumber, text } = useContext(AppContext)

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Accepts a object of context and returns the current value of context!"
            />

            <SectionTitle title="Exercise #01" />

            <div className="center">
                <span className="text">{state.number}</span>
                <span className="text">{state.text}</span>

                <div>
                    <button 
                    className="btn"
                    onClick={() => addNumber(-1)}
                    >-1</button>

                    <button 
                    className="btn"
                    onClick={() => addNumber(1)}
                    >+1</button>

                </div>
            </div>

            <SectionTitle title="Exercise #02" />

            <div className="center">
                <span className="text">{text}</span>
                <span className="text">{number}</span>
                
                <div>
                    <button 
                    className="btn"
                    onClick={() => setNumber(number - 1)}
                    >-1</button>

                    <button 
                    className="btn"
                    onClick={() => setNumber(number + 1)}
                    >+1</button>

                </div>

            </div>

        </div>
    )
}

export default UseContext
