import Cousin from "./Cousin";

const Aunt = () => {
  return (
    <div>
      <h2>Aunty </h2>
      <section className="flex">
        <Cousin name={"Fahim"}></Cousin>
        <Cousin name={"Fabia"}></Cousin>
      </section>
    </div>
  );
};

export default Aunt;
