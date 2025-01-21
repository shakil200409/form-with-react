import useInputState from "./Hooks/useInputState";

const HookForm = () => {
  //   const [name, handleNameChange] = useInputState("Shakil hooked");
  const emailState = useInputState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data from hook", emailState.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
        /> */}
        <br />
        <input {...emailState} type="email" name="email" id="" />
        <br />
        <input type="password" name="password" />
        <br />
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default HookForm;
