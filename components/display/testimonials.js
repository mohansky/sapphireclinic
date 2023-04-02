import TestimonialItem from "@display/testimonial-item";
import TestimonialsList from "@data/testimonials.json";
import SliderCarousel from "@display/carousel";

export default function Testimonials() {
  return (
    <>
      <h3 className="text-3xl font-bold text-center my-8">
        Our patients&apos; experience
      </h3>

      <SliderCarousel>
        {TestimonialsList.map((testimonial, index) => (
          <TestimonialItem key={index} testimonial={testimonial} />
        ))}
      </SliderCarousel>
    </>
  );
}
