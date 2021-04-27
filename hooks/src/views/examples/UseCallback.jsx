import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import UseCallbackButtons from './UseCallbackButtons'


const UseCallback = (props) => {
    //using the hook useCallback
    const [count, setCount] = useState(0)

    const inc = useCallback(function (delta) { //delta is the parameter of inc()
        setCount(curr => curr + delta) // curr = current value(the same of  count)
    }, [setCount])

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Return a memorized function!"
            />

            <SectionTitle title="Using useCallback for memorize a function #01" />
            <div className="center">
                <span>Look at the console to see how many times the function is renders</span>
                <span className="text">{count}</span>

                <UseCallbackButtons inc={inc} />
            </div>
        </div>
    )
}

export default UseCallback
