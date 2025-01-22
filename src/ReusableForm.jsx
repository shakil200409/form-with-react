const ReusableForm = ({
  formTitle,
  handleSubmit,
  btn = "Submit",
  children,
}) => {
  const localSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    handleSubmit(data);
  };

  return (
    <div>
      {children}
      <form onSubmit={localSubmitHandler}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="password" name="password" />
        <br />
        <input type="submit" value={btn}></input>
      </form>
    </div>
  );
};

export default ReusableForm;
