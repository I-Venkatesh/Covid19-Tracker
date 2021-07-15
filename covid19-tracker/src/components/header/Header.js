import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import "./Header.css";

import activeImage from "../../img/active.jpg";
import deathImage from "../../img/deaths.jpg";
import recoveredImage from "../../img/recovered.jpg";



import { CovidContext } from "../../context/CovidContext";

const commaNumber = require("comma-number");

const useStyles = makeStyles((theme) => ({
  root: {
    width: 350,
    alignItems: "center",
  },
  media: {
    height: 200,
    maxWidth: 350,
  },
  formControl: {
    margin: theme.spacing(0),
    minWidth: 220,
  },
  selectEmpty: {
    marginTop: theme.spacing(0),
  },
}));

export default function Header() {
  const classes = useStyles();

  const [country, setCountry] = useState("");

  const [selected, setSelectedCountry] = useState("");

  const [countries, setCountries] = useState([]);

  const [global, setGlobal, allCountries, setAllCountries] =
    useContext(CovidContext);

  const handleChange = (event) => {
    setCountry(event.target.value);
  };
  // console.log(countries)

  useEffect(() => {
    fetch(`https://disease.sh/v3/covid-19/countries/${country}`)
      .then((data) => data.json())
      .then((res) => setSelectedCountry(res));
  }, [country]);
  let temp = [];
  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch("https://disease.sh/v3/covid-19/countries");
      const data = await response.json();
      if (data.length > 0) {
        data.map((item) => temp.push({ title: item.country }));
      }
      temp.push({ title: "Worldwide" });
      setCountries(temp);
    }
    fetchMyAPI();
  }, []);
  // console.log(selected);

  return (
    <div className="header">
      <div className="header-top">
        <h1>Covid-19 Tracker</h1>
      </div>
      <div className="head">
        <div className="head-selected">
          <h2 className="selected-name">
            {country === "" ? "Worldwide" : country}
          </h2>
          <div className="selector">
            <Autocomplete
              id="combo-box-demo"
              options={countries}
              getOptionLabel={(option) => option.title}
              onChange={(event, value) => {
                if (value) {
                  // setSelect(value.id)
                  if (value.title === "Worldwide") {
                    setCountry("");
                  } else {
                    setCountry(value.title);
                  }
                }
              }}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              renderInput={(params) => (
                <TextField
                  style={{ backgroundColor: "#fffff9" }}
                  {...params}
                  label="Country"
                  variant="outlined"
                />
              )}
            />
          </div>
        </div>
        <div className="header-content">
          <div className="card">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={activeImage}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ display: "flex", justifyContent: "center", fontWeight: 600 }}
                  >
                    Coronavirus Cases
                  </Typography>
                  <Typography
                    variant="body2"
                    // color="textSecondary"
                    variant="h5"
                    component="h2"
                    style={{ display: "flex", justifyContent: "center", color: "#5a5958"}}
                  >
                    {country === ""
                      ? global && commaNumber(global.cases)
                      : commaNumber(selected.cases)}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div className="card">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={deathImage}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ display: "flex", justifyContent: "center", fontWeight: 600 }}
                  >
                    Deaths
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    variant="h5"
                    component="h2"
                    style={{ display: "flex", justifyContent: "center" , color: "#5a5958"}}
                  >
                    {country === ""
                      ? global && commaNumber(global.deaths)
                      : commaNumber(selected.deaths)}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div className="card">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={recoveredImage}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ display: "flex", justifyContent: "center" , fontWeight: 600}}
                  >
                    Recovered
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    variant="h5"
                    component="h2"
                    style={{ display: "flex", justifyContent: "center", color: "#5a5958" }}
                  >
                    {country === ""
                      ? global && commaNumber(global.recovered)
                      : commaNumber(selected.recovered)}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
