import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import TextField from "@material-ui/core/TextField";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

import { addTodo } from "../redux/actions";

export default function AddNote() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data: {
    category: string;
    title: string;
    content: string;
  }) => {
    const { category, title, content } = data;
    if (category && title && content) {
      dispatch(addTodo(category, title, content));
      history.push("/");
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Add an Item</h2>
        {/* <input type="text" placeholder="Enter title..." {...register("title")} /> */}

        <TextField variant="outlined" label="Title" fullWidth />
        <TextField variant="outlined" label="Content" fullWidth />

        <FormControl component="fieldset">
          <FormLabel component="legend">Category</FormLabel>
          <RadioGroup aria-label="category" name="category" row>
            <FormControlLabel control={<Radio />} label="Home" value="Home" />
            <FormControlLabel control={<Radio />} label="Work" value="Work " />
            <FormControlLabel
              control={<Radio />}
              label="Finance"
              value="Finance"
            />
          </RadioGroup>
        </FormControl>

        <Button type="submit" variant="contained" color="primary">
          Add Item
        </Button>

        {/* <textarea
        rows={5}
        style={{ display: "block", fontFamily: "inherit" }}
        placeholder="Enter content..."
        {...register("content")}
      /> */}

        {/* <input type="radio" id="home" value="Home" {...register("category")} />
      <label htmlFor="home">Home</label>
      <input type="radio" id="work" value="Work" {...register("category")} />
      <label htmlFor="work">Work</label>
      <input
        type="radio"
        id="finance"
        value="Finance"
        {...register("category")}
      />
      <label htmlFor="finance">Finance</label> */}

        {/* <button type="submit">Add Item</button> */}
      </form>
    </Container>
  );
}
