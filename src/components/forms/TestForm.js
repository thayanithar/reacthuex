import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import InputField from '../core/Input';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '../core/Button';

const useStyles = makeStyles(() =>
  createStyles({
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
  })
);

const TestForm = (props) => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      email: Yup.string().email('Invalid email address').required('Required'),
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={classes.formCart}>
      <Grid container item xs={12} sm={12} md={12} lg={12}>
        <InputField
          id={'email'}
          name={'email'}
          type={'email'}
          label={'Email address'}
          placeholder={'Enter email address'}
          error={Boolean(formik.errors.email) && formik.touched.email}
          errorMessage={formik.errors.email}
          value={formik.values.email}
          getValue={(vaule) => formik.setFieldValue('email', vaule)}
          onBlur={() => formik.setFieldTouched('email')}
        />
      </Grid>
      <Button type={'submit'} color={'primary'} >
        Login
      </Button>
      <Grid container item xs={12} sm={12} md={12} lg={12}>
        <Box className={classes.forgotText}>
          Forgot password? <Link to={'/forgot-password'}>RESET</Link>
        </Box>
      </Grid>
    </form>
  );
};

export default TestForm;
