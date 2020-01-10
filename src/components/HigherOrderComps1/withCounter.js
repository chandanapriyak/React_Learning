import React, {Component} from 'react'

const withCounter = (WrappedComponent, incrementNumber) =>
{
   // Returns new Component,so create
   class WithCounter extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    incrementCount = () =>
    {
        this.setState( prevState =>
            {
                return { count : prevState.count + incrementNumber }
            }
        )
    }
       render()
       {
           console.log("In HOC:",this.props.name)
           return <WrappedComponent count={this.state.count} incrementCount={this.incrementCount}
                   {...this.props}/>
       }
    }
   return WithCounter
}

export default withCounter