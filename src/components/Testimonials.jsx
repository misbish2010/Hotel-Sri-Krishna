import React from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Priya M.",
    rating: 5,
    text: "Excellent stay at Hotel Sri Krishna, clean rooms and friendly staff. Highly recommend!",
  },
  {
    name: "Rahul K.",
    rating: 5,
    text: "Great location in the heart of Koraput. Owner and staff very friendly and co-opeartive .",
  },
  {
    name: "Anita S.",
    rating: 4,
    text: "Comfortable rooms and very helpful staff. Will definitely come back again.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 bg-gray-50">
      <h2 className="text-center text-3xl font-serif mb-8">What Our Guests Say</h2>
      <div className="grid md:grid-cols-3 gap-6 container mx-auto px-4">
        {reviews.map((review, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
            <div className="flex items-center mb-3">
              {[...Array(review.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500 mr-1" />
              ))}
            </div>
            <p className="text-gray-700 mb-4">“{review.text}”</p>
            <p className="text-sm font-semibold text-gray-600">– {review.name}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <a
          href="https://www.google.com/maps/place/Hotel+Sri+Krishna/@18.8121959,82.7113651,17z/data=!4m11!3m10!1s0x3a3af15f0fbddbe3:0x1fee6ba6e96b6107!5m2!4m1!1i2!8m2!3d18.8121959!4d82.7113651!9m1!1b1!16s%2Fg%2F11wqcxn2vp?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noreferrer"
          className="bg-royal text-white px-6 py-3 rounded shadow hover:bg-gold hover:text-royal transition"
        >
          ⭐ Read Our Reviews on Google ⭐
        </a>
      </div>
    </section>
  );
}
