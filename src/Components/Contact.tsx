import React from "react";
const Contact = () => (

    <section id="contact" className="py-20 bg-pink-500">
      <div className="container mx-auto text-center text-black">
        <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
        <p className="text-lg mb-4">Have any questions? We&apos;d love to hear from you</p>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg border border-gray-300" />
          </div>
          <div className="mb-4">
            <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg border border-gray-300" />
          </div>
          <div className="mb-4">
            <textarea placeholder="Your Message" className="w-full p-3 rounded-lg border border-gray-300" rows={5}></textarea>
          </div>
          <button type="submit" className="bg-pink-500 px-6 py-3 rounded-full text-lg font-semibold hover:bg-pink-600">Send Message</button>
        </form>
      </div>
    </section>
  );
  
  export default Contact;