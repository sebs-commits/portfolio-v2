import { useForm } from "react-hook-form";
import { FaPaperPlane, FaUser, FaEnvelope, FaCommentAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log(result.text);
      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.log(error.text);
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="p-8 bg-yellow-300 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-20 h-20 bg-red-400 border-2 border-black transform rotate-45 -translate-y-10 translate-x-10"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-400 border-2 border-black rounded-full -translate-x-8 translate-y-8"></div>

      <h2 className="text-5xl font-black mb-8 font-display relative z-10">
        Get in Touch!
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 relative z-10"
      >
        <div className="relative">
          <label
            htmlFor="name"
            className="block text-xl font-bold mb-2 uppercase"
          >
            Name
          </label>
          <input
            id="name"
            {...register("name", { required: "Name is required" })}
            className="w-full p-3 border-3 border-black focus:outline-none focus:ring-4 focus:ring-blue-400 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
          />
          <FaUser className="absolute right-3 top-12 text-2xl text-gray-500" />
          {errors.name && (
            <p className="text-red-500 mt-1">{errors.name.message}</p>
          )}
        </div>
        <div className="relative">
          <label
            htmlFor="email"
            className="block text-xl font-bold mb-2 uppercase"
          >
            Email
          </label>
          <input
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email address",
              },
            })}
            className="w-full p-3 border-3 border-black focus:outline-none focus:ring-4 focus:ring-blue-400 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
          />
          <FaEnvelope className="absolute right-3 top-12 text-2xl text-gray-500" />
          {errors.email && (
            <p className="text-red-500 mt-1">{errors.email.message}</p>
          )}
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
            {...register("message", { required: "Message is required" })}
            rows="4"
            className="w-full p-3 border-3 border-black focus:outline-none focus:ring-4 focus:ring-blue-400 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
          ></textarea>
          <FaCommentAlt className="absolute right-3 top-12 text-2xl text-gray-500" />
          {errors.message && (
            <p className="text-red-500 mt-1">{errors.message.message}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`bg-green-400 text-black font-bold py-3 px-6 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase flex items-center space-x-2 ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
          <FaPaperPlane className="text-xl" />
        </button>
      </form>

      {submitStatus === "success" && (
        <div className="mt-4 p-3 bg-green-100 border-2 border-green-500 text-green-700 rounded">
          Thank you for your message! I&apos;ll get back to you soon.
        </div>
      )}
      {submitStatus === "error" && (
        <div className="mt-4 p-3 bg-red-100 border-2 border-red-500 text-red-700 rounded">
          Oops! There was an error sending your message. Please try again later.
        </div>
      )}
    </div>
  );
};

export default ContactForm;
