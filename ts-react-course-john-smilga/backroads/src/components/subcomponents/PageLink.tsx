import { PageLinkProps } from "../../types/type"

function PageLink(props: PageLinkProps) {
	return (
		<li key={props.id}>
			<a href={props.href} 
				className={props.class_name}>
				{props.text}
			</a>

		</li>
	)
}

export default PageLink;
