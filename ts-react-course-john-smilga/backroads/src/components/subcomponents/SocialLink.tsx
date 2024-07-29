import { SocialLinkProps } from "../../types/type";
function SocialLink(props: SocialLinkProps) {
	return <li key={props.id}>
		<a href={props.href} className={props.class_name}
				target="_blank" rel="noreferrer">
			<i className={props.icon}></i>
		</a>
	</li>
}

export default SocialLink;
