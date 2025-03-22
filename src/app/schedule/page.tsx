'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BOOKING_LINK, SCHEDULE, DAYS, CALENDAR_LINK } from "@/utils/constants";

export default function SchedulePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 flex items-center justify-center bg-cream-50">
        <div className="absolute inset-0 bg-[url('/schedule-bg.jpg')] bg-cover bg-center opacity-90 -z-10" />
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat tracking-wide text-stone-900 mb-4">
            Class Schedule
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto font-light">
            Join our classes and start your Pilates journey today
          </p>
        </div>
      </section>

      {/* Main Schedule Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-montserrat tracking-wide text-stone-900 text-center mb-12 font-medium">
            Weekly Schedule
          </h2>

          {/* Schedule Table */}
          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-cream-50">
                <tr className="bg-cream-100">
                  <th className="p-4 text-left font-montserrat text-stone-900 border-none border-b-0"></th>
                  <th className="p-4 text-left font-montserrat text-stone-900">Time</th>
                  {DAYS.map(day => (
                    <th key={day} className="p-4 text-center font-montserrat text-stone-900">{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.entries(SCHEDULE).map(([period, times], periodIndex) => (
                  Object.entries(times).map(([time, classes], timeIndex) => (
                    <tr key={`${period}-${time}`} className="border-t border-stone-200">
                      {timeIndex === 0 && (
                        <td
                          rowSpan={Object.keys(times).length}
                          className="p-4 font-medium text-stone-900 bg-cream-50"
                        >
                          {period}
                        </td>
                      )}
                      <td className="p-4 font-medium text-stone-900">{time}</td>
                      {DAYS.map(day => (
                        <td key={day} className="p-4 text-center text-stone-500">
                          {classes[day]}
                        </td>
                      ))}
                    </tr>
                  ))
                ))}
              </tbody>
            </table>
            <div className="text-stone-500 space-y-2 text-sm text-center pt-2">
              * This is a general schedule and classes may vary. You can check the current schedule {' '}
              <Link href={CALENDAR_LINK} target="_blank" rel="noopener noreferrer" className="underline text-blue-700">here</Link>.
            </div>
          </div>

          {/* Booking Button */}
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href={BOOKING_LINK} target="_blank" rel="noopener noreferrer">Book a Class</Link>
            </Button>
          </div>

          {/* Notes Section */}
          <div className="bg-cream-50 p-8 rounded-lg max-w-3xl mx-auto mt-12">
            <h3 className="text-xl font-montserrat text-stone-900 mb-6">Please note:</h3>
            <ul className="text-stone-600 space-y-4 leading-relaxed">
              <li>• All classes are 50 minutes long</li>
              <li>• Please arrive 5 minutes before class start time</li>
              <li>• Class sizes are limited to ensure personalized attention</li>
              <li>• Cancellation policy: 14 hours notice required</li>
              <li>• For private sessions and equipment classes, please contact us directly</li>
              <li>• This is a general schedule and classes may vary</li>
            </ul>
          </div>
        </div>
      </section >

      <section className="relative py-20 flex items-center justify-center bg-cream-50">
        <div className="absolute inset-0 bg-[url('/schedule-bg.jpg')] bg-cover bg-center opacity-90 -z-10" />
        <div className="container mx-auto px-6 text-center">
          <h3 className="font-montserrat font-bold tracking-wide text-stone-900 mb-6">
            Have a question?
          </h3>
          <Button asChild variant="outline">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div >
  );
} 