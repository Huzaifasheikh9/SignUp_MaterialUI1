import React from "react";
import Edit from "../Media/Edit.png";
import Update from "../Media/Update.png";
import Delete from "../Media/Delete.png";

import { Button, Paper, Grid, TextField } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useState } from "react";

const Home = ({ data, setData, myRows, setMyRows }) => {
  const initialData = myRows;

  const [name, setName] = useState("");
  // const [filteredRow, setFilteredRow] = useState({});
  const [localData, setLocalData] = useState([data]);


  const searchHandle = (e) => {
    const searchValue = e.target.value;
    console.log(searchValue);
    setName(searchValue);
  };
  // console.log(name, "name")
  console.log(myRows, "myRows");

  const search = () => {
    let resultData = initialData.filter(
      (singleRow) =>( singleRow.userName === name) 
    );
    // let resultData = initialData.filter((singleRow) => {
    //   if(singleRow.userName === name) return singleRow
    // })
    setLocalData(resultData);
    console.log(resultData, "resultData")
  };

  console.log(localData, "localData");


  const useStyles = makeStyles({
    table: {
      minWidth: 650,
      textAlign: "center",
    },
  });

  const classes = useStyles();

  const editBtn = (row) => {
    setData(row);
  };

  const updateBtn = (row, i) => {
    console.log(myRows[i]);
    console.log(myRows);
    console.log(row);

    // let newRows = myRows;
    // newRows[i] = setMyRows([data]);
    myRows[i].userName = data.userName;
    myRows[i].Email = data.Email;
    myRows[i].Password = data.Password;
    myRows[i].RePass = data.RePass;
    setMyRows([...myRows]);
  };

  const deleteBtn = (row, i) => {
    console.log(i);
    console.log(myRows[i]);
    console.log(row);

    // delete myRows[i];
    myRows.splice(i, 1);
    setMyRows([...myRows]);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        marginTop: "70px",
        backgroundColor: "lightGrey",
      }}
    >
      <TableContainer style={{ width: "100%" }} component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead style={{ backgroundColor: "darkGray" }}>
            <TableRow>
              <TableCell align="center">UserName</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Password</TableCell>
              <TableCell align="center">RePassword</TableCell>
              <TableCell align="center">Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {myRows.map((row, i) => {
              return (
                <TableRow key={row.userName}>
                  <TableCell
                    align="center"
                    style={{ border: "1px solid black" }}
                    component="th"
                    scope="row"
                  >
                    {row.userName}
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ border: "1px solid black" }}
                  >
                    {row.Email}
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ border: "1px solid black" }}
                  >
                    {row.Password}
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ border: "1px solid black" }}
                  >
                    {row.RePass}
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ border: "1px solid black" }}
                  >
                    <Button
                      className="editBtn"
                      onClick={() => {
                        editBtn(row);
                      }}
                    >
                      <img src={Edit} alt="" height="30px" width="30px"></img>{" "}
                    </Button>
                    <Button
                      className="updateBtn"
                      onClick={() => {
                        updateBtn(row, i);
                      }}
                    >
                      <img src={Update} alt="" height="30px" width="30px"></img>{" "}
                    </Button>
                    <Button
                      className="deleteBtn"
                      onClick={() => {
                        deleteBtn(row, i);
                      }}
                    >
                      <img src={Delete} alt="" height="40px" width="40px"></img>{" "}
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Search bar section */}
      <Grid
        container
        spacing={3}
        xs={12}
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        style={{
          marginTop: "100px",

          padding: "50px",
        }}
      >
        <Grid item xs={12}>
          <h2>Find Your Account Credentials</h2>
        </Grid>

        <Grid item xs={8}>
          <p>Please enter your name below to search for your account:</p>
          <TextField
            variant="outlined"
            name="UserName"
            label="Please enter User Name"
            placeholder="Please Enter User Name"
            onChange={searchHandle}
          />
        </Grid>
        <Grid item xs={8}>
          <Button
            variant="outlined"
            onClick={() => {
              search();
            }}
          >
            Search
          </Button>
        </Grid>
        <Grid item xs={8}>
          <h2>Result</h2>
          <TextField value={localData[0].userName} placeholder="User Name" label="User Name" />{" "}
          <br />
          <TextField value={localData[0].Email} placeholder="Email" label="Email" />
          <br />
          <TextField value={ localData[0].Password} placeholder="Password" label="Password" />
          <br />
          <TextField value={ localData[0].RePass} placeholder="RePassword" label="RePassword" />
          <br />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
