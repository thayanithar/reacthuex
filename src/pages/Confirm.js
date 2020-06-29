import React, { Component } from 'react';
import PublicLayout from '../components/layouts/publicLayout';
import ConfirmImage from '../assets/images/Confirm.png';
import { withStyles } from '@material-ui/styles';
import tick from '../assets/icons/Success.svg';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

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
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  forgotText: {
    fontSize: '14px',
    letterSpacing: '0',
    fontWeight: 400,
    color: '#4E598348',
    paddingBottom: '16px',
  },
  apiError: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ff1744',
    fontSize: '14px',
  },
  formCart: {
    maxWidth: '430px',
    width: '100%',
  },
  gridSpace: {
    padding: '10px',
  },
});

class Confirm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <PublicLayout
        image={ConfirmImage}
        title="We help you to archive your goals"
        text="We are dedicated to delivering data that defines your purpose. Our vault holds significant data to cater your requirements."
      >
        <div className={classes.cart}>
          <img src={tick} alt="tick" className={classes.tick} />
          <form className={classes.formCart}>
            <h3>Confirmation email has been sent!</h3>
            <Box className={classes.forgotText}>
              You can now access your dashboard using your credentials.
            </Box>
            <Button
              fullWidth
              type={'submit'}
              variant="contained"
              color="primary"
            >
              BACK TO SIGN In page
            </Button>
          </form>
        </div>
      </PublicLayout>
    );
  }
}

export default withStyles(styles)(Confirm);
