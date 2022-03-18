import { Fragment } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

import classes from "./Layout.module.css";


const Layout = (props) => {
  return (
    <Fragment>
      <Navigation />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;