import { ThemeProvider } from '@emotion/react';
import Person from '@mui/icons-material/Person';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  button: {
    color: 'white',
    backgroundColor: theme.palette.primary.main,
  },
  myButton: {
    ...theme.myButton,
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <div>
        <Button
        variant="contained"
        color="primary"
        startIcon={<Person/>}
        className={classes.button}
        >test</Button>
        <Button
        variant="contained"
        color="primary"
        startIcon={<Person/>}
        className={classes.myButton}
        >test2</Button>
      </div>
    </div>
  );
}

export default Home;