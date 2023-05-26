import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Krishna'
      }
      console.log("LifeCycleB : constructor");
    }

    static getDerivedStateFromProps() {
        console.log("LifeCycleB : getDerivedStateFromProps");
        return null
    }
    
    componentDidMount() {
        console.log("LifeCycleB : ComponentDidMount");
    }

  render() {
    console.log("LifeCycleB : render")
    return (
        <div>LifeCycleB
        </div>
        
    )
  }
}

export default LifeCycleB