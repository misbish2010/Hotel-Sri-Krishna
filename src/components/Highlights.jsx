import React from 'react'
import { FaBed, FaHandsHelping, FaMapMarkerAlt } from 'react-icons/fa'

const cards = [
  {icon:<FaBed size={32} className='text-royal' />, title:'Elegant Rooms', text:'AC & Non-AC options, modern amenities.'},
  { icon:<FaHandsHelping size={32} className='text-royal' />, title:'Warm Hospitality', text:'Friendly staff ensuring a homely stay.' },
  {icon:<FaMapMarkerAlt size={32} className='text-royal' />, title:'Prime Location', text:'Central Koraput, easy access to attractions.'},
]

export default function Highlights(){
  return (
    <section className="py-12">
      <h2 className="text-center text-3xl font-serif mb-8">Why Choose Us</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <div key={i} className="p-6 rounded-lg bg-white shadow hover:shadow-lg transition">
            <div className="mb-4">{c.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
            <p className="text-gray-600">{c.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
