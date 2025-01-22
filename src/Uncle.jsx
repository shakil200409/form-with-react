import Cousin from "./Cousin";

const Uncle = () => {
  return (
    <div>
      <h2>Uncle</h2>
      <section className="flex">
        <Cousin name={"Sofia"}></Cousin>
        <Cousin name={"Mokhles"}></Cousin>
      </section>
    </div>
  );
};

export default Uncle;
