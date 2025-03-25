import React, { useEffect } from "react";

const ContactUs = () => {

    useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
    
  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center">Contact Us</h2>
      <p className="text-center text-gray-500 mt-2">
        Any question or remark? Just write us a message.
      </p>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="bg-[#FEFFFB] p-6 rounded-xl shadow-lg place-items-center place-content-center flex flex-col gap-6">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <p className="text-gray-600 mb-4">Say something to start a live chat!</p>
          <div className="text-gray-700 space-y-2">
            <p>📞 +61 452 643 953</p>
            <p>✉️ example@gmail.com</p>
            <p>📍 42, Innes Court,  Berwick, Victoria 3806</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-6 rounded-xl">
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B2D55E]"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B2D55E]"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B2D55E]"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B2D55E]"
            />
            <textarea
              placeholder="Message..."
              className="w-full border border-gray-300 p-3 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-[#B2D55E]"
            ></textarea>
            <button
              type="submit"
              className="bg-[#85B415] text-white px-6 py-3 rounded-lg hover:bg-[#76A10E] transition w-full md:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Map */}
      <div className="mt-10">
        <iframe
          className="w-full h-64 md:h-96 rounded-xl shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2962.5760901082235!2d145.35570558667877!3d-38.052218933530575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzjCsDAzJzA4LjYiUyAxNDXCsDIxJzI4LjgiRQ!5e0!3m2!1sen!2slk!4v1742822277644!5m2!1sen!2slk"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactUs;
