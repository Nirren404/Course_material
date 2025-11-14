import React, { useState } from "react";

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  message: "",
};

const ContactFormComponent = () => {
  const [form, setForm] = useState(initialState);

  console.log(form);
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>example object in useState - ContactForm</h2>

      <label htmlFor="firstname">First Name</label>
      <input
        type="text"
        id="firstname"
        name="firstname"
        value={form.firstname}
        onChange={handleChange}
      />

      <br />

      <label htmlFor="lastname">Last Name</label>
      <input
        type="text"
        id="lastname"
        name="lastname"
        value={form.lastname}
        onChange={handleChange}
      />

      <br />

      <label htmlFor="email">Email Address</label>
      <input
        type="text"
        id="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />

      <br />

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        value={form.message}
        onChange={handleChange}
      ></textarea>

      <button onClick={() => console.log("data to be submitted", form)}>
        Submit
      </button>
    </div>
  );
};

export default ContactFormComponent;
