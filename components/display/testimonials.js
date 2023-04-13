import TestimonialItem from "@display/testimonial-item";
import TestimonialsList from "@data/testimonials.json";
import SliderCarousel from "@display/carousel";

export default function Testimonials() {
  return (
    <>
      <div
        className="bg-no-repeat bg-cover bg-center relative h-full"
        style={{ backgroundImage: "url(" + "/images/testimonial.jpg" + ")" }}
      >
        <div className="w-full h-full absolute top-0 left-0 bg-black/30 backdrop-blur-sm"></div>
        <div className="py-20">
          <SliderCarousel>
            {TestimonialsList.map((testimonial, index) => (
              <TestimonialItem key={index} testimonial={testimonial} />
            ))}
          </SliderCarousel>
        </div>
      </div>
    </>
  );
}
