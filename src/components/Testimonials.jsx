import React, { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "I am very satisfied with the training. I rate this training 101% and I will improve my capacity as with the aim of comptroller general mission for creating this capacity building training programme workshop.",
    name: "Sarki B",
    role: "Nigerian Customs Service",
  },
  {
    quote: "The course generally was very good and adequately spaced. The topic was well chosen and the resource persons gave their best. I sincerely appreciate the composure and delivery of the resource persons. They should keep it up and do these kinds of training often. ",
    name: "Ogunkua IB",
    role: "Nigerian Navy",
  },
  {
    quote: "If only I can turn back the hands of the clock, I will turn back to the first day we started this training. It was indeed an excellent training I have ever had in my entire life. Thanks. Bravo! ",
    name: "Itukwude Maureen ",
    role: "Ministry of Justice",
  },
  {
    quote: "The organizers oer the participants a good opportunity to learn intensive lessons that are generally priceless and worth the time. A job well done. ",
    name: "Victor SM",
    role: "Oce of the Special Adviser to the President on Ethics and Value",
  },
  {
    quote: "This was my unexpected surprise for the fact that some seminars conducted by teams like this would come up with information that are not sustainable. The presenters have really built up our capacity that would be sustained for a productive service and self development.",
    name: "Etok, Nsikakabasi",
    role: "Nigerian Customs Service",
  },
];

function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-[60px] px-[40px] bg-none mb-[180px] flex flex-col items-center justify-center">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">
        What Our <span className="text-orange-500">Students</span> Say
      </h2>

      <div className="relative w-full max-w-3xl px-6">
        {testimonials.map((testimonial, i) => (
          <div
            key={i}
            className={`absolute inset-0 flex flex-col items-center text-center transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-lg italic text-gray-700">&ldquo;{testimonial.quote}&rdquo;</p>
            <div className="mt-4">
              <h4 className="font-semibold text-orange-500">{testimonial.name}</h4>
              <p className="text-gray-600 text-sm">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;