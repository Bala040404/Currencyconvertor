import { useState, useEffect } from "react";
import axios from "axios";
function useCurrencyConvert(from, to, fromAmt) {
  let [data, setData] = useState({});
  let [avbl, setAvbl] = useState([]);

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
        url: `https://currency-convertor-api.p.rapidapi.com/convert/${fromAmt}/${from}/${to}`,
        headers: {
          "X-RapidAPI-Key":
            "1c142d51f3msh60cccd485fb45f3p143925jsn13f34d093925",
          "X-RapidAPI-Host": "currency-convertor-api.p.rapidapi.com",
        },
      };
      let x = await axios.request(options);
      console.log(x);
      console.log(x.data[0]);
      setData(x.data[0]);
    }
    b();
  }, [from, to, fromAmt]);
  //   console.log(data);
  return data, avbl;
}

export default useCurrencyConvert;
