import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="py-12">
      <h2 className="text-3xl font-serif text-center mb-6">Contact Us</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded shadow text-center">
          <h3 className="font-semibold mb-2">Phone</h3>
          <p>+91-8895575244</p>
        </div>
        <div className="p-6 bg-white rounded shadow text-center">
          <h3 className="font-semibold mb-2">Email</h3>
          <p>hotelsrikrishnakoraput@gmail.com</p>
        </div>
        <div className="p-6 bg-white rounded shadow text-center">
          <h3 className="font-semibold mb-2">Address</h3>
          <p>Behind Bus Stand , Near to Sri Jaganath Temple</p>
          <p>Koraput, Odisha</p>
        </div>
      </div>
      <div className="mt-8 ratio ratio-16x9">
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
  )
}
