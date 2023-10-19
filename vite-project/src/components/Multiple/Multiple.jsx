import React, { useState } from "react";
import "./multiple.css";

export default function Multiple() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
  });

  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = (event) => {
    setIsChecked(event.target.checked);
  };

  const [isChecked1, setIsChecked1] = useState(false);
  const handleCheck1 = (event) => {
    setIsChecked1(event.target.checked);
  };

  const [isChecked2, setIsChecked2] = useState(false);
  const handleCheck2 = (event) => {
    setIsChecked2(event.target.checked);
  };

  const [isChecked3, setIsChecked3] = useState(false);
  const handleCheck3 = (event) => {
    setIsChecked3(event.target.checked);
  };

  const [isChecked4, setIsChecked4] = useState(false);
  const handleCheck4 = (event) => {
    setIsChecked4(event.target.checked);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `First Name: ${formData.firstname}\nLast Name: ${formData.lastname}\nEmail: ${formData.email}\nMobile: ${formData.mobile}\nHigh School: ${isChecked}\nHigher School: ${isChecked1}\nGraduate: ${isChecked2}\nPost-Graduate: ${isChecked3}\nOther: ${isChecked4}`
    );
  };

  // reset form data
  const handleReset = (event) => {
    event.preventDefault();
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="multiple">
      <div class="line">
        <label className="multiple__text" htmlFor="firstname">
          First Name:
        </label>
        <input
          type="text"
          id="firstname"
          className="multiple__input"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
        />
      </div>

      <div class="line">
        <label className="multiple__text" htmlFor="lastname">
          Last Name:
        </label>
        <input
          type="text"
          id="lastname"
          className="multiple__input"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
        />
      </div>

      <div class="line">
        <label className="multiple__text" htmlFor="email">
          Email ID:
        </label>
        <input
          type="text"
          id="email"
          className="multiple__input"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div class="line">
        <label className="multiple__text" htmlFor="mobile">
          Mobile Number:
        </label>
        <input
          type="text"
          id="lastname"
          className="multiple__input"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="highschool" className="checkbox__text">
          <input
            className="checkbox__input"
            type="checkbox"
            name="highschool"
            checked={isChecked}
            onChange={handleCheck}
          />
          High School (10th)
        </label>

        <label htmlFor="higherschool" className="checkbox__text">
          <input
            className="checkbox__input"
            type="checkbox"
            name="higherschool"
            checked={isChecked1}
            onChange={handleCheck1}
          />
          Higher School (12th)
        </label>

        <label htmlFor="graduate" className="checkbox__text">
          <input
            className="checkbox__input"
            type="checkbox"
            name="graduate"
            checked={isChecked2}
            onChange={handleCheck2}
          />
          Graduate (Bachelors)
        </label>

        <label htmlFor="postgraduate" className="checkbox__text">
          <input
            className="checkbox__input"
            type="checkbox"
            name="postgraduate"
            checked={isChecked3}
            onChange={handleCheck3}
          />
          Post-Graduate (Masters)
        </label>

        <label htmlFor="other" className="checkbox__text">
          <input
            className="checkbox__input"
            type="checkbox"
            name="other"
            checked={isChecked4}
            onChange={handleCheck4}
          />
          Other
        </label>
      </div>

      <button className="multiple__button" type="submit">
        Submit
      </button>
      <button className="multiple__button" onClick={handleReset} type="reset">
        Cancel
      </button>
    </form>
  );
}
