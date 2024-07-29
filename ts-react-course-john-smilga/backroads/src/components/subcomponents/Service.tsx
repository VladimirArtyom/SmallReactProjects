import {ServiceType} from '../../types/type'

function Service({
	title,
	description,
	icon}: ServiceType ){

	return (
		<article className='service'>
			<span className='service-icon'> 
				<i className={icon}></i>
			</span>
			<div className="service-info">
				<h4>{title}</h4>
				<p className="service-text">{description}</p>
			</div>

		</article>
		
	)

}

export default Service;
