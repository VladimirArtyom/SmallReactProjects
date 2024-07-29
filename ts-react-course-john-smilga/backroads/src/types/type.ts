export type ServiceType = {
	id?: number;
	title: string;
	description: string;
	icon: string;
}

export type TitleType = {
	title: string;
	subTitle: string;
}

export type ToursType = {
	id?: number;
	image: string;
	title: string;
	info: string;
	date: string;
	location: string;
	duration: number;
	cost: number;
}

export type PageLink = {
	id: number;
	href: string;
	text: string;
}

export type SocialLink = {
	id: number
	href: string;
	icon: string;
}

export type ServiceTypeProps = {
	services: ServiceType[];
}

export type TitleTypeProps = {
	content: TitleType;
}

export type ToursTypeProps = {
	tours: ToursType[];
}


export type PageLinkProps = PageLink &{
	class_name: string
}

export type ParentPageLinkProps = {
	parent_class_name: string;
	page_links: PageLinkProps[];
}

export type SocialLinkProps = SocialLink & {
	class_name: string;
}

export type FooterProps = {
	pp_link_props: ParentPageLinkProps;
	pp_link_social_props: SocialLinkProps[];
	copyright_text: string;
}

