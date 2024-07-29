import { ToursType } from "../../types/type"

function Tour(props: ToursType) {
	return (
		<article className="tour-card">
			<div className="tour-img-container">
				<img className= "tour-img" src={props.image}/>
				<p className="tour-date">{props.date}</p>
			</div>
			<div className="tour-info">
					<div className="tour-title">
						<h4>{props.title}</h4>
					</div>
				<p>{props.info}</p>
				<div className="tour-footer">
					<p>
						<span>
							<i className="fas fa-map"></i>
						</span>
						{props.location}
					</p>
					<p>{props.duration} days</p>
					<p>From ${props.cost}</p>
				</div>
			</div>
		</article>
	)
}

export default Tour
