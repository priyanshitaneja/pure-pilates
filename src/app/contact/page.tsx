import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "@/constants/contact";

export default function ContactPage() {
  return (
    <div className="bg-cream-50">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat text-black mb-6">Contact Us</h1>
          <p className="text-lg text-black/80 max-w-2xl mx-auto">
            Get in touch with us to start your Pilates journey or ask any questions about our classes.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-montserrat text-black mb-6">Contact Information</h2>
              <div className="space-y-4 text-black/80">
                <div>
                  <h3 className="font-semibold mb-2">Address</h3>
                  <p>{CONTACT_INFO.address}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p>{CONTACT_INFO.email}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p>{CONTACT_INFO.phone}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Hours</h3>
                  <p>Weekdays: {CONTACT_INFO.hours.weekdays}</p>
                  <p>Weekends: {CONTACT_INFO.hours.weekends}</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-montserrat text-black mb-6">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-black/80 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-md border border-black/10 focus:outline-none focus:ring-2 focus:ring-black/20"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black/80 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-md border border-black/10 focus:outline-none focus:ring-2 focus:ring-black/20"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-black/80 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 rounded-md border border-black/10 focus:outline-none focus:ring-2 focus:ring-black/20"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black/80 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-md border border-black/10 focus:outline-none focus:ring-2 focus:ring-black/20"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-6 bg-cream-50">
        <div className="container mx-auto max-w-3xl">
          <div className="aspect-video bg-black/5 rounded-lg">
            {/* Add map integration here */}
            <div className="w-full h-full flex items-center justify-center text-black/40">
              Map will be integrated here
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 