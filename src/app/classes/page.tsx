import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { BOOKING_LINK } from "@/utils/constants";

export default function ClassesPage() {
  return (
    <div className="bg-cream-50">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat text-black mb-6">Our Classes</h1>
          <p className="text-lg text-black/80 max-w-2xl mx-auto">
            Experience the transformative power of Pilates through our carefully curated classes designed for all skill levels.
          </p>
        </div>
      </section>

      {/* Equipment Classes */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">          
          {/* Reformer Pilates */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/reformer.jpg"
                  alt="Reformer Pilates"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-montserrat text-black mb-4">Reformer Pilates</h3>
                <p className="text-black/80 mb-6">
                  The Reformer is a versatile piece of equipment that uses springs, pulleys, and a sliding carriage to provide resistance and support. These classes focus on building strength, flexibility, and control through fluid movements and precise exercises.
                </p>
                <div className="space-y-2 text-black/80">
                  <p>Duration: 50 minutes</p>
                  <p>Levels Available:</p>
                  <ul className="list-disc list-inside ml-4">
                    <li>Beginner - Perfect for those new to Pilates</li>
                    <li>Intermediate - For practitioners with foundational knowledge</li>
                    <li>Advanced - Challenging sequences for experienced students</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Cadillac Pilates */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2 relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/cadillac.jpg"
                  alt="Cadillac Pilates"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:order-1">
                <h3 className="text-2xl font-montserrat text-black mb-4">Cadillac Pilates</h3>
                <p className="text-black/80 mb-6">
                  The Cadillac, also known as the Trapeze Table, offers a unique combination of springs, bars, and straps that allow for a wide range of exercises. These sessions focus on precision, stability, and full-body integration while providing excellent support for rehabilitation and advanced practice.
                </p>
                <div className="space-y-2 text-black/80">
                  <p>Duration: 50 minutes</p>
                  <p>Levels Available:</p>
                  <ul className="list-disc list-inside ml-4">
                    <li>Beginner - Perfect for those new to Pilates</li>
                    <li>Intermediate - For practitioners with foundational knowledge</li>
                    <li>Advanced - Challenging sequences for experienced students</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Chair Pilates */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/chair.jpg"
                  alt="Chair Pilates"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-montserrat text-black mb-4">Chair Pilates</h3>
                <p className="text-black/80 mb-6">
                  The Wunda Chair is a compact yet powerful piece of equipment that challenges balance, strength, and control. These classes are excellent for building functional strength and are particularly effective for core stability and lower body conditioning.
                </p>
                <div className="space-y-2 text-black/80">
                  <p>Duration: 50 minutes</p>
                  <p>Levels Available:</p>
                  <ul className="list-disc list-inside ml-4">
                    <li>Beginner - Perfect for those new to Pilates</li>
                    <li>Intermediate - For practitioners with foundational knowledge</li>
                    <li>Advanced - Challenging sequences for experienced students</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sessions */}
      <section className="py-16 px-6 bg-cream-50">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-white rounded-lg p-8">
            {/* <h2 className="text-3xl font-montserrat text-black mb-8 text-center">Sessions</h2> */}
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-montserrat text-black mb-4">Group Sessions</h3>
                <p className="text-black/80 mb-4">
                  Join our intimate group classes where you'll experience the perfect blend of strength, flexibility, and mindful movement. Our expert instructors provide personalized attention while fostering a supportive community atmosphere.
                </p>
                <div className="space-y-2 text-black/80 mb-6">
                  <p>Duration: 50 minutes</p>
                  <p>Levels Available:</p>
                  <ul className="list-disc list-inside ml-4">
                    <li>Beginner - Perfect for those new to Pilates</li>
                    <li>Intermediate - For practitioners with foundational knowledge</li>
                    <li>Advanced - Challenging sequences for experienced students</li>
                  </ul>
                </div>
                <div className="text-center">
                  <Button asChild>
                    <Link href={BOOKING_LINK} target="_blank" rel="noopener noreferrer">Book a Group Session</Link>
                  </Button>
                </div>
              </div>

              <div className="border-t border-black/10 pt-8">
                <h3 className="text-2xl font-montserrat text-black mb-4">Private Sessions</h3>
                <p className="text-black/80 mb-6">
                  Experience personalized attention and customized programming with our one-on-one sessions. Perfect for beginners, those with specific goals, or anyone seeking to deepen their practice.
                </p>
                <div className="text-center">
                  <Button asChild>
                    <Link  href={BOOKING_LINK} target="_blank" rel="noopener noreferrer">Book a Private Session</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Class Packages */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-montserrat text-black mb-6">Class Packages</h2>
          <p className="text-black/80 mb-8">
            We offer flexible class packages designed to support your regular practice. Whether you're looking to attend weekly sessions or practice more frequently, we have options to suit your schedule and goals.
          </p>
          <p className="text-lg font-montserrat text-black">Contact us for pricing and package options</p>
          <div className="mt-8">
            <Button asChild variant="outline">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 