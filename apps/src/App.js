// import "./App.css";
// import About from "./BootstrapComponent/About";
// import NavigationBar from "./BootstrapComponent/NavigationBar";
// import Profile from "./BootstrapComponent/Profile";
// import Project from "./BootstrapComponent/Projects";
// import Contacts from "./BootstrapComponent/Contacts";
// import Footer from "./BootstrapComponent/Footer";

// function App() {
//   return (
//     <div>
//       <NavigationBar />
//       <Profile />
//       <About />
//       <Project />
//       <Contacts />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import "./App.css";
import FormInput from "./FormValidation/components/FormInput";

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "Username harus 3-16 karakter dan tidak ada karakter spesial!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Harus berisi email yang valid!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Password harus berisi 8-20 karakter dan berisi paling tidak 1 huruf kapital, 1 angka , dan 1 karakter spesial!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Password tidak sama!",
      label: "Confirm Password",
      pattern: setValues.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    // e.preventDefault();
    alert("Form submitted");
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
