import Navigation from './Navigation';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

import classes from "./Layout.module.css";


const Layout = (props) => {
  return (
    <ScrollToTop>
      <Navigation />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </ScrollToTop>
  );
};

export default Layout;