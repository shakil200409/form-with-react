import Special from "./Special";

const Myself = ({ asset }) => {
  return (
    <div>
      <h2>Myself</h2>
      <p>Allen Shopon</p>
      <section className="flex">
        <Special asset={asset}></Special>
      </section>
    </div>
  );
};

export default Myself;
