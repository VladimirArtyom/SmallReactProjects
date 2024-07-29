import Service from "./subcomponents/Service";
import { ServiceType, ServiceTypeProps, TitleType } from "../types/type";
import Title from "./Title";
function Services(props: ServiceTypeProps): JSX.Element {
  const content: TitleType = {
    title: "our",
    subTitle: "services",
  }
  return (
    <section className="section services" id="services">
      <Title  content={content} />
      <div className="section-center services-center">
        {props.services.map((service: ServiceType) => {
          return <Service key={service.id} 
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        })
        }
      </div>
    </section>
  )

}

export default Services;
