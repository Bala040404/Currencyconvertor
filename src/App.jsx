import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Input from "./components/Input";
import useCurrencyConvert from "./hooks/useCurrencyConvert";

function App() {
  const [fromval, setFromval] = useState(15);

  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  let [data, setData] = useState({});
  let [avbl, setAvbl] = useState([]);
  const [toval, setToval] = useState(0);

  useEffect(() => {
    async function a() {
      const allCurrencyOptions = {
        method: "GET",
        url: "https://currency-convertor-api.p.rapidapi.com/currency",
        headers: {
          "X-RapidAPI-Key":
            "1c142d51f3msh60cccd485fb45f3p143925jsn13f34d093925",
          "X-RapidAPI-Host": "currency-convertor-api.p.rapidapi.com",
        },
      };
      let x = await axios.request(allCurrencyOptions);
      // console.log(x.data[0]);
      setAvbl(x.data);
    }
    a();
  }, []);

  useEffect(() => {
    async function b() {
      const options = {
        method: "GET",
        url: `https://currency-convertor-api.p.rapidapi.com/convert/${fromval}/${from}/${to}`,
        headers: {
          "X-RapidAPI-Key":
            "1c142d51f3msh60cccd485fb45f3p143925jsn13f34d093925",
          "X-RapidAPI-Host": "currency-convertor-api.p.rapidapi.com",
        },
      };
      let x = await axios.request(options);
      // console.log(x.data[0]);
      setData(x.data[0]);
      x = parseFloat(x.data[0].rate.replaceAll(",", ""));
      setToval(x);
    }
    b();
  }, [from, to, fromval]);

  return (
    <div className="bg-slate-900 h-screen flex flex-col justify-center items-center">
      <h1 className="text-white text-4xl fixed top-10">Currency converter</h1>
      <Input
        label="From"
        val={fromval}
        setVal={setFromval}
        cur={from}
        setCur={setFrom}
        avbl={avbl}
      ></Input>

      <button
        className="bg-blue-400 h-10 rounded-md w-20"
        onClick={() => {
          setFrom(to);
          setTo(from);
        }}
      >
        swap
      </button>
      <Input
        label="To"
        val={toval}
        setVal={setToval}
        cur={to}
        setCur={setTo}
        avbl={avbl}
      ></Input>
    </div>
  );
}

export default App;
