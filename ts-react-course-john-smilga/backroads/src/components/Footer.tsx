import { FooterProps } from "../types/type";
import PageLinks from "./PageLinks";
import SocialLink from "./subcomponents/SocialLink";
import { SocialLinkProps } from "../types/type";
function Footer(props: FooterProps) {
  return <footer className="section footer">
    <PageLinks parent_class_name={props.pp_link_props.parent_class_name} page_links={props.pp_link_props.page_links}/>
    <ul className="footer-icons">
      {props.pp_link_social_props.map((link: SocialLinkProps) => <SocialLink key={link.id} 
        href={link.href} id={link.id}
        icon={link.icon} class_name={link.class_name} />)}
    </ul>
    <p className="copyright">{props.copyright_text}</p>

  </footer>
}


export default Footer;
