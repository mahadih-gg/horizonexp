import SectionHeader from "@/components/common/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";

const ReviewsSection = () => {
  const testimonials = [
    {
      quote: "Deliver instant video experiences to millions with global speed and enterprise performance. To millions with global speed and enterprise. Video experiences to millions with global speed",
      author: "Devin A.",
      title: "CEO & Founder @Click Labs"
    },
    {
      quote: "Deliver instant video experiences to millions with global speed and enterprise performance. To millions with global speed and enterprise. Video experiences to millions with global speed",
      author: "Devin A.",
      title: "CEO & Founder @Click Labs"
    },
    {
      quote: "Deliver instant video experiences to millions with global speed and enterprise performance. To millions with global speed and enterprise. Video experiences to millions with global speed",
      author: "Devin A.",
      title: "CEO & Founder @Click Labs"
    }
  ];

  return (
    <section className="container">
      <SectionHeader
        title="What our users say about Horizon"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <CardContent>
              <p className="text-black-gradient font-medium text-[32px]">
                “{testimonial.quote}”
              </p>

              <div className="flex items-center space-x-4 pt-[110px]">
                <div className="size-[60px] bg-black-gradient rounded-full shrink-0" />
                <div>
                  <p className="text-primary-text text-xl">
                    {testimonial.author}
                  </p>
                  <p className="text-primary-text/50 text-xl">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;