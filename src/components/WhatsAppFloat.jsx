import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'

export default function FloatingButtons() {
  const number = '918895575244' // your WhatsApp & Call number
  const text = encodeURIComponent('Hello Hotel Sri Krishna, I would like to enquire about rooms')

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${number}?text=${text}`}
        target="_blank"
        rel="noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-green-500 transition"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Call */}
      <a
        href={`tel:+${number}`}
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        <FiPhoneCall size={24} />
      </a>
    </div>
  )
}
