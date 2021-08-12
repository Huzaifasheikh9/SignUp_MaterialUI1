import "./Signup.css";
import * as React from "react";
import Edit from "../Media/Edit.png";
import Update from "../Media/Update.png";
import Delete from "../Media/Delete.png";

import {
  Grid,
  TextField,
  InputAdornment,
  Typography,
  Button,
  Paper,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { useState } from "react";

// useEffect is a function which runs before and after the render of that componenet
// useState is a ibuilt react hook that allows us to create a state component and a function the set functionality for that state

const Signup = ({data, setData, myRows, setMyRows}) => {
  // Material table start



  

  // Material table end

  const [error, setError] = useState(false);
  const [Eerror, seteError] = useState(false);
  const [Perror, setPError] = useState(false);
  const [REerror, setREerror] = useState(false);

  //this is the hook to change the data in the specific handle changer the data we change will be changed and the rest will be the same as default



  const handleChange = (e) => {
    // // To get the value and name in console log
    // console.log(e);
    // console.log(e.target.value);
    // console.log(e.target.name);
    let value = e.target.value;
    setData({
      // the purpose of spread operator ... is to expand the whole array or the object literal
      ...data, // all will be included and the one we want to change will be changed
      userName: value,
    });
  };

  const EmailHandleChanger = (e) => {
    let Evalue = e.target.value;
    setData({
      // the purpose of spread operator is to expand the whole array or the object literal
      ...data, // all will be included and the one we want to change will be changed
      Email: Evalue,
    });
  };
  const PasswordHandleChanger = (e) => {
    const Pvalue = e.target.value;
    setData({
      ...data,
      Password: Pvalue,
    });
    // console.log(Pvalue);
    // 8 to 10 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character
  };
  const RePassHandleChanger = (e) => {
    let REvalue = e.target.value;
    setData({
      ...data,
      RePass: REvalue,
    });
    // console.log(REvalue);
    // this is to recheck the password that i entered above
  };

  const handleSignUp = () => {
    if (data.userName === "Huzaifa" || data.userName === "HUZAIFA") {
      setError(false);
    } else {
      setError(true);
    }

    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (data.Email.match(validRegex)) {
      seteError(false);
    } else {
      seteError(true);
    }

    var validPRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,10}$/;
    if (data.Password.match(validPRegex)) {
      setPError(false);
    } else {
      setPError(true);
    }

    if (data.RePass === data.Password) {
      setREerror(false);
    } else {
      setREerror(true);
    }

    if (!error && !Eerror && !Perror && !REerror) {
      setMyRows([...myRows, data]);
      console.log(myRows);
    }
  };

  // editBtn
 
  return (
    <Grid
      container
      justifyContent="center"
      alignContent="center"
      style={{ height: "100vh", backgroundColor: "lightgray" }}
    >
      <Grid
        item
        container
        spacing={3}
        xs={10}
        lg={4}
        md={8}
        justifyContent="center"
        style={{
          border: "1px solid gray",
          height: "auto",
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h5" align="center">
            Signup Form
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            // Used for identifying
            name="UserName"
            label="User Name"
            variant="outlined"
            placeholder="Please Enter User Name"
            // the code below means that firstly it will check the first if it it false then it will check the  data.userName then the same if else logic will be applied on that
            helperText={
              error
                ? "Please enter a valid name"
                : data.userName
                ? "Success"
                : ""
            }
            error={error}
            fullWidth={true}
            value={data.userName}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountBoxIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email Address"
            variant="outlined"
            placeholder="Please Enter Email Address"
            helperText={
              Eerror
                ? "Please enter a valid Email Address"
                : data.Email
                ? "Success"
                : ""
            }
            error={Eerror}
            fullWidth={true}
            value={data.Email}
            onChange={EmailHandleChanger}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Password"
            variant="outlined"
            type="Password"
            placeholder="Please Enter Password"
            helperText={
              Perror
                ? "Please enter a valid password"
                : data.Password
                ? "Succcess"
                : ""
            }
            error={Perror}
            fullWidth={true}
            value={data.Password}
            onChange={PasswordHandleChanger}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Confirm Password"
            variant="outlined"
            type="Password"
            placeholder="Please Re-Enter Password"
            helperText={
              REerror
                ? "Please re-TYPE the correct password"
                : data.RePass
                ? "Success"
                : ""
            }
            error={REerror}
            fullWidth={true}
            value={data.RePass}
            onChange={RePassHandleChanger}
          />
        </Grid>
        {/* //THis is the way we can align the items in the div centered */}
        <Grid
        // This grid contains the main content
          item
          xs={4}
          direction="column"
          alignItems="center"
          alignContent="center"
          justifyContent="center"
          style={{ textAlign: "center" }}
        >
          <Button
            variant="contained"
            size="medium"
            onClick={() => {
              handleSignUp();
            }}
          >
            Sign Up
          </Button>
        </Grid>
      </Grid>

      {/* Table Grid */}
    
    </Grid>
  );
};
export default Signup;

//
