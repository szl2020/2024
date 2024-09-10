import { Context } from './themeContext'
import { forwardRef, useContext, useEffect, useImperativeHandle, useRef } from 'react'
function HelloWorld() {
    const context = useContext(Context)
    const inputRef = useRef(null)
    const childRef = useRef(null)
    useEffect(() => {
        console.log(childRef);
    }, [])
    return (
        <div>
            HelloWorld
            <input ref={inputRef} />
            <button onClick={() => {
                inputRef.current.value = context
                console.log(childRef.current);
            }}>click</button>
            <Child ref={childRef} />
        </div>
    )
}
const Child = forwardRef(function (props, ref) {
    let childFn = () => {
        console.log('我是child的函数');
        return 1
    }
    useImperativeHandle(ref, () => {
        return {
            childFn
        }
    })
    return <div >我是child</div>
})
const withHoc = (Com) => {
    const context = 'ceshi'
    return (props) => {
        return (<Context.Provider value={context + '123'}><div>
            <h1>123</h1>
            <Com />
        </div></Context.Provider>)
    }
}
export default withHoc(HelloWorld)