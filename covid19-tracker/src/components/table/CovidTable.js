import React, { useContext, useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ReactPaginate from "react-paginate";

import "./CovidTable.css";
import { CovidContext } from "../../context/CovidContext";

import { FormControl, InputLabel, Select, TextField } from "@material-ui/core";

const commaNumber = require("comma-number");

const useStyles = makeStyles({
  table: {
    width: "100%",
  },
  img:{
    paddingRight: "20px",
    alignItem: "center",
    height:"16px",
    width:"25px"
  }
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "rgb(2, 1, 59)",
    color: theme.palette.common.white,
    fontSize: 19,
    fontWeight: 400,
    height: 50,
    "@media (max-width: 1450px)": {
        fontSize: 15,
    },
    "@media (max-width: 1110px)": {
        fontSize: 12,
    },
  },
  body: {
    fontSize: 19,
    fontWeight: 500,
    "@media (max-width: 1450px)": {
        fontSize: 14,
    },
    "@media (max-width: 1110px)": {
        fontSize: 11,
    },
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function CovidTable() {

  

  const classes = useStyles();
  const changePage = async ({ selected }) => {
    setPageNumber(selected);
    setStarting(selected);
  };

  const [global, setGlobal, allCountries, setAllCountries, show, setShow] =
    useContext(CovidContext);
  
  var l=0;
  const [pageNumber, setPageNumber] = useState(0);
  const [interval, setInterval] = useState(10);
  const [starting, setStarting] = useState(0);
  const [pagesVisited, setPagesVisited] = useState(0)
  // const pagesVisited = pageNumber * interval;


  const [loop, setLoop] = useState(1);

  useEffect(() => {
    setShow(allCountries.slice(pagesVisited, parseInt(pagesVisited)+ parseInt(interval)));
    setLoop(pageNumber*interval);
    setPagesVisited(pageNumber * interval)
    l=pageNumber*interval;
  },[pagesVisited, pageNumber, interval])
    console.log(show);



  var arr = [];
  var lowEnd = 0;
  var highEnd = 20;
  while (lowEnd <= highEnd) {
    arr.push((lowEnd += 5));
  }
  l=loop+1;
  console.log(l);
  return (
    <div className="table">
      <div className="table-top">
        <div className="dropdown">
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple">
              Entries
            </InputLabel>
            <Select
              style={{
                width: "170%",
                height: "90%",
                backgroundColor: "#fcfcfc",
              }}
              native
              value={interval}
              onChange={(e) => setInterval(e.target.value)}
              label="Entries"
              inputProps={{
                name: "Entries",
                id: "outlined-age-native-simple",
              }}
            >
              {/* <option value={30}>Thirty</option> */}
              {/* {arr.map((i) => <MenuItem value={i}>{i}</MenuItem>)} */}
              {arr.map((i) => (
                <option value={i}>{i}</option>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="pagination">
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={Math.ceil(allCountries.length / interval)}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>#</StyledTableCell>
                <StyledTableCell>
                  <strong>Country</strong>
                </StyledTableCell>
                <StyledTableCell>
                  <strong>Total Cases</strong>
                </StyledTableCell>
                <StyledTableCell>
                  <strong>New Cases</strong>
                </StyledTableCell>
                <StyledTableCell>
                  <strong>Total Deaths</strong>
                </StyledTableCell>
                <StyledTableCell>
                  <strong>New Deaths</strong>
                </StyledTableCell>
                <StyledTableCell>
                  <strong>Total Recovered</strong>
                </StyledTableCell>
                <StyledTableCell>
                  <strong>New Recovered</strong>
                </StyledTableCell>
                <StyledTableCell>
                  <strong>Active Cases</strong>
                </StyledTableCell>
                <StyledTableCell>
                  <strong>Serious, Critical</strong>
                </StyledTableCell>
                <StyledTableCell>
                  <strong>Population</strong>
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {show && show.map((data) => (
                <StyledTableRow>
                  <StyledTableCell>{l++}</StyledTableCell>
                  <StyledTableCell>
                    <img className={classes.img}
                      src={data.countryInfo.flag}
                    />
                    <strong>{data.country}</strong>
                  </StyledTableCell>
                  <StyledTableCell>{commaNumber(data.cases)}</StyledTableCell>
                  <StyledTableCell style={{backgroundColor:"#ffff99"}}>
                    {commaNumber(data.todayCases)}
                  </StyledTableCell>
                  <StyledTableCell>{commaNumber(data.deaths)}</StyledTableCell>
                  <StyledTableCell style={{backgroundColor:"#ff0000"}}>
                    {commaNumber(data.todayDeaths)}
                  </StyledTableCell>
                  <StyledTableCell>
                    {commaNumber(data.recovered)}
                  </StyledTableCell>
                  <StyledTableCell style={{backgroundColor: "#98e1bd"}}>
                    {commaNumber(data.todayRecovered)}
                  </StyledTableCell>
                  <StyledTableCell>{commaNumber(data.active)}</StyledTableCell>
                  <StyledTableCell>
                    {commaNumber(data.critical)}
                  </StyledTableCell>
                  <StyledTableCell>
                    {commaNumber(data.population)}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
              {!show &&
                <StyledTableRow>
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell>
                  </StyledTableCell>
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell>
                  
                  </StyledTableCell>
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell>
                 
                  </StyledTableCell>
                  <StyledTableCell>
                    <strong>...loading</strong>
                  </StyledTableCell>
                  <StyledTableCell >
                  </StyledTableCell>
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell>
                  </StyledTableCell>
                  <StyledTableCell>
                  </StyledTableCell>
                </StyledTableRow>
              }
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default CovidTable;
