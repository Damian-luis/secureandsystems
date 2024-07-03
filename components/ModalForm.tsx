// ModalForm.tsx
import React, { useState } from 'react';
import { Box, Button, TextField, Modal } from '@mui/material';
import { sendEmail } from '@/pages/api/sendEmail';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};



const ModalForm: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [message, setMessage] = useState('');
  const [mail, setMail] = useState('');
  const [loading, setLoading] = useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
  const handleSubmit = async(event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true)
    try {
      await sendEmail({ name, lastname, mail ,message});
      handleClose();
    } catch (error) {
      
      console.error('Failed to send email', error);
    }
    finally {
      setLoading(false); 
    }
  };

  return (
    <div style={{alignSelf:"center",paddingTop:"80PX"}} data-aos="zoom-in">
      <Button variant="contained" style={{backgroundColor:"#673AB7"}}onClick={handleOpen}>
        Contacto
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              label="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Apellido"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Correo"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Mensaje"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <Button type="submit" variant="contained" style={{backgroundColor:"#673AB7"}}>
            {loading ? 'Enviando...' : 'Enviar'}
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalForm;
