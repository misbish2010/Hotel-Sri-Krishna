import React from "react";
import RoomCard from "./RoomCard";
import { FaWifi, FaSnowflake, FaTv, FaBath } from "react-icons/fa";
import { MdElevator } from "react-icons/md";
import studioImg from "../images/rooms/studio.jpg";
import luxuryImg from "../images/rooms/luxury.jpg";
import tripleImg from "../images/rooms/triple.jpg";

const rooms = [
  {
    title: "Studio Room",
    img: studioImg,
    desc: "Cozy stay for solo travelers or couples.",
    price: {
      ac: "₹1800.00 ",
      nonAc: "₹1500.00 ",
    },
    features: {
      common: [
        { icon: <FaWifi className="text-royal" />, label: "Free WiFi" },
        { icon: <FaTv className="text-royal" />, label: "TV" },
        { icon: <FaBath className="text-royal" />, label: "Attached Bath" },
        { icon: <MdElevator className="text-royal" />, label: "Lift Access" },
      ],
      acOnly: [
        { icon: <FaSnowflake className="text-royal" />, label: "AC" },
      ],
    },
  },
  {
    title: "Luxury Room",
    img: luxuryImg,
    desc: "Spacious room with premium amenities.",
    price: {
      ac: "₹2000.00",
      nonAc: "₹1700.00",
    },
    features: {
      common: [
        { icon: <FaWifi className="text-royal" />, label: "Free WiFi" },
        { icon: <FaTv className="text-royal" />, label: "TV" },
        { icon: <FaBath className="text-royal" />, label: "Attached Bath" },
        { icon: <MdElevator className="text-royal" />, label: "Lift Access" },
      ],
      acOnly: [
        { icon: <FaSnowflake className="text-royal" />, label: "AC" },
      ],
    },
  },
  {
    title: "Triple Room",
    img: tripleImg,
    desc: "Ideal for families or groups.",
    price: {
      ac: "₹2300.00",
      nonAc: "₹2000.00",
    },
    features: {
      common: [
        { icon: <FaWifi className="text-royal" />, label: "Free WiFi" },
        { icon: <FaTv className="text-royal" />, label: "TV" },
        { icon: <FaBath className="text-royal" />, label: "Attached Bath" },
        { icon: <MdElevator className="text-royal" />, label: "Lift Access" },
      ],
      acOnly: [
        { icon: <FaSnowflake className="text-royal" />, label: "AC" },
      ],
    },
  },
];

export default function Rooms() {
  const whatsappNumber = "918895575244";

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
