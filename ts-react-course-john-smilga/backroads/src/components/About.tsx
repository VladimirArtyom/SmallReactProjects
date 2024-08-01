import { TitleType } from "../types/type"
import Title from "./Title"
import aboutImg from "../images/about.jpeg"

function About(): JSX.Element {
  const content: TitleType = {
    title: "about",
    subTitle: "us",
  }
  return <>
    <section className="section" id="about">
    <Title content={content}/>

    <div className="section-center about-center">
      <div className="about-img">
        <img className="about-photo" src={aboutImg}/>  
      </div>
        <article className="about-info">
          <h3>Explore the difference</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odio unde dolor?</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odio unde dolor?</p>
          <a href="#" className="btn">Read More</a>

        </article>
    </div>
    

    </section>
  </>
}

export default About


