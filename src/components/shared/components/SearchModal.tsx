import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import React from "react";

import { Chat } from "./Chat";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  outline: "none",
};

interface CustomModalProps {
  open: boolean;
  handleClose: () => void;
}

const SearchModal: React.FC<CustomModalProps> = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
      <Box sx={style} className="rounded-lg shadow-lg">
        <Box className="flex justify-between items-center mb-4">
          <Typography id="modal-title">Zeta AI</Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Chat />
      </Box>
    </Modal>
  );
};

export { SearchModal };
