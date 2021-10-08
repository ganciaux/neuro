import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import MobileDateTimePicker from '@mui/lab/MobileDateTimePicker';
import { DataGrid, nlNL } from '@mui/x-data-grid';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import Divider from '@mui/material/Divider';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { frFR } from '@mui/material/locale';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import fr from 'date-fns/locale/fr';

export function Material() {
  const [value, setValue] = React.useState(new Date());


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    console.log("todo something")
  };


        const rows=[
  { id: 1, name: 'Hello', col2: 'World' },
  { id: 2, name: 'DataGridPro', col2: 'is Awesome' },
          { id: 3, name: 'MUI', col2: 'is Amazing' },
    { id: 4, name: 'Hello', col2: 'World' },
  { id: 5, name: 'DataGridPro', col2: 'is Awesome' },
          { id: 6, name: 'MUI', col2: 'is Amazing' },
    { id: 7, name: 'Hello', col2: 'World' },
  { id: 8, name: 'DataGridPro', col2: 'is Awesome' },
  { id: 9, name: 'MUI', col2: 'is Amazing' },
];

const columns = [
  { field: 'name', headerName: 'Patient', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
];
  
const theme = createTheme(
  {
    palette: {
      primary: { main: '#1976d2' },
    },
  },
  frFR,
);


  return (
    <div>
      <br />
       <Stack sx={{ width: '50%' }} spacing={2}>
      <Alert severity="success">
  <AlertTitle>Success</AlertTitle>
  This is a success alert — <strong>check it out!</strong>
      </Alert>
      
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={fr}>
        <MobileDateTimePicker
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
          label="Date de naissance"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
      </LocalizationProvider>
      
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="contained" href="/">
        Link
      </Button>
      <Button variant="contained" disableElevation>
        Disable elevation
      </Button>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send 2
      </Button>

 <div style={{ height: 300, width: '100%' }}>
      <ThemeProvider theme={theme}>
       
<DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
  rowsPerPageOptions={[5]}
  checkboxSelection/>
</ThemeProvider>;
      
        
      </div>
      

<List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem>
        </List>
        

         <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
        </div>

      </Stack>
    </div>
        )
      }

