import { Button, TextField } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import React, { useState } from "react";

export default function NewSignup() {
  const [mydata, setData] = useState([]);
  const [val, setValue] = useState("");
  const newRows = [1, 2, 3, 4, 5];

  const handleChange = (e) => {
    setValue(e.target.value);
    // let newObj = {
    //   [e.target.name]: e.target.value,
    // };
    // setData([...mydata, newObj]);
  };

  const handleClick = () => {
    // rows.push({ myData });
    // rows = mydata;
    let newObj = {
      userName: val,
    };
    setData([...mydata, newObj]);
    console.log({ mydata });
  };
  return (
    <>
      <Grid container xs={12}>
        <TextField
          fullWidth
          variant="outlined"
          style={{ width: 500 }}
          name="userName"
          onChange={handleChange}
        />
        <Button variant="contained" onClick={handleClick}>
          Submit
        </Button>
      </Grid>
      <Grid container xs={12}>
        <h1>HELLO</h1>
        {newRows?.map((r) => (
          <h1>HELLO</h1>
        ))}
        {mydata?.map((item) => (
          <>
            <h1>{item?.userName}</h1>
          </>
        ))}
       
      </Grid>
    </>
  );
}
