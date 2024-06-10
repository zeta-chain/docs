import AccountCircle from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useChat } from "ai/react";
import React, { FormEvent } from "react";

const Chat: React.FC = () => {
  const { messages, handleSubmit, input, handleInputChange } = useChat();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit(event);
  };

  return (
    <Box className="max-w-[900px] max-h-[50vw] overflow-scroll mx-auto mt-10 p-4 rounded-lg shadow-lg bg-gray-900 text-white">
      <Box className="space-y-4">
        {messages.map((message, index) => (
          <Box key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
            <Box className={`max-w-xs p-3 rounded-lg ${message.role === "user" ? "bg-grey-400" : "bg-green-300"}`}>
              <Typography variant="body1">{message.content}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <form onSubmit={onSubmit}>
        <Box className="mt-4 flex items-center">
          <AccountCircle className="mr-2" />
          <TextField
            variant="outlined"
            placeholder="Ask Zeta AI a question..."
            fullWidth
            value={input}
            onChange={handleInputChange}
            InputProps={{
              className: "text-white",
            }}
          />
          <Button type="submit" variant="contained" color="primary" className="ml-2">
            Send
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export { Chat };
