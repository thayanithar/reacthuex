import React, { Component } from 'react';
import PublicLayout from '../components/layouts/publicLayout';
import Complete from '../assets/images/Complete.png';
import failed from '../assets/icons/Failed.svg';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
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
  forgotText: {
    fontSize: '14px',
    letterSpacing: '0',
    fontWeight: 400,
    color: '#4E598348',
    paddingBottom: '16px',
  },
  heading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
});

class Uncompleted extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <PublicLayout
        image={Complete}
        title="Integrous data collections"
        text="Streaming highly reliable and accurate qualitative data from trusted sources for lucid analysis and effective decision making."
      >
        <div className={classes.cart}>
          <img src={failed} alt="failed" className={classes.failed} />
          <form className={classes.formCart}>
            <Grid container item xs={12} sm={12} md={12} lg={12}>
              <h3 className={classes.heading}>
                Your account creation is failed!
              </h3>
              <Box className={classes.forgotText}>
                Please check your information and try again.
              </Box>
            </Grid>
            <Button
              fullWidth
              type={'submit'}
              variant="contained"
              color="primary"
            >
              GO BACK
            </Button>
          </form>
        </div>
      </PublicLayout>
    );
  }
}

export default withStyles(styles)(Uncompleted);
