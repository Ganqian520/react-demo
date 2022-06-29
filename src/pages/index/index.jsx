import { useState, useMemo, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import store from '../../redux/index'
import ClassC from './components/class'

export default function Index() {
    const [count, setCount] = useState(0)
    const dispatch = useDispatch()
    const b = useSelector(state => state.b)
    function handleClick() {
        setCount(count + 1)
        dispatch({ type: 'A2', data: b + 1 })
    }
    return (
        <div className="App">
            <button onClick={handleClick}>{b}</button>
            <A />
            <ClassC />
        </div>
    )
}

function A() {
    const a = useSelector(state => state.a)
    useEffect(() => {
        const unSubcribe = store.subscribe(() => {
            console.log(store.getState().a)
        })
        return unSubcribe
    }, [])
    return (
        <div>
            <div>A:{a}</div>
        </div>
    )
}