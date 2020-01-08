import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log('Button clicked')
    }
    return (
        <div>
            <button onClick={clickHandler}><h1>Click</h1></button>
        </div>
    )
}

export default FunctionClick
