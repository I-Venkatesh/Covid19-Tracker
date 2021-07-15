import React, { useState, useEffect, createContext } from "react";

import { sortData } from "../components/util.js"

const CovidContext = createContext();

const CovidData = (props) => {
  const [global, setGlobal] = useState();
  const [allCountries, setAllCountries] = useState([]);
  const [show, setShow] = useState();


  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((data) => data.json())
      .then((res) => setGlobal(res));
  }, []);
  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch("https://disease.sh/v3/covid-19/countries");
      const data = await response.json();
      // console.log(data);
      const sortedData = sortData(data);
      setAllCountries(sortedData);
      setShow(sortedData.slice(0,10));
    }
    fetchMyAPI();
  }, []);


  return (
      
    <CovidContext.Provider
      value={[global, setGlobal, allCountries, setAllCountries,show, setShow]}
    >

      {props.children}
    </CovidContext.Provider>
  );
};
export { CovidContext, CovidData };
