import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import MomentFild from '../components/forms/MomentFild';
class Moment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDate: [],
    };
  }

  render() {
    const { userDate } = this.state;
    return (
      <div>
        <MomentFild getFormValue={(values) => this.addDate(values)} />
        {isEmpty(userDate) && <h1>date is not found!</h1>}
        {!isEmpty(userDate) &&
          userDate.map((item, index) => {
            return (
              <div>
                {item} - {index}
              </div>
            );
          })}
      </div>
    );
  }
}
export default Moment;
