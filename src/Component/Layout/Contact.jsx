import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  SendHorizonal,
  BookOpenCheck,
} from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-white min-h-screen px-6 py-12">
      <h2 className="text-4xl font-bold text-[#0B1F3A] text-center mb-10">
        Contact <span className="text-yellow-400">Us</span>
      </h2>
      <p className="text-center text-gray-600 mb-10 text-lg">
        Let’s get connected — we’d love to hear from you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-6 mt-10">
          <div className="flex items-start space-x-4">
            <Mail className="text-yellow-400" />
            <div>
              <h4 className="text-lg font-semibold text-[#0B1F3A]">Email</h4>
              <p className="text-gray-600">zenity@.com</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Phone className="text-yellow-400" />
            <div>
              <h4 className="text-lg font-semibold text-[#0B1F3A]">Phone</h4>
              <p className="text-gray-600">+977-9800000000</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <MapPin className="text-yellow-400" />
            <div>
              <h4 className="text-lg font-semibold text-[#0B1F3A]">Address</h4>
              <p className="text-gray-600">Kathmandu, Nepal</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <BookOpenCheck className="text-yellow-400" />
            <div>
              <h4 className="text-lg font-semibold text-[#0B1F3A]">
                Our Mission
              </h4>
              <p className="text-gray-600">
                Empowering readers by making digital books easily accessible and
                affordable.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-[#F9FAFB] p-8 rounded-xl shadow-md space-y-6">
          <div>
            <label className="block text-[#0B1F3A] font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block text-[#0B1F3A] font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block text-[#0B1F3A] font-semibold mb-1">
              Message
            </label>
            <textarea
              placeholder="Write your message here..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="flex items-center gap-2 bg-yellow-400 text-[#0B1F3A] px-6 py-2 rounded-md font-bold hover:bg-yellow-300 transition-all"
          >
            <SendHorizonal size={18} />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
