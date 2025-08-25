import React from "react";

// const allowed = /(DAQ|DCS|DAC|DAD|DBB|DBC|DBD|DBA|DAG|DAI|DAJ|DAK|DCG|DAY|DAU|DAW|DAZ)([^A-Z]*)/g;
const ALL_CODES = [
  "DCA","DCB","DCD","DBA","DCS","DAC","DAD","DBD","DBB","DBC","DAY","DAU","DAG","DAI","DAJ","DAK","DAQ","DCF","DCG","DDE","DDF","DDG","DAH","DAZ","DAX","ZAA"
];
const FIELD_CODES = [
    "DAQ", // License number
    "DCS", // Last name
    "DAC", // First name
    "DAD", // Middle name
    "DBB", // Date of Birth
    "DBC", // Gender
    "DAG", // Street
    "DAI", // City
    "DAJ", // State/Province
    "DAK", // Postal Code
    "DCG", // Country
    ];
const pattern = new RegExp(`(${ALL_CODES.join("|")})(.*?)(?=${ALL_CODES.join("|")}|$)`, "g");

export default function Parser(text, updateResult) {
    const matches = [...text.matchAll(pattern)];
    const filtered = matches.map(m => [m[1], m[2]]).filter(([key]) => FIELD_CODES.includes(key));
    
    const data = Object.fromEntries(filtered);
    console.log(data);
    setResult

}

