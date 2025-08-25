import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Scanner from './ocr-scanner'
import Parser from './barcode-parse'

function App() {
    const [result, setResult] = useState("sup");
    const [kvMap, setKVMap] = useState([]);
    const sample = "@�ANSI604432090102DL00410453ZA04940095DLDCA5DCBNONEDCDNONEDBA20270701DCSBARNSTEADDACRobertDADFrankVDBD20220704DBB19960701DBC1DAYBRODAU152cmDAG64HeritageLakeShoresDAIHeritagePointeDAJABDAKT1S4J6DAQ0710-69926DCF161449-822DCGCANDDENDDFNDDGNDAHDAZBRODAX070ZAZAA0LPsb@YiYgNJjdk\@nsd+:g9:h]0ZNc@,/FHEI9P<R7;q!['L++^1hgK&djr,lA6MB-RjRVjF>)c<Flg&,lZGR0!~";

    // const fetchAPI = async () => {
    //     const response = await axios.get("http://localhost:8080/api");
    //     console.log(response.data.fruits);
    // };

    useEffect(() => {
        Parser(sample, setKVMap);
    }, [])

    return (
        <div>
          	<h1>Scanner</h1>
          	<Scanner updateResult={setResult}></Scanner>
          	<input type="text" value={result}></input> 
        </div>
    )
}

export default App
