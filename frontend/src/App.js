// frontend/src/App.js

import React, { Component } from "react";
const trickItems = [
  {
    id: 1,
    title: "Frontside 180",
    description: "An ollie with a 180-degree frontside turn.",
    completed: true
  },
  {
    id: 2,
    title: "Backside 180",
    description: "An ollie with a 180-degree backside spin.",
    completed: false
  },
  {
    id: 3,
    title: "Stairs",
    description: "Ollies off of drops of varying heights. Measured by the number of stairs traversed.",
    completed: false
  }
  
];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      trickList: trickItems
    };
  }
  displayCompleted = status => {
    if (status) {
      return this.setState({ viewCompleted: true });
    }
    return this.setState({ viewCompleted: false });
  };
  renderTabList = () => {
    return (
      <div className="my-5 tab-list">
        <span
          onClick={() => this.displayCompleted(true)}
          className={this.state.viewCompleted ? "active" : ""}
        >
          complete
        </span>
        <span
          onClick={() => this.displayCompleted(false)}
          className={this.state.viewCompleted ? "" : "active"}
        >
          Incomplete
        </span>
      </div>
    );
  };
  renderItems = () => {
    const { viewCompleted } = this.state;
    const newItems = this.state.trickList.filter(
      item => item.completed == viewCompleted
    );
    return newItems.map(item => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={`trick-title mr-2 ${
            this.state.viewCompleted ? "completed-trick" : ""
          }`}
          title={item.description}
        >
          {item.title}
        </span>
        <span>
          <button className="btn btn-secondary mr-2"> Edit </button>
          <button className="btn btn-danger">Delete </button>
        </span>
      </li>
    ));
  };
  render() {
    return (
      <main className="content">
        <h1 className="text-white text-uppercase text-center my-4">trick app</h1>
        <div className="row ">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="">
                <button className="btn btn-primary">Add task</button>
              </div>
              {this.renderTabList()}
              <ul className="list-group list-group-flush">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
export default App;