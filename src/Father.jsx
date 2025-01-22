import Brother from "./Brother";
import Myself from "./Myself";
import Sister from "./Sister";

const Father = () => {
  return (
    <div>
      <h2>Father</h2>
      <section className="flex">
        <Myself></Myself>
        <Brother></Brother>
        <Sister></Sister>
      </section>
    </div>
  );
};

export default Father;
