import PageLink from "./subcomponents/PageLink";
import { PageLinkProps, ParentPageLinkProps } from "../types/type";
function PageLinks(props: ParentPageLinkProps) {

  return (
    <ul className={props.parent_class_name} id='nav-links'>
      {props.page_links.map((link: PageLinkProps) => <PageLink key={link.id} {...link} />)}
    </ul>
  )

}

export default PageLinks;
