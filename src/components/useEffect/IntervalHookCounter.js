import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {
    const prop = 1
    const [count, setCount] = useState(0)
    const tick =() =>{
        setCount(prevCount =>prevCount + 1)
    }
    
    useEffect(() =>{
       function doSomething()
       {
        console.log(prop)
       }
        doSomething()
        const interval = setInterval(tick, 1000)
        return ()=>{
            clearInterval(interval)
        }
    },[prop])
    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter
