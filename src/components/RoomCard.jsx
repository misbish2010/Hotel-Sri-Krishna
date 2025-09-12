import React from "react";

/**
 * Props:
 * - title, price, img, desc, features (array of {icon, label}), whatsappNumber (string)
 */
export default function RoomCard({
  title,
  price,
  img,
  desc,
  features = [],
  whatsappNumber = "91XXXXXXXXXX",
}) {
  const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hi, I want to book the ${title}. Please share availability and rates.`
  )}`;

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-56 object-cover transform hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold mb-2 text-royal">{title}</h3>
        <p className="text-gray-600 mb-3">{desc}</p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-700 mb-4">
          {features.map((f, i) => (
            <div key={i} className="flex items-center space-x-2">
              {f.icon}
              <span>{f.label}</span>
            </div>
          ))}
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-4">
          <div className="text-lg font-bold">
            {price}{" "}
            <span className="text-sm font-normal text-gray-500">/ night</span>
          </div>
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="bg-royal text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700 transition"
          >
            Book on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
