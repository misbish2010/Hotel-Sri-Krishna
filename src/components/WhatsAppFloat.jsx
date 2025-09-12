import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppFloat(){
  const number = '91XXXXXXXXXX' // replace with your number
  const text = encodeURIComponent('Hello Hotel Sri Krishna, I would like to enquire about rooms')
  return (
    <a href={`https://wa.me/${number}?text=${text}`} target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg z-50">
      <FaWhatsapp size={24} />
    </a>
  )
}
