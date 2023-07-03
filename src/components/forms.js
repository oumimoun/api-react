import React, { useState } from "react";

function Forms() {
  const [formdata, setFormdata] = useState({
    name: "",
    age: "",
    email: "",
    gender: "",
    subscribe: false,
    city: "",
  });

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormdata((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, age, email, gender, subscribe, city } = formdata;
    const output = `
      Name: ${name}
      Age: ${age}
      Email: ${email}
      Gender: ${gender}
      Subscribe: ${subscribe ? "Yes" : "No"}
      City: ${city}
    `;
    alert(output);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formdata.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formdata.age}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formdata.email}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Gender:
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formdata.gender === "male"}
            onChange={handleChange}
          />{" "}
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formdata.gender === "female"}
            onChange={handleChange}
          />{" "}
          Female
        </label>
        <br />

        <label>
          Subscribe to Newsletter:
          <input
            type="checkbox"
            name="subscribe"
            checked={formdata.subscribe}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          City:
          <select name="city" value={formdata.city} onChange={handleChange}>
            <option value="new-york">New York</option>
            <option value="london">London</option>
            <option value="tokyo">Tokyo</option>
          </select>
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Forms;


// import React, { Component } from "react";

// class Forms extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       formdata: {
//         name: "",
//         age: "",
//         email: "",
//         gender: "",
//         subscribe: false,
//         city: "",
//       },
//     };
//   }

//   handleChange = (event) => {
//     const { name, type, value, checked } = event.target;
//     const newValue = type === "checkbox" ? checked : value;
//     this.setState((prevState) => ({
//       formdata: {
//         ...prevState.formdata,
//         [name]: newValue,
//       },
//     }));
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const { name, age, email, gender, subscribe, city } = this.state.formdata;
//     const output = `
//       Name: ${name}
//       Age: ${age}
//       Email: ${email}
//       Gender: ${gender}
//       Subscribe: ${subscribe ? "Yes" : "No"}
//       City: ${city}
//     `;
//     alert(output);
//   };

//   render() {
//     const { name, age, email, gender, subscribe, city } = this.state.formdata;

//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name:
//             <input
//               type="text"
//               name="name"
//               value={name}
//               onChange={this.handleChange}
//             />
//           </label>
//           <br />
//           <label>
//             Age:
//             <input
//               type="number"
//               name="age"
//               value={age}
//               onChange={this.handleChange}
//             />
//           </label>
//           <br />

//           <label>
//             Email:
//             <input
//               type="email"
//               name="email"
//               value={email}
//               onChange={this.handleChange}
//             />
//           </label>
//           <br />

//           <label>
//             Gender:
//             <input
//               type="radio"
//               name="gender"
//               value="male"
//               checked={gender === "male"}
//               onChange={this.handleChange}
//             />{" "}
//             Male
//             <input
//               type="radio"
//               name="gender"
//               value="female"
//               checked={gender === "female"}
//               onChange={this.handleChange}
//             />{" "}
//             Female
//           </label>
//           <br />

//           <label>
//             Subscribe to Newsletter:
//             <input
//               type="checkbox"
//               name="subscribe"
//               checked={subscribe}
//               onChange={this.handleChange}
//             />
//           </label>
//           <br />

//           <label>
//             City:
//             <select name="city" value={city} onChange={this.handleChange}>
//               <option value="new-york">New York</option>
//               <option value="london">London</option>
//               <option value="tokyo">Tokyo</option>
//             </select>
//           </label>
//           <br />

//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Forms;
