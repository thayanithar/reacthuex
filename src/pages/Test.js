import React, { Component } from 'react';
import PublicLayout from '../components/layouts/publicLayout';
import signinImage from '../assets/images/Signin.png';
import logo from '../assets/logos/Logo.png';
import { withStyles } from '@material-ui/styles';
import InputField from '../components/core/Input';
import {push} from 'lodash';
const styles = (theme) => ({
  logo: {
    width: '159px',
    height: '38px',
    border: '0',
    marginBottom: '50px',
  },
  cart: {
    maxWidth: '430px',
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
});
class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailid:['zajith@huex.studio', 'gobi@huex.studio', 'chanthan@huex.studio'],
      initialValues: {
        email:'',
      },
    };
  }
  addNew=() =>{
    const newEmail='nitharthaya123@gmail.com';
    this.setState({emailid:[...this.state.emailid,newEmail] });
  }
  render() {
    const { classes } = this.props;
    const { initialValues } = this.state;
    return (
      <PublicLayout
        image={signinImage}
        title="Standard Catalogued Data"
        text="Large volumes of diverse data systematically categorized based on distinct criteria for easy and effective filtering of the necessary information."
      >

        <div>

          <ul>{this.state.emailid.map((value,index) => <li key={ index }>{ value }</li>)}
          </ul>

          <InputField
            id={'email'}
            name={'email'}
            type={'text'}
            label={'Email'}
            placeholder={'Enter email address'}
          />
        </div>

      </PublicLayout>
    );
  }
}
export default withStyles(styles)(Test);