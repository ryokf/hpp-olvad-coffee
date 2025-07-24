import React from "react";
import {} from "./Logic/bahan";
import {
  americano,
  americanoHot,
  ButterscotchSeaSaltLatte,
  cappucino,
  cappucinoHot,
  moccacino,
  saltedCaramelLatte,
  cookiesAndCreamLatte,
  palmSugarLatte,
  tubrukRobusta,
  v60Robusta,
  vietnamDrip
} from "./Logic/produk";

const products = {
  americano: americano(),
  americanoHot: americanoHot(),
  cappucino: cappucino(),
  cappucinoHot: cappucinoHot(),
  moccacino: moccacino(),
  ButterscotchSeaSaltLatte: ButterscotchSeaSaltLatte(),
  saltedCaramelLatte: saltedCaramelLatte(),
  cookiesAndCreamLatte: cookiesAndCreamLatte(),
  palmSugarLatte: palmSugarLatte(),
  tubrukRobusta: tubrukRobusta(),
  v60Robusta: v60Robusta(),
  vietnamDrip: vietnamDrip()
};

const App = () => {
  console.log("Products:", products);
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {Object.entries(products).map(([key, value]) => (
        <div key={key} className="mb-8 border p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </h2>
          <p className="font-bold">Bahan:</p>
          {Object.entries(value.bahan).map(([bahanKey, bahanValue]) => (
            <p key={bahanKey}>
              {bahanKey}: Rp {bahanValue}
            </p>
          ))}
          <p className="font-bold mt-4">HPP: Rp {value.hpp}</p>
          <p className="font-bold">HPP Pembulatan: Rp {value.hpp_pembulatan}</p>
          <p className="font-bold">Harga Jual: Rp {value.harga_jual}</p>
          <p className="font-bold mt-4">
            Harga Jual Pembulatan: Rp {value.harga_jual_pembulatan}
          </p>
          <p className="font-bold"> Margin: {value.harga_jual_pembulatan - value.hpp}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
