// ~~~~ Bootstrap CV simple ~~~~~

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

// ~~~~ Form Validation ~~~~

// import { useState } from "react";
// import "./App.css";
// import FormInput from "./FormValidation/components/FormInput";

// const App = () => {
//   const [values, setValues] = useState({
//     username: "",
//     email: "",
//     birthday: "",
//     password: "",
//   });

//   const inputs = [
//     {
//       id: 1,
//       name: "username",
//       type: "text",
//       placeholder: "Username",
//       errorMessage: "Username harus 3-16 karakter dan tidak ada karakter spesial!",
//       label: "Username",
//       pattern: "^[A-Za-z0-9]{3,16}$",
//       required: true,
//     },
//     {
//       id: 2,
//       name: "email",
//       type: "email",
//       placeholder: "Email",
//       errorMessage: "Harus berisi email yang valid!",
//       label: "Email",
//       required: true,
//     },
//     {
//       id: 3,
//       name: "birthday",
//       type: "date",
//       placeholder: "Birthday",
//       label: "Birthday",
//     },
//     {
//       id: 4,
//       name: "password",
//       type: "password",
//       placeholder: "Password",
//       errorMessage: "Password harus berisi 8-20 karakter dan berisi paling tidak 1 huruf , 1 angka , dan 1 karakter spesial!",
//       label: "Password",
//       pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
//       required: true,
//     },
//   ];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Form submitted");
//   };

//   const onChange = (e) => {
//     setValues({ ...values, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="app">
//       <form onSubmit={handleSubmit}>
//         <h1>Register</h1>
//         {inputs.map((input) => (
//           <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
//         ))}
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default App;

// ~~~~ News API with Axios ~~~~~

import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [article, setArticle] = useState();
  const [search, setSearch] = useState();
  const [dataSearched, setDataSearched] = useState();

  useEffect(() => {
    retrieveArticle();
  }, []);

  const retrieveArticle = async () => {
    try {
      const { data } = await axios.get(`https://newsapi.org/v2/everything?from=2022-08-19&to=2022-08-19&sortBy=popularity&apiKey=9d4f7c792a4c41289762ba66484380f6&q=articles`);

      // console.log(data, "Response");
    } catch (error) {
      console.log(error, "Response Error");
    }
  };

  const handleChange = (e) => {
    // console.log(e.target.value);
    setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const { data } = await axios.get(`https://newsapi.org/v2/everything?from=2022-08-19&to=2022-08-19&sortBy=popularity&apiKey=9d4f7c792a4c41289762ba66484380f6&q=${search}`);
      console.log(data.articles, "Reponse Response Submit");
      setDataSearched(data.articles);
    } catch (error) {
      console.log(error, "Error Handle Submit");
    }
  };

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col">
            <nav className="navbar bg-danger">
              <div className="container-fluid">
                <span className="navbar-brand text-white mb-0 h1">Tech News App</span>
              </div>
            </nav>

            <div className="row">
              <div className="col-md-8">
                <form onSubmit={handleSubmit}>
                  <div className="input-group mt-3">
                    <input onChange={handleChange} type="text" className="form-control" placeholder="Search News ..." />
                    <button className="btn btn-primary">Search</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="row mt-3">
              {dataSearched &&
                dataSearched.map((data, index) => {
                  console.log(data, "Data Searched");
                  return (
                    <div className="col-md-4 my-5">
                      <div className="card">
                        <img src={data.urlToImage} className="card-img-top" />
                        <div className="card-body">
                          <h5 className="card-title">{data.title}</h5>
                          <h6 className="card-subtitle mb-2 text-muted">{data.description}</h6>
                          <a href={data.url} className="btn btn-primary">
                            Go To Site
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              ;
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
