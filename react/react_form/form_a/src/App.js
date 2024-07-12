import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    country: "India",
    street: "",
    city: "",
    state: "",
    pin_code: "",
    comments: true,
    candidate: true,
    offers: true,
    pushNotification: "",
  });
  function changeHandler(event) {
    const { name, type, value, checked } = event.target;
    setdata((prevformData) => {
      return {
        ...prevformData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("final data of form");
    console.log(formData);
    
  }
  return (
    <div className="App flex items-center justify-center">
      <div className="Wapper flex w-[720px] items-center justify-center m-4 p-4 border shadow-xl">
        <form
          onSubmit={submitHandler}
          id="form"
          className="flex flex-col items-start w-[90%]"
        >
          <label className="font-medium mb-2 mt-2" htmlFor="firstName">
            First Name
          </label>
          <input
            className="w-[100%] border-2 rounded-md "
            type="text"
            placeholder="Aryan"
            onChange={changeHandler}
            name="firstName"
            value={formData.firstName}
            id="firstName"
          />
          <label className="font-medium mb-2 mt-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="w-[100%] border-2 rounded-md h-[35px]"
            type="text"
            placeholder="Arya"
            onChange={changeHandler}
            name="lastName"
            value={formData.lastName}
            id="lastName"
          />
          <label className="font-medium mb-2 mt-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-[100%] border-2 rounded-md h-[35px]"
            type="email"
            placeholder="aryan@gmail.com"
            onChange={changeHandler}
            name="email"
            value={formData.email}
            id="email"
          />
          <label className="font-medium mb-2 mt-2" htmlFor="mobile">
            mobile
          </label>
          <input
            className="w-[100%] border-2 rounded-md h-[35px]"
            type="text"
            placeholder="2470953094"
            onChange={changeHandler}
            name="mobile"
            value={formData.mobile}
            id="mobile"
          />
          <label className="font-medium mb-2 mt-2" htmlFor="country">
            Country
          </label>
          <select
            className="w-[100%] border-2 rounded-md h-[35px]"
            name="country"
            onChange={changeHandler}
            value={formData.country}
            id="country"
          >
            <option value="India">India</option>
            <option value="America">America</option>
            <option value="Brazil">Brazil</option>
            <option value="Austrliya">Austrliya</option>
          </select>

          <label className="font-medium mb-2 mt-2" htmlFor="street">
            Street
          </label>
          <input
            className="w-[100%] border-2 rounded-md h-[35px]"
            type="text"
            placeholder="1234 main street"
            onChange={changeHandler}
            name="street"
            value={formData.street}
            id="street"
          />

          <label className="font-medium mb-2 mt-2" htmlFor="city">
            City
          </label>
          <input
            className="w-[100%] border-2 rounded-md h-[35px]"
            type="text"
            placeholder="Alwar"
            onChange={changeHandler}
            name="city"
            value={formData.city}
            id="city"
          />

          <label className="font-medium mb-2 mt-2" htmlFor="state">
            State
          </label>
          <input
            className="w-[100%] border-2 rounded-md h-[35px]"
            type="text"
            placeholder="Rajashthan"
            onChange={changeHandler}
            name="state"
            value={formData.state}
            id="state"
          />

          <label className="font-medium mb-2 mt-2" htmlFor="pin_code">
            Pin_code
          </label>
          <input
            className="w-[100%] border-2 rounded-md h-[35px]"
            type="text"
            placeholder="301001"
            onChange={changeHandler}
            name="pin_code"
            value={formData.pin_code}
            id="pin_code"
          />
          <h3 className="mt-4 font-medium">By Email</h3>
          <div className="w-[100%] text-left mt-4">
            <input
              type="checkbox"
              checked={formData.check1}
              onChange={changeHandler}
              name="comments"
              id="comments"
            />
            <label className="font-medium" htmlFor="comments">
              Comments
            </label>
            <br />
            <input
              type="checkbox"
              checked={formData.check2}
              onChange={changeHandler}
              name="candidate"
              id="candidate"
            />
            <label className="font-medium" htmlFor="candidate">
              Candidate
            </label>
            <br />
            <input
              type="checkbox"
              checked={formData.check3}
              onChange={changeHandler}
              name="offers"
              id="offers"
            />
            <label className="font-medium" htmlFor="offers">
              Offers
            </label>
            <br />
          </div>
          <h3 className="font-medium mt-4">Push Notification</h3>
          <h5 className="text-sm">
            This notification via sms to your mobile phone
          </h5>

          <div className="w-[100%] text-left mt-4">
            <input
              type="radio"
              onChange={changeHandler}
              name="pushNotification"
              id="Everything"
              value="Everything"
              checked={formData.pushNotification === "Everything"}
            />
            <label className="font-medium" htmlFor="Everything">
              Everything
            </label>
            <br />
            <input
              type="radio"
              onChange={changeHandler}
              name="pushNotification"
              id="same_as_email"
              value="same_as_email"
              checked={formData.pushNotification === "same_as_email"}
            />
            <label className="font-medium" htmlFor="same_as_email">
              Same as email
            </label>
            <br />
            <input
              type="radio"
              onChange={changeHandler}
              name="pushNotification"
              id="No-notification"
              value="No-notification"
              checked={formData.pushNotification === "No-notification"}
            />
            <label className="font-medium" htmlFor="No-notification">
              No push notification
            </label>
            <br />
          </div>
          <div className="w-[100%] mt-4 mb-4">
            <button className="border-4 w-[20%] rounded-md bg-sky-500 text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
