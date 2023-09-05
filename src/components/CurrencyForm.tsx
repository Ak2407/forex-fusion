"use client";

import { useState } from "react";
import SearchCurrency from "./SearchCurrency";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";
import { fetchConversion } from "../../utils";

const CurrencyForm = () => {
  const router = useRouter();

  const [toCurrency, setToCurrency] = useState("");
  const [fromCurrency, setFromCurrency] = useState("");
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState(0);

  const handleConversion = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      toCurrency.trim() === "" &&
      fromCurrency.trim() === "" &&
      amount === ''
    ) {
      return alert("Please provide some input");
    }

    try {
        const conversion = await fetchConversion({
            to: toCurrency,
            amount: parseFloat(amount) ,
            from: fromCurrency,
          });
      
          setResult(conversion.new_amount);
    } catch (error) {
        console.log(error);
        
    }

    
  };

  //

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  return (
    <form
      className="flex flex-col w-3/4 mx-auto justify-evenly items-center gap-8 px-4 "
      onSubmit={handleConversion}
    >
      <div className="flex justify-between items-center  w-full z-10">
        <h1 className="text-2xl font-bold text-headline">FROM : </h1>
        <SearchCurrency currency={fromCurrency} setCurrency={setFromCurrency} />
      </div>

      <div className="flex justify-between items-center w-full">
        <h1 className="text-2xl font-bold text-headline">AMOUNT : </h1>
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          className="w-1/2 p-4 outline-none font-semibold"
          placeholder="Set the amount to be converted"
        ></input>
      </div>

      <div className="flex justify-between items-center  w-full">
        <h1 className="text-2xl font-bold text-headline">TO : </h1>
        <SearchCurrency currency={toCurrency} setCurrency={setToCurrency} />
      </div>

      <div className="flex flex-col lg:flex-row w-full justify-evenly items-center gap-8 ">
        <div className="bg-paragraph p-4 flex justify-center items-center w-full ">
          <h1 className="text-tertiary text-2xl font-bold">{result}</h1>
        </div>
        <CustomButton btnType="submit" title="CONVERT" />
      </div>
    </form>
  );
};

export default CurrencyForm;

// const handleConversion = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (
//       toCurrency.trim() === "" ||
//       fromCurrency.trim() === "" ||
//       amount === 0
//     ) {
//       return alert("Please provide some input");
//     }

//     updateSearchParams(toCurrency.toLowerCase(), fromCurrency.toLowerCase());
//   };

//   const updateSearchParams = (toCurrency: string, fromCurrency: string) => {
//     const searchParams = new URLSearchParams(window.location.search);

//     if (toCurrency) {
//       searchParams.set("to", toCurrency);
//     } else {
//       searchParams.delete("to");
//     }

//     if (amount) {
//       searchParams.set("amount", amount.toString());
//     } else {
//       searchParams.delete("amount");
//     }

//     if (fromCurrency) {
//       searchParams.set("from", fromCurrency);
//     } else {
//       searchParams.delete("from");
//     }

//     const newPathname = `${
//       window.location.pathname
//     }?${searchParams.toString()}`;

//     router.push(newPathname);
//   };
