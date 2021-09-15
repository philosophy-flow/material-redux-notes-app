import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Controller } from "react-hook-form";

import TextField from "@material-ui/core/TextField";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import { addTodo } from "../redux/actions";

export default function AddNote() {
  const [titleError, setTitleError] = useState(false);
  const [contentError, setContentError] = useState(false);

  const { handleSubmit, control } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  // Form submission handler
  const onSubmit = (data: {
    category: string;
    title: string;
    content: string;
  }) => {
    const { category, title, content } = data;

    if (!title) {
      setTitleError(true);
    }
    if (!content) {
      setContentError(true);
    }

    if (category && title && content) {
      dispatch(addTodo(category, title, content));
      history.push("/");
    }
  };

  // Custom styles
  const useStyles = makeStyles({
    block: { display: "block" },
  });
  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="title"
        defaultValue=""
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            error={titleError}
            margin="normal"
            variant="outlined"
            label="Title"
            fullWidth
          />
        )}
      />

      <Controller
        name="content"
        defaultValue=""
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            error={contentError}
            margin="normal"
            variant="outlined"
            label="Content"
            multiline={true}
            minRows={3}
            fullWidth
          />
        )}
      />

      <Controller
        name="category"
        defaultValue="Home"
        control={control}
        render={({ field }) => (
          <FormControl
            component="fieldset"
            margin="normal"
            className={classes.block}
          >
            <FormLabel component="legend">Category</FormLabel>
            <RadioGroup {...field} aria-label="category" row>
              <FormControlLabel control={<Radio />} label="Home" value="Home" />
              <FormControlLabel control={<Radio />} label="Work" value="Work" />
              <FormControlLabel
                control={<Radio />}
                label="Finance"
                value="Finance"
              />
            </RadioGroup>
          </FormControl>
        )}
      />

      <Button type="submit" variant="contained" color="primary">
        Add Item
      </Button>
    </form>
  );
}
