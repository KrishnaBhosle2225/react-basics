import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Krishna",
    };
    console.log("LifeCycleA : constructor");
  }

  static getDerivedStateFromProps() {
    console.log("LifeCycleA : getDerivedStateFromProps");
    return null
  }

  componentDidMount() {
    console.log("LifeCycleA : ComponentDidMount");
  }

  render() {
      console.log("LifeCycleA : render")
    return (
      <div>
        <div>LifeCycleA</div>
        <LifeCycleB></LifeCycleB>
      </div>
    );
  }
}

export default LifeCycleA;
