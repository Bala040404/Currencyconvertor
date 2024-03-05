import React from "react";

function Input({ label, val, setVal, avbl, cur, setCur }) {
  let allOptions = avbl.map((e, i) => {
    return (
      <option key={i} value={e.currencyCode}>
        {e.currencyCode}
      </option>
    );
  });
  return (
    <div className="bg-slate-400 w-3/4 flex justify-evenly h-14 items-center border-2 border-red-400">
      <div>
        <label className="pr-7" htmlFor={label}>
          {label}
        </label>
        <input
          className="h-7 w-2/3"
          id={label}
          type="number"
          value={val}
          onChange={(e) => {
            setVal(e.target.value);
          }}
        ></input>
      </div>

      <select
        className="h-3/5"
        value={cur}
        onChange={(e) => {
          setCur(e.target.value);
        }}
        name=""
        id=""
      >
        {allOptions}
      </select>
    </div>
  );
}

export default Input;
