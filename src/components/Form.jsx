import React from 'react'
import { useState} from 'react'

function Form() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
  
    const formatWhatsAppMessage = () => {
      return `Hello,\n\nYou have a new contact inquiry:\n\n` +
          `Name: ${name}\n` +
          `Email: ${email}\n` +
          `Phone: ${phone}\n` +
          `Message: ${message}\n\n` +
          `Best regards.`;
  };
  
  const sendMessageOnWhatsApp = (e) => {
      e.preventDefault()
      if (!name || !email || !phone || !message) {
          alert('Please fill all information');
          return;
      }
  
      const phoneNumber = '+2349031400901'; // Replace with the recipient's WhatsApp number
      const messageContent = formatWhatsAppMessage();
      const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(messageContent)}`;
  
      // Open WhatsApp in a new tab with the message pre-filled
      window.open(whatsappURL, '_blank');
  };
  return (
    <div>
        <form className="space-y-4">
              <div>
                <label className="block text-orange-500">Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                  value={name} onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-orange-500">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                  value={email} onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-orange-500">Phone Number</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Phone number"
                  value={phone} onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-orange-500">Message</label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Message"
                  rows="4"
                  value={message} onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 rounded-2xl hover:bg-white hover:text-orange-500 focus:outline-none focus:ring-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => sendMessageOnWhatsApp(e)}
              >
                Send Message
              </button>
            </form>
    </div>
  )
}

export default Form