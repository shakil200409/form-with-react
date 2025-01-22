import { useContext, useState } from "react";
import Aunt from "../Aunt";
import Father from "../Father";
import Uncle from "../Uncle";
import "./Grandpa.css";
import { createContext } from "react";

export const AssetContext = createContext("Gold");
export const MoneyContext = createContext(1000);

const Grandpa = () => {
  const [money, setMoney] = useState(1000);
  const asset = "Diamond";
  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <p>Money: {money}</p>
      <MoneyContext.Provider value={[money, setMoney]}>
        <AssetContext.Provider value="Gold">
          <section className="flex">
            <Father asset={asset}></Father>
            <Uncle asset={asset}></Uncle>
            <Aunt />
          </section>
        </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;
