import Cousin from "./Cousin";

const Uncle = ({ asset }) => {
  return (
    <div>
      <h2>Uncle</h2>
      <section className="flex">
        <Cousin name={"Sofia"}></Cousin>
        <Cousin name={"Mokhles"} asset={asset}></Cousin>
      </section>
    </div>
  );
};

export default Uncle;
