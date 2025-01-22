import Aunt from "../Aunt";
import Father from "../Father";
import Uncle from "../Uncle";
import "./Grandpa.css";

const Grandpa = () => {
  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <section className="flex">
        <Father></Father>
        <Uncle></Uncle>
        <Aunt />
      </section>
    </div>
  );
};

export default Grandpa;
