import { useState } from "react";
import "./App.css";

function App() {
  // const [firstName, setfirstName] = useState("");
  // const [lastName, setlastName] = useState("");
  // function changefirstnameHandler(event){
  //   // console.log(event.target.value);
  //   setfirstName(event.target.value);
  // }
  // function changelastnameHandler(event){
  //   // console.log(event.target.value);
  //   setlastName (event.target.value)
  // }

  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: true,
    mode: "",
    favCar:"scorpio",
  });
  

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setformData((prevformData) => {
      return {
        ...prevformData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }


  function submitHandler(event){
    event.preventDefault();
    console.log("final data of form");
    console.log(formData);

  }


  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="first name"
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="last name"
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="email"
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />
        <br />
        <br />
        <textarea
          placeholder="enter your message"
          onChange={changeHandler}
          name="comments"
          value={formData.comments}
        />
        <br />
        <br />
        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          id="isVisible"
          checked={formData.isVisible}
        />
        <label htmlFor="isVisible">am i Visible ?</label>
        <br />
        <br />
        <fieldset>
          <legend>Modes:</legend>
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="online-Mode"
            id="online-Mode"
            checked={formData.mode === "online-Mode"}
          />
          <label htmlFor="online-Mode"> Online mode </label>
          <br/>
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="offline-Mode"
            id="offline-Mode"
            checked={formData.mode === "offline-Mode"}
          />
          <label htmlFor="offline-Mode"> Offline mode </label>
        </fieldset>
        <label htmlFor="favCar">Tell me your fav car </label>
        <select 
        onChange={changeHandler}
        name="favCar"
        id="favCar"
        value={formData.favCar}>
        <option value="scorpio">scorpio</option>
        <option value="fartuner">fartuner</option>
        <option value="thar">thar</option>
        <option value="Lengend">Lengend</option>
        <option value="waognar">waognar</option>
        </select>
        <br/>
        <br/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
