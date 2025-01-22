// import Form from "./SimpleForm";
import "./App.css";
import ReusableForm from "./ReusableForm";
// import HookForm from "./HookForm";
// import RefForm from "./RefForm";
// import StateFulForm from "./StateFulForm";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      {/* <Form></Form> */}
      {/* <StateFulForm></StateFulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm formTitle={"Sign in"}></ReusableForm>
      <ReusableForm formTitle={"Update Profile"} btn={"Update"}></ReusableForm>
      <ReusableForm formTitle={"Create id"} btn={"Create"}></ReusableForm>
    </>
  );
}

export default App;
