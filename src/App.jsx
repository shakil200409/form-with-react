// import Form from "./SimpleForm";
import "./App.css";
import ReusableForm from "./ReusableForm";
// import HookForm from "./HookForm";
// import RefForm from "./RefForm";
// import StateFulForm from "./StateFulForm";

function App() {
  const handleSignIn = (data) => {
    console.log("Sign id Data: ", data);
  };

  const handleUpdateProfile = (data) => {
    console.log("Update Profile Data: ", data);
  };
  return (
    <>
      <h1>Vite + React</h1>
      {/* <Form></Form> */}
      {/* <StateFulForm></StateFulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm formTitle={"Sign in"} handleSubmit={handleSignIn}>
        <h2>Sign Up</h2>
        <p>Sign up to get access to all the elements.</p>
      </ReusableForm>
      <ReusableForm
        formTitle={"Update Profile"}
        handleSubmit={handleUpdateProfile}
        btn={"Update"}
      >
        <h2>Update Profile</h2>
        <p>Always keep your profile updated.</p>
      </ReusableForm>
    </>
  );
}

export default App;
