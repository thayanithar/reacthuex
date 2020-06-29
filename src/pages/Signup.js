import React, { Component } from 'react';
import PublicLayout from '../components/layouts/publicLayout';
import signupImage from '../assets/images/Signup.png';
import SignupForm from '../components/forms/SignupForm';
import { withStyles } from '@material-ui/styles';

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

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <PublicLayout
        image={signupImage}
        title="Make decisions using multiple visualizations"
        text="Our platform is capable of communicating data in various graphical forms for better understanding and rational decision making."
      >
        <div className={classes.cart}>
          <SignupForm />
        </div>
      </PublicLayout>
    );
  }
}

export default withStyles(styles)(Signup);
