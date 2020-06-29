import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
const styles = () => ({
  button: {
    widht: '100px',
    height: '100px',
  },
});
const Buttons = ({ classes, ...rest }) => {
  return (
    <div className={classes.button}>
      <Button
        color="primary"
        variant="contained"
        type={'submit'}
        fullWidth
        {...rest}
      />
    </div>
  );
};
export default withStyles(styles)(Buttons);
