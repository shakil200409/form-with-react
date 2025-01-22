import Aunt from "../Aunt";
import Father from "../Father";
import Uncle from "../Uncle";
import "./Grandpa.css";

const Grandpa = () => {
  const asset = "Diamond";
  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <section className="flex">
        <Father asset={asset}></Father>
        <Uncle asset={asset}></Uncle>
        <Aunt />
      </section>
    </div>
  );
};

export default Grandpa;
