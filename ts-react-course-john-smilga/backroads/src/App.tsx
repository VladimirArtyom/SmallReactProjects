import Services from "./components/Services"
import Tours  from "./components/Tours"
import Footer from "./components/Footer"
import About from "./components/About"
import { services } from "./data"
import { tours } from "./data"
import { pageLinks, copyright_text, socialLinks} from "./data"
import { PageLinkProps, ParentPageLinkProps,
  PageLink, SocialLinkProps, SocialLink } from "./types/type"

function App() {
  const page_links_props: PageLinkProps[] =[];
  pageLinks.forEach((link: PageLink) => {
    const page_link: PageLinkProps = {
      id: link.id,
      href: link.href,
      text: link.text,
      class_name: "footer-link"
    }
    page_links_props.push(page_link);
  })

  const pp_link_props: ParentPageLinkProps = {
    parent_class_name: "footer-links",
    page_links: page_links_props,
  }

  const pp_link_social_props: SocialLinkProps[] = [];
  socialLinks.forEach((link: SocialLink) => {
    const new_link_props: SocialLinkProps = {
      id: link.id,
      href: link.href,
      icon: link.icon,
      class_name: "footer-icon"
    }
    pp_link_social_props.push(new_link_props);   
  })
  return (
    <>
      <About />
      <Services services={services}/>
      <Tours tours={tours}/>
      <Footer pp_link_props={pp_link_props}
        pp_link_social_props={pp_link_social_props}
        copyright_text={copyright_text} />
    </>
  )
}

export default App
