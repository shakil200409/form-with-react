import { useContext } from "react";
import Special from "./Special";
import { AssetContext } from "./Grandpa/Grandpa";

const Cousin = ({ name, asset }) => {
  const gift = useContext(AssetContext);
  return (
    <div>
      <h2>Cousin</h2>
      <p>{name}</p>
      <section>{asset && <Special asset={asset}></Special>}</section>
      {name === "Fabiha" && <p>Has: {gift}</p>}
    </div>
  );
};

export default Cousin;
