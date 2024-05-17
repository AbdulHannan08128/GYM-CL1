import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import { TextField } from '@mui/material';

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function ChangePassword() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleClickOpen}>
        Change Password
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Change Password
        </DialogTitle>
        <DialogContent>
        <DialogContent>
          <DialogContentText>
            Change The Password Of Your Account. Type The Correct Details in The Columns Below
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="currentPassword"
            name="currentPassword"
            label="Current Password"
            type="password"
            fullWidth
            variant="standard"
            className='mt-4'
          />
         <TextField
            autoFocus
            required
            margin="dense"
            id="newPassword"
            name="newPassword"
            label="New Password"
            type="password"
            fullWidth
            variant="standard"
            className='mt-4'
          />
           
        </DialogContent>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose}>Change Password</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}