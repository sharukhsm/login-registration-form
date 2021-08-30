import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  function handleFullName(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;

    setFullName((prevValue) => {
      if (inputName === "fName") {
        return {
          fName: newValue,
          lName: prevValue.lName,
        };
      } else if (inputName === "lName") {
        return {
          fName: prevValue.fName,
          lName: newValue,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          onChange={handleFullName}
          value={fullName.fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handleFullName}
          value={fullName.lName}
          name="lName"
          placeholder="Last Name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

//Straightfordward method - Changing complex state.
// function App() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [heading, setHeading] = useState("");

//   function handleFirstName(event) {
//     setFirstName(event.target.value);
//   }
//   function handleLastName(event) {
//     setLastName(event.target.value);
//   }
//   function handleClick(event) {
//     setHeading(`${firstName} ${lastName}`);
//     event.preventDefault();
//   }

//   return (
//     <div className="container">
//       <h1>Hello {heading}</h1>
//       <form onSubmit={handleClick}>
//         <input
//           onChange={handleFirstName}
//           value={firstName}
//           name="fName"
//           placeholder="First Name"
//         />
//         <input
//           onChange={handleLastName}
//           value={lastName}
//           name="lName"
//           placeholder="Last Name"
//         />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }
// export default App;

//Changing complex state using a single state and object(Without submit function)
// function App() {
//   const [fullName, setFullName] = useState({
//     fName: "",
//     lName: "",
//   });

//   function handleFullName(event) {
//     const newValue = event.target.value;
//     const inputName = event.target.name;

//     setFullName((prevValue) => {
//       if (inputName === "fName") {
//         return {
//           fName: newValue,
//           lName: prevValue.lName,
//         };
//       } else if (inputName === "lName") {
//         return {
//           fName: prevValue.fName,
//           lName: newValue,
//         };
//       }
//     });
//   }

//   return (
//     <div className="container">
//       <h1>
//         Hello {fullName.fName} {fullName.lName}
//       </h1>
//       <form>
//         <input
//           onChange={handleFullName}
//           value={fullName.fName}
//           name="fName"
//           placeholder="First Name"
//         />
//         <input
//           onChange={handleFullName}
//           value={fullName.lName}
//           name="lName"
//           placeholder="Last Name"
//         />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;
