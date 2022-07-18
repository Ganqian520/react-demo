import { Input } from 'antd'
import { useState, useMemo, useRef, useEffect, Component } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { merge, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Route, Switch,useHistory } from 'react-router-dom';
import store from '@/store/store.js'
import ClassC from './components/class'
import axios from '@/api'
import test from './rxjs'

export default function Index() {
    console.log('function Index');
    const url = 'https://mock.presstime.cn/mock/62bc24228bb737002977c1f4/example/a'
    useEffect(() => {
        
        
    }, [])
    const dispatch = useDispatch()
    const history = useHistory()

    const [index, setIndex] = useState('index')

    const { a } = useSelector(store => store.state1)
    const { b } = useSelector(store => store.state2)
    function handleClick() {
        setIndex(index+'1')
        // dispatch({ type: '', data: a + 1 })
    }
    const obj = {a:A}
    return (
        <div className="App" style={{ padding: 20 + 'px', border: 'solid' }}>
            <button onClick={handleClick}>App组件 index:{index} a:{a}   b:{b}</button>
            {/* <Switch>
                <Route path='/index/a' component={A}></Route>

            </Switch> */}
            <A />
        </div>
    )
}

function A(props) {
    console.log('function A');
    const [a,setA] = useState(0)
    return (
        <div style={{ padding: 20 + 'px', border: 'solid' }}>
            <div ></div>
            <button onClick={()=>setA(a+1)}>A组件：{a}</button>
            <Achild />
        </div>
    )
}
function Achild(props) {
    console.log('function Achild');
    const [a,setA] = useState(0)
    return (
        <div style={{ padding: 20 + 'px', border: 'solid' }}>
            <div ></div>
            <button onClick={()=>setA(a+1)}>Achild组件：{a}</button>
        </div>
    )
}
function Flex() {
    
}