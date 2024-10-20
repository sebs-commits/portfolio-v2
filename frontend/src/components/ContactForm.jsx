import { useState } from "react";
import { FaPaperPlane, FaUser, FaEnvelope, FaCommentAlt } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="p-8 bg-yellow-300 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-20 h-20 bg-red-400 border-2 border-black transform rotate-45 -translate-y-10 translate-x-10"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-400 border-2 border-black rounded-full -translate-x-8 translate-y-8"></div>

      <h2 className="text-5xl font-black mb-8 font-display relative z-10">
        Get in Touch!
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        <div className="relative">
          <label
            htmlFor="name"
            className="block text-xl font-bold mb-2 uppercase"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border-3 border-black focus:outline-none focus:ring-4 focus:ring-blue-400 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
          />
          <FaUser className="absolute right-3 top-12 text-2xl text-gray-500" />
        </div>
        <div className="relative">
          <label
            htmlFor="email"
            className="block text-xl font-bold mb-2 uppercase"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border-3 border-black focus:outline-none focus:ring-4 focus:ring-blue-400 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
          />
          <FaEnvelope className="absolute right-3 top-12 text-2xl text-gray-500" />
        </div>
        <div className="relative">
          <label
            htmlFor="message"
            className="block text-xl font-bold mb-2 uppercase"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full p-3 border-3 border-black focus:outline-none focus:ring-4 focus:ring-blue-400 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
          ></textarea>
          <FaCommentAlt className="absolute right-3 top-12 text-2xl text-gray-500" />
        </div>
        <button
          type="submit"
          className="bg-green-400 text-black font-bold py-3 px-6 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase flex items-center space-x-2"
        >
          <span>Send Message</span>
          <FaPaperPlane className="text-xl" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
