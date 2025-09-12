import React from 'react'

export default function Footer(){
  return (
    <footer className="mt-12 bg-royal text-white py-8">
      <div className="container-max px-4 text-center">
        <div className="mb-4">Hotel Sri Krishna</div>
        <div>© {new Date().getFullYear()} Hotel Sri Krishna. All rights reserved.</div>
      </div>
    </footer>
  )
}
