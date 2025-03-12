import Section from "../BaseComponents/Section";
import reviews from "../comment.json";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Reviews() {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 767,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 768
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  };

  return (
    <Section name="review">
      <section id="reviews" className="section-wrapper bg-main-khaki pb-5">
        <h3 className="title md:mr-5 md:text-right pt-5">Отзывы</h3>

        <Carousel
          responsive={responsive}
          slidesToSlide={1}
          focusOnSelect={false}
          additionalTransfrom={0}
          centerMode={false}
          minimumTouchDrag={80}
          swipeable={true}
          arrows={false}
          showDots
          draggable
          infinite
        >
          {reviews.map((item, index) => (

            <div key={index} className="h-full bg-white text-sm leading-normal py-7 px-3 mx-3 mb-3 border rounded-3xl">
              {item}
            </div>

          ))}
        </Carousel>
      </section>
    </Section>
  )
};