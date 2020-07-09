import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button as HuexButton } from '@material-ui/core';

const styles = () => ({
  button: {
    widht: '100px',
    height: '10px',
  },
  text: {
    color: '#FFFFFF',
  },
});

const Button = ({ classes, ...rest }) => {
  return (
    <HuexButton
      classes={{
        label: classes.text,
      }}
      variant="contained"
      fullWidth
      {...rest}
    />
  );
};
export default withStyles(styles)(Button);
