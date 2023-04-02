import React, { useState } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

import { FormControl, Input, InputLabel, TextField } from "@mui/material";

const Filtred = ({ setSeriesList, SeriesList }) => {
  const [newSerie, setNewSerie] = useState({
    title: "",
    rating: 0,
    description: "",
    imgposterURL: "",
  });
  const handleChange = (e) => {
    setNewSerie({
      ...newSerie,
      [e.target.name]: e.target.value,
    });
  };
  const addSerie = (newSerie) => {
    setSeriesList([
      ...SeriesList,
      {
        id: SeriesList.length + 1,
        ...newSerie,
      },
    ]);
  };
  return (
    <div style={{ marginTop: 10 }}>
      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">Title</InputLabel>
        <Input id="component-simple" name="title" onChange={handleChange} />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">Rating</InputLabel>
        <Input id="component-simple" name="rating" onChange={handleChange} />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">posterURL</InputLabel>
        <Input id="component-simple" name="posterURL" onChange={handleChange} />
      </FormControl>
      <TextField
        id="outlined-multiline-flexible"
        label="Description"
        multiline
        maxRows={4}
        name="description"
        onChange={handleChange}
      />
      <Button
        style={{ marginLeft: 10 }}
        variant="contained"
        endIcon={<SendIcon />}
        onClick={() => addSerie(newSerie)}
      >
        Add Serie/Movie
      </Button>
    </div>
  );
};

export default Filtred;
