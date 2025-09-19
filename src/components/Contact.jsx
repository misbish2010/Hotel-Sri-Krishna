import React from "react";
import { Phone, Mail, MapPin } from "lucide-react"; // install lucide-react

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-stone-50">
      <h2 className="text-4xl font-serif text-center text-royal mb-10">
        Contact Us
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Phone */}
        <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl
                        transition-transform duration-300 hover:-translate-y-2
                        text-center">
          <Phone className="mx-auto text-royal mb-4 w-8 h-8" />
          <h3 className="font-semibold text-lg mb-2">Phone</h3>
          <a href="tel:+918895575244" className="text-blue-600 hover:underline">
            +91-8895575244
          </a>
        </div>

        {/* Email */}
        <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl
                        transition-transform duration-300 hover:-translate-y-2
                        text-center">
          <Mail className="mx-auto text-royal mb-4 w-8 h-8" />
          <h3 className="font-semibold text-lg mb-2">Email</h3>
          <a
            href="mailto:hotelsrikrishnakoraput@gmail.com"
            className="text-blue-600 hover:underline"
          >
            hotelsrikrishnakoraput@gmail.com
          </a>
        </div>

        {/* Address */}
        <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl
                        transition-transform duration-300 hover:-translate-y-2
                        text-center">
          <MapPin className="mx-auto text-royal mb-4 w-8 h-8" />
          <h3 className="font-semibold text-lg mb-2">Address</h3>
          <p>Behind Bus Stand, Near Sri Jaganath Temple</p>
          <p>Koraput, Odisha</p>
        </div>
      </div>

      {/* Google Map */}
      <div className="mt-12 max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.6847861037377!2d82.70879017330809!3d18.812195882338795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3af15f0fbddbe3%3A0x1fee6ba6e96b6107!2sHotel%20Sri%20Krishna!5e0!3m2!1sen!2sin!4v1757445446864!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </section>
  );
}
