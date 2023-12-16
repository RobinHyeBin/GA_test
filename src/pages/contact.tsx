import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import PageLayout from "../components/PageLayout";
import { event } from "../lib/gtag";

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    event("submit_form", {
      event_category: "Contact",
      event_label: message,
    });
    alert("Submit Completed!!");
    setMessage("");
  };

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setMessage(e.target.value);
  };

  return (
    <PageLayout>
      <h1>This is the Contact page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Message:</span>
          <textarea onChange={handleChange} value={message} />
        </label>
        <button type="submit">submit</button>
      </form>
    </PageLayout>
  );
};

export default Contact;
