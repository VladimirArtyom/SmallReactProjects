import { TitleType, ToursTypeProps, ToursType } from "../types/type";
import Title from "./Title";
import Tour from "./subcomponents/Tour";

function Tours(props: ToursTypeProps) {
 
  const content : TitleType = {
    title: "featured",
    subTitle: "tours",
  }

  return (
    <section className="section"> 
      <Title content={content}/>
      <div className="section-center featured-center"> 
        {props.tours.map((tour: ToursType) => <Tour key={tour.id} 
          title={tour.title}
          image={tour.image} 
          date={tour.date} info={tour.info}
          location={tour.location}
          duration={tour.duration}
          cost={tour.cost} 
        />)}
      </div>
    </section>
  )
}

export default Tours;
