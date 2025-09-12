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
    text: "Great location in the heart of Koraput. The food was authentic and delicious.",
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
          href="https://www.google.com/maps/place/Hotel+Sri+Krishna/@<your-lat-long>"
          target="_blank"
          rel="noreferrer"
          className="bg-royal text-white px-6 py-3 rounded shadow hover:bg-gold hover:text-royal transition"
        >
          Read More on Google
        </a>
      </div>
    </section>
  );
}
