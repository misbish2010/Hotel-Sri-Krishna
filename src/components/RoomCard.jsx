import React from "react";

export default function RoomCard({ title, img, desc, price, features, whatsappNumber }) {
  return (
    <div className="bg-stone-100 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">

      <img src={img} alt={title} className="w-full h-56 object-cover" />
      <div className="p-6">
    <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
    <p className="text-gray-800 text-sm mt-1">{desc}</p>

    {/* Prices */}
    <div className="mt-4 grid grid-cols-2 gap-4 text-center">
      <div className="bg-emerald-50 p-3 rounded-lg shadow-sm">
        <p className="text-sm text-emerald-700">AC</p>
        <p className="text-lg font-bold text-emerald-900">{price.ac}</p>
        <p className="text-xs text-emerald-600">Including GST</p>
      </div>
      <div className="bg-amber-50 p-3 rounded-lg shadow-sm">
        <p className="text-sm text-amber-700">Non-AC</p>
        <p className="text-lg font-bold text-amber-900">{price.nonAc}</p>
        <p className="text-xs text-amber-600">Including GST</p>
      </div>
    </div>


        {/* Features (2-column grid) */}
        <ul className="mt-4 grid grid-cols-2 gap-3 text-gray-700">
          {features.common.map((f, i) => (
            <li key={i} className="flex items-center space-x-2">
              <span className="text-xl">{f.icon}</span>
              <span>{f.label}</span>
            </li>
          ))}
          {features.acOnly.map((f, i) => (
            <li key={`ac-${i}`} className="flex items-center space-x-2">
              <span className="text-xl">{f.icon}</span>
              <span>{f.label}</span>
            </li>
          ))}
        </ul>



        {/* WhatsApp button */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=Hello, I’d like to know more about the ${title}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block w-full text-center bg-royal text-white py-2 px-4 rounded-xl hover:bg-royal-dark transition"
        >
          Enquire on WhatsApp
        </a>
      </div>
    </div>
  );
}
