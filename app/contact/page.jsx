import { generateWhatsAppLink } from '../../lib/whatsapp';

export default function Contact() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Phone</h3>
                <a href="tel:+916303134161" className="text-gray-600 hover:text-black">+91 6303134161</a>
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <a href="mailto:surya630313@gmail.com" className="text-gray-600 hover:text-black">surya630313@gmail.com</a>
              </div>
              <div>
                <h3 className="font-semibold">WhatsApp</h3>
                <a
                  href={generateWhatsAppLink()}
                  className="inline-block bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors"
                >
                  Message us on WhatsApp
                </a>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Visit Us</h2>
            <div className="h-64 bg-gray-200 rounded-lg">
              {/* Placeholder for Google Maps iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.98!3d40.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzAwLjAiTiA3M8KwNTgnNDguMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}