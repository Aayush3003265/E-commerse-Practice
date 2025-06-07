import { HOME_ROUTE, PRODUCTS_ROUTE } from "./Routes";

let routeLink = [
  {
    route: HOME_ROUTE,
    name: "Home",
    isAuth: false,
  },
  {
    route: "/about",
    name: "About",
    isAuth: false,
  },

  {
    route: "/contact",
    name: "Contact",
    isAuth: false,
  },
  {
    route: PRODUCTS_ROUTE,
    name: "Products",
    isAuth: false,
  },
  // {
  //   route: "/courses",
  //   name: "Courses",
  //   isAuth: false,
  // },
];

export default routeLink;
