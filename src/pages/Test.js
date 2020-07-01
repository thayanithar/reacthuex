import React, { Component } from "react";
import {isEmpty} from 'lodash'
import LodashTest from "../components/forms/LodashTest";
class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmails: [],
    };
  }
  addEmail = (abc) => {
    this.setState((state) => {
      return {
        userEmails: [...state.userEmails, abc.email],
      };
    });
  };
  delete(item){
    const newState = this.state.userEmails.slice();
    if (newState.indexOf(item) > -1) {
      newState.splice(newState.indexOf(item), 1);
      this.setState({userEmails: newState})
    }
  }
  render() {
    const {userEmails} = this.state;
    return (
      <div>
        <LodashTest
          getFormValue={values => this.addEmail(values)}
        />
        {isEmpty(userEmails) && <h1>emails not found!</h1>}
        {!isEmpty(userEmails) && userEmails.map((item, index) => {
          return (
            <div>
              {item} - {index}
              <button onClick={this.delete.bind(this, item)}>Delete</button>
            </div>
          )
        }) }
      </div>
    );
  }
}
export default Test;