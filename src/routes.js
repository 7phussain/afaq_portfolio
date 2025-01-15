import AboutUs from "./layouts/pages/landing-pages/about-us";
import ContactUs from "./layouts/pages/landing-pages/contact-us";
import Presentation from "./layouts/pages/presentation";

// Sections
import PageHeaders from "./layouts/sections/page-sections/page-headers";
import Features from "./layouts/sections/page-sections/featuers";

/* import Alerts from "layouts/sections/attention-catchers/alerts"; */
/* import Modals from "layouts/sections/attention-catchers/modals"; */
/* import TooltipsPopovers from "layouts/sections/attention-catchers/tooltips-popovers"; */
import HomeIcon from "@mui/icons-material/Home";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import PsychologyIcon from "@mui/icons-material/Psychology";
import MessageIcon from "@mui/icons-material/Message";

const routes = [
  {
    name: "Home",
    icon: <HomeIcon />,
    route: "/",
    component: <Presentation />,
    hash: false,
  },

  {
    name: "about Me",
    route: "/pages/landing-pages/about-us",
    icon: <PsychologyIcon />,
    component: <AboutUs />,
    hash: false,
  },
  {
    name: "Contact",
    route: "/pages/landing-pages/contact-us",
    icon: <MessageIcon />,
    component: <ContactUs />,
    hash: false,
  },
  /* 
  {
    name: 'Services',
    hash: false,
    icon: <DesignServicesIcon />,
    collapse: [
      {
        name: 'Graphic Designing',
        description: 'See all sub services',
        dropdown: true,
        collapse: [
          {
            name: '2D & 3D Logos',
            route: '/sections/page-sections/page-headers',
            component: <PageHeaders />,
          },
          {
            name: 'Advertisements',
            route: '/sections/page-sections/features',
            component: <Features />,
          },
          {
            name: 'Business Cards',
            route: '/sections/page-sections/features',
            component: <Features />,
          },
          {
            name: 'Custom Typography',
            route: '/sections/page-sections/features',
            component: <Features />,
          },
          {
            name: 'Info Graphics',
            route: '/sections/page-sections/features',
            component: <Features />,
          },
          {
            name: 'Product Packaging',
            route: '/sections/page-sections/features',
            component: <Features />,
          },
          {
            name: 'Fashion Branding',
            route: '/sections/page-sections/features',
            component: <Features />,
          },
          {
            name: 'Album Covers',
            route: '/sections/page-sections/features',
            component: <Features />,
          },
          {
            name: 'Book Covers',
            route: '/sections/page-sections/features',
            component: <Features />,
          },
        ],
      }, */

  /* {
        name: "Web Development",
        description: "See all sub services ",
        dropdown: true,
        collapse: [
          {
            name: "alerts",
            route: "/sections/attention-catchers/alerts",
            component: <Alerts />,
          },
          {
            name: "modals",
            route: "/sections/attention-catchers/modals",
            component: <Modals />,
          },
          {
            name: "tooltips & popovers",
            route: "/sections/attention-catchers/tooltips-popovers",
            component: <TooltipsPopovers />,
          },
        ],
      }, */
  /*   ],
  }, */
];

export default routes;
