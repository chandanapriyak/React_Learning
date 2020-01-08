import React from 'react'
import Person from './Person'

// function NameList() {
//     const names = ['Chandana', 'Priya', 'Roja']
//     const nameList = names.map(name => <h2>{name}</h2>)
//     return (<div>{nameList}</div>)
// }

function NameList()
{
    const names = ['Chandana','Priya','Roja','Chandana']
    const persons = [
        {
            id: 1,
            name: 'Chandana',
            age: 25,
            Skill: 'Node'
        },
        {
            id: 2,
            name: 'Priya',
            age: 26,
            Skill: 'React'
        },
        {
            id: 3,
            name: 'Roja',
            age: 28,
            Skill: 'Angular'
        }

    ]

    const nameList = names.map((name,index) => <h2 key={index}>{index} {name}</h2>)
  return (<div>{nameList}</div>)

}

export default NameList
