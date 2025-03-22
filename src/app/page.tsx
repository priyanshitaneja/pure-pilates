'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FEATURES = [
  {
    title: "Comprehensive Low Impact Fitness",
    description: "Experience a full-body workout that's gentle on your joints while building strength and flexibility.",
    // icon: "💪"
  },
  {
    title: "Online & Studio Sessions",
    description: "Flexible training options to fit your schedule, whether you prefer in-person or virtual classes.",
    // icon: "🎥"
  },
  {
    title: "Pre-Postnatal Certified",
    description: "Safe and effective Pilates programs designed specifically for expecting and new mothers.",
    // icon: "👶"
  },
  {
    title: "Stott Pilates Instructor",
    description: "Learn from a certified Stott Pilates instructor, ensuring the highest quality of training.",
    // icon: "⭐"
  }
] as const;

const TESTIMONIALS = [
  {
    quote: "Pure Pilates has transformed my fitness journey. The low-impact approach has helped me build strength without strain.",
    author: "Sarah Johnson",
    role: "Fitness Enthusiast"
  },
  {
    quote: "The pre-natal classes were exactly what I needed during my pregnancy. I felt strong and supported throughout.",
    author: "Emily Chen",
    role: "New Mother"
  },
  {
    quote: "The combination of online and studio sessions gives me the flexibility I need to maintain my practice.",
    author: "Michael Rodriguez",
    role: "Working Professional"
  },
  {
    quote: "As someone new to Pilates, the instructor's expertise and patience made me feel comfortable and confident.",
    author: "Lisa Thompson",
    role: "Beginner Student"
  },
  {
    quote: "The Stott Pilates method has helped me recover from my back injury. I'm stronger than ever!",
    author: "David Wilson",
    role: "Recovery Client"
  }
] as const;

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    containScroll: 'trimSnaps'
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (emblaApi) {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    }
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      onSelect();
      emblaApi.on('select', onSelect);
      emblaApi.on('reInit', onSelect);
    }
  }, [emblaApi, onSelect]);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex justify-center bg-cream-50 bg-[url('/images/main.png')] bg-cover bg-center lg:bg-top">
        <div className="absolute inset-0 bg-stone-900/70 -z-10" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-3xl md:text-6xl font-montserrat font-semibold tracking-wide text-forest-700 mt-20 mb-6">
            Transform Your Body & Mind
          </h1>
        </div>
      </section>

      <section className="py-20 bg-cream-50">
        <p className="text-xl md:text-2xl  mb-8 max-w-2xl mx-auto font-light text-center">
          Experience the power of pure pilates. Join our community and start your journey to a stronger, more flexible you.
        </p>
        <div className="flex gap-6 justify-center">
          <Button asChild size="lg" >
            <Link href="/schedule">View Schedule</Link>
          </Button>
          <Button asChild size="lg" variant="outline" >
            <Link href="/classes">Classes Info</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-medium font-montserrat tracking-wide text-stone-900 text-center mb-12">
            Why Choose Pure Pilates?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, index) => (
              <div key={index} className="text-center p-8  rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-montserrat font-medium tracking-wide text-stone-900 mb-4">{feature.title}</h3>
                <p className="text-stone-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <Button asChild size="lg" className="mt-20 mb-0">
          <Link href="/about">Check out our studio</Link>
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-cream-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-montserrat tracking-wide text-stone-900 text-center mb-12 font-medium">
            What Our Clients Say
          </h2>
          <div className="relative max-w-5xl mx-auto">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {TESTIMONIALS.map((testimonial, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.33%]">
                    <div className="bg-white p-6 rounded-lg shadow-sm mx-4 h-full">
                      <p className="text-stone-600 mb-4 italic">"{testimonial.quote}"</p>
                      <div className="text-right">
                        <p className="font-montserrat text-stone-900 font-medium">- {testimonial.author}</p>
                        <p className="text-stone-500 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              className={`absolute -left-12 top-1/2 -translate-y-1/2 bg-sage-600 text-cream-50 rounded-full w-10 h-10 flex items-center justify-center transition-colors ${canScrollPrev ? 'hover:bg-sage-700' : 'opacity-50 cursor-not-allowed'
                }`}
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              className={`absolute -right-12 top-1/2 -translate-y-1/2 bg-sage-600 text-cream-50 rounded-full w-10 h-10 flex items-center justify-center transition-colors ${canScrollNext ? 'hover:bg-sage-700' : 'opacity-50 cursor-not-allowed'
                }`}
              onClick={scrollNext}
              disabled={!canScrollNext}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-montserrat tracking-wide mb-8 font-medium text-stone-900">Ready to Start Your Journey?</h2>
          <p className="text-xl text-stone-600 mb-12 max-w-2xl mx-auto font-light">
            Join our community of dedicated practitioners and experience the transformative power of Pilates.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
} 