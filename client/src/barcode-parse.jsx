import React from "react";

const ALL_CODES = [
  "DCA","DCB","DCD","DBA","DCS","DAC","DAD","DBD","DBB","DBC","DAY","DAU","DAG","DAI","DAJ","DAK","DAQ","DCF","DCG","DDE","DDF","DDG","DAH","DAZ","DAX","ZAA"
];
const FIELD_CODES = {
    DAQ: "License Number",
    DCS: "Last Name",
    DAC: "First Name",
    DAD: "Middle Name",
    DBB: "Date of Birth",
    DBC: "Gender",
    DAG: "Street",
    DAI: "City",
    DAJ: "State/Province",
    DAK: "Postal Code",
    DCG: "Country"
  };

const pattern = new RegExp(`(${ALL_CODES.join("|")})(.*?)(?=${ALL_CODES.join("|")}|$)`, "g");

export default function Parser(text) {
    const matches = [...text.matchAll(pattern)];

  // Filter only the codes we care about
  const filtered = matches
    .map(m => [m[1], m[2].trim()])
    .filter(([key]) => Object.keys(FIELD_CODES).includes(key));

  // Map to human-readable keys
  const mapped = filtered.map(([key, value]) => [FIELD_CODES[key], value]);

  const data = Object.fromEntries(mapped);
    return(data);
}

