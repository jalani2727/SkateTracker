// frontend/src/App.js

import React, { Component } from "react";
import CustomModal from "./components/Modal";
import DescriptionModal from "./components/DescriptionModal";
import axios from "axios";


axios.defaults.withCredentials = true;

// NOTE: This is pre-flight data. Adding these breaks the local version. delete and post requests will not go through if the two below are uncommented.
// axios.defaults.xsrfCookieName = 'csrftoken'
// axios.defaults.xsrfHeaderName = "X-CSRFToken"

  

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      descriptionModal: false,
      viewCompleted: false,
      activeItem: {
        title: "",
        description: "",
        completed: false
      },
      trickList: []
    };
  }

  componentDidMount() {
    this.refreshList();
  }
  // refreshList() is reusable that is called each time an API request is completed. It updates the Trick list to display the most recent list of added items.
  refreshList = () => {
    axios.get("http://localhost:8000/api/tricks/")
    .then(res => this.setState({trickList: res.data}))
    .catch(err => console.log(err));
  };

  displayCompleted = status => {
    if (status) {
      return this.setState({viewCompleted: true})
    }
    return this.setState({viewCompleted: false});
  };

  renderTabList = () => {
    return (
      <div className="my-5 tab-list">
        <span
          onClick={() => this.displayCompleted(true)}
          className={this.state.viewCompleted ? "active" : ""}
        >
          Performed
        </span>
        <span
          onClick={() => this.displayCompleted(false)}
          className={this.state.viewCompleted ? "" : "active"}
        >
          Yet to Perform
        </span>
      </div>
    );
  };

  renderItems = () => {
    const { viewCompleted } = this.state;
    const newItems = this.state.trickList.filter(
      item => item.completed === viewCompleted
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
          <button className="btn btn-link"
            onClick={() => this.showDescription(item)}
          >{item.title}</button>
          
        </span>
        
        <span>
          <button
            onClick={() => this.editItem(item)}
            className="btn btn-secondary mr-2"
          >
            {" "}
            Edit{" "}
          </button>
          <button
            onClick={() => this.handleDelete(item)}
            className="btn btn-danger"
          >
            Delete{" "}
          </button>
        </span>
        
      </li>
      
    ));
  };
  // For pulling up and dismissing the modal
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  descriptionToggle = () => {
    this.setState({ descriptionModal: !this.state.descriptionModal})
  }

  wikiSearch = title => {
    window.location.href = "https://en.wikipedia.org/wiki/Flip_trick";
    alert("You are about to be re-directed to https://en.wikipedia.org ")
    return false
  }
  // handleSubmit() takes care of both the create and update operations. If the item passed as the parameter doesn’t have an id, then it has probably not been created, so the function creates it.

  handleSubmit = item => {
    this.toggle();
    if (item.id) {
      axios
        .put(`http://localhost:8000/api/tricks/${item.id}/`, item)
        .then(res => {
          this.refreshList()
          console.log("response",res);
        })
        .catch(err => console.log(err));
      return;
    }
    axios
      .post("http://localhost:8000/api/tricks/", item)
      .then(res => {
        this.refreshList()
        console.log("response",res);
      })
      .catch(err => console.log(err));
  
    
  };

  // NOTE: CSRF - This comes into play when we are trying to modify an API. Delete requests modify the API so so some research on how to safely perform a delete
  handleDelete = item => {
    axios
      .delete(`http://localhost:8000/api/tricks/${item.id}/`, item)
      .then(res => this.refreshList())
      .catch(err => console.log(err))
  };

  showDescription = item => {
    this.setState({activeItem:item, descriptionModal: !this.state.descriptionModal })
  }

  createItem = () => {
    const item = { title: "", description: "", completed: false };
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = item => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };








  render() {
    
    return (
      <main className="content">
        <h1 className="text-white text-center my-4">SkateTracker</h1>
        <div className="row ">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="">
                <button onClick={this.createItem} className="btn btn-primary">New Trick</button>
              </div>
              {this.renderTabList()}
              <ul className="list-group list-group-flush">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
        {this.state.modal ? (
          <CustomModal activeItem={this.state.activeItem} toggle={this.toggle} onSave={this.handleSubmit}/>
        ) : null}
        {this.state.descriptionModal ? (
          <DescriptionModal activeItem={this.state.activeItem} toggle={this.descriptionToggle} wikiLink={this.wikiSearch}/>
        ) : null}
      </main>
    );
  }
}
export default App;