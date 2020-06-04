import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavbarSection } from "./components/NavbarSection";
import { HeaderSection } from "./components/HeaderSection";
import { Hakkimizda } from "./components/screens/Hakkimizda";
import { Iletisim } from "./components/screens/Iletisim";
import { Urunler } from "./components/screens/Urunler";
import { NotFound } from "./components/screens/NotFound";

export const App = () => {
 return (
  <Router>
   <NavbarSection />
   <Switch>
    <Route exact path="/" component={HeaderSection} />
    <Route path="/hakkimizda" component={Hakkimizda} />
    <Route path="/urunler" component={Urunler} />
    <Route path="/iletisim" component={Iletisim} />
    <Route component={NotFound} />
   </Switch>
  </Router>
 );
};
