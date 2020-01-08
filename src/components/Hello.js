import React from 'react';

const Hello = ()=> {
// return(
//    <div>
//        <h1>Hello World!</h1>
//    </div> 
// )
return React.createElement('div', {id:'Hello', className:'dummy'}, React.createElement('h1', null,'Hello People'))
}
export default Hello;
