// src/pages/Contact.js
import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // success | failure

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function submit(e) {
    e.preventDefault();

    emailjs
      .send(
        "your_service_id",   // replace with EmailJS Service ID
        "your_template_id",  // replace with Template ID
        form,
        "your_public_key"    // replace with Public Key
      )
      .then(
        () => {
          setStatus("success");
          setForm({ name: "", email: "", message: "" });
        },
        () => setStatus("failure")
      );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <form onSubmit={submit} className="space-y-4 bg-white p-6 rounded-lg shadow">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full border p-3 rounded"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full border p-3 rounded"
          required
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
          className="w-full border p-3 rounded"
        />
        <button type="submit" className="px-4 py-2 bg-sky-600 text-white rounded">
          Send Message
        </button>
        {status === "success" && <p className="text-green-600 text-sm">Message sent successfully!</p>}
        {status === "failure" && <p className="text-red-600 text-sm">Failed to send. Try again later.</p>}
      </form>
    </div>
  );
}
