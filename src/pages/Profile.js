import React, { Component } from 'react';
import PublicLayout from '../components/layouts/publicLayout';
import CompleteImage from '../assets/images/Complete.png';
import { withStyles } from '@material-ui/styles';
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
    height: '100%',
  },
  heading: {
    marginTop: '-50%',
    marginBottom: '40%',
  },
  gridSpace: {
    padding: '10px',
  },
});

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <PublicLayout
        image={CompleteImage}
        title="Integrous data collections"
        text="Streaming highly reliable and accurate qualitative data from trusted sources for lucid analysis and effective decision making."
      >
        <div className={classes.cart}>
          <form className={classes.formCart}>
            <h3 className={classes.heading}>Set profile picture</h3>

            <Button
              className={classes.gridSpace}
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

export default withStyles(styles)(Profile);
