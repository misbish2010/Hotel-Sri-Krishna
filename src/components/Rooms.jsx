import React from "react";
import RoomCard from "./RoomCard";
import { FaWifi, FaSnowflake, FaTv, FaBath } from "react-icons/fa";
import { MdElevator } from "react-icons/md";

const rooms = [
  {
    title: "Studio Room",
    price: "₹1500",
    img: "/images/rooms/studio.jpg",
    desc: "Cozy stay for solo travelers or couples.",
    features: [
      { icon: <FaWifi className="text-royal" />, label: "Free WiFi" },
      { icon: <FaSnowflake className="text-royal" />, label: "AC" },
      { icon: <FaTv className="text-royal" />, label: "TV" },
      { icon: <FaBath className="text-royal" />, label: "Attached Bath" },
      { icon: <MdElevator className="text-royal" />, label: "Lift Access" },
    ],
  },
  {
    title: "Luxury Room",
    price: "₹2500",
    img: "/images/rooms/luxury.jpg",
    desc: "Spacious room with premium amenities.",
    features: [
      { icon: <FaWifi className="text-royal" />, label: "Free WiFi" },
      { icon: <FaSnowflake className="text-royal" />, label: "AC" },
      { icon: <FaTv className="text-royal" />, label: "TV" },
      { icon: <FaBath className="text-royal" />, label: "Attached Bath" },
      { icon: <MdElevator className="text-royal" />, label: "Lift Access" },
    ],
  },
  {
    title: "Triple Room",
    price: "₹3000",
    img: "/images/rooms/triple.jpg",
    desc: "Ideal for families or groups.",
    features: [
      { icon: <FaWifi className="text-royal" />, label: "Free WiFi" },
      { icon: <FaSnowflake className="text-royal" />, label: "AC" },
      { icon: <FaTv className="text-royal" />, label: "TV" },
      { icon: <FaBath className="text-royal" />, label: "Attached Bath" },
      { icon: <MdElevator className="text-royal" />, label: "Lift Access" },
    ],
  },
];

export default function Rooms() {
  // Optional: put your real number here, or pass per-room if needed
  const whatsappNumber = "91XXXXXXXXXX";

  return (
    <section id="rooms" className="py-16 bg-gray-50">
      <h2 className="text-center text-3xl font-serif mb-12">Our Rooms</h2>
      <div className="container mx-auto grid md:grid-cols-3 gap-8 px-4">
        {rooms.map((room, index) => (
          <RoomCard
            key={index}
            {...room}
            whatsappNumber={whatsappNumber}
          />
        ))}
      </div>
    </section>
  );
}
