import React, { useState, useEffect } from "react";
import Header from "./header/Header.js";
import CovidTable from "./table/CovidTable.js";
import Footer from "./footer/Footer.js";
import Graph from "./graph/Graph.js";
import axios from "axios";
import "./Home.css"
function Home() {
  return (
    <div>
      <Header />
      <CovidTable />
      <div className="graphs">
        <Graph casesType="cases" title="Daily New Cases"/>
        <Graph casesType="recovered" title="Daily Recovered"/>
        <Graph casesType="deaths" title="Daily Deaths"/>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
