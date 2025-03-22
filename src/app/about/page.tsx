import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { BOOKING_LINK } from "@/utils/constants";
import { Carousel } from "@/components/ui/carousel";

export default function AboutPage() {
  const studioImages = [
    {
      src: "/images/studio/1.jpg",
      alt: "Our Pilates studio space"
    },
    {
      src: "/images/studio/2.jpg",
      alt: "Pilates equipment and mats"
    },
    {
      src: "/images/studio/3.jpg",
      alt: "Private training area"
    },
    {
      src: "/images/studio/4.jpg",
      alt: "Pilates "
    },
    {
      src: "/images/studio/5.jpg",
      alt: "Pilates "
    },
    {
      src: "/images/studio/6.jpg",
      alt: "Pilates "
    },
    {
      src: "/images/studio/7.jpg",
      alt: "Pilates "
    },
    {
      src: "/images/studio/8.jpg",
      alt: "Pilates "
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 flex items-center justify-center bg-cream-50">
        <div className="absolute inset-0 bg-[url('/about-bg.jpg')] bg-cover bg-center opacity-90 -z-10" />
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-montserrat tracking-wide text-stone-900 mb-8">About Us</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto font-light">
            Dedicated to helping you achieve balance, strength, and wellness through the art of Pilates.
          </p>
        </div>
      </section>

      {/* Our Studio */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-montserrat tracking-wide text-stone-900 mb-8">Our Studio</h2>
            <div className="mb-8">
              <Carousel images={studioImages} />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-cream-100">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-montserrat tracking-wide text-stone-900 mb-8">Our Story</h2>
            <div className="prose prose-lg text-stone-600 leading-relaxed">
              <p>
                Pure Pilates was founded with a simple yet powerful vision: to create a space where individuals could discover
                the transformative power of mindful movement. Our journey began with a deep appreciation for the Pilates method
                and its ability to strengthen both body and mind.
              </p>
              <br />
              <p>
                Today, we continue to uphold the core principles of Pilates while incorporating modern techniques and understanding.
                Our studio has grown into a vibrant community of dedicated practitioners and passionate instructors, all united
                in the pursuit of wellness through movement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-montserrat tracking-wide text-stone-900 text-center mb-16">Instructors</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                name: "Shubra Raina",
                role: "Founder & Lead Instructor",
                image: "/team/sarah.jpg",
                description: "Certified Pilates instructor with over 10 years of experience."
              },
              {
                name: "Ritika",
                role: "Instructor",
                image: "/team/emma.jpg",
                description: "Expert in prenatal and postnatal Pilates."
              }
            ].map((member, index) => (
              <div key={index} className="text-center flex flex-col text-center">
                <div className="aspect-square mb-6 bg-cream-200" />
                <h3 className="text-xl font-montserrat tracking-wide text-stone-900 mb-2">{member.name}</h3>
                <p className="text-stone-600 font-medium mb-2">{member.role}</p>
                <p className="text-stone-600 mx-auto px-8">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-montserrat tracking-wide mb-8">Start Your Journey With Us</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto font-light">
            Join our community and experience the Pure Pilates difference.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg">
              <Link href={BOOKING_LINK} target="_blank" rel="noopener noreferrer">Book a Session</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 