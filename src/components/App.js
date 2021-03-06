import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Work from './Work';



const App = () => (
    <BrowserRouter>
        <div>
            <Header />
            <div className="container">
                <Switch>
                    <Route exact path="/" component={About} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/work" component={Work} />
                    {/* <Route exact path="/contact" component={Contact} /> */}
                </Switch>
            </div>
            <Footer />
        </div>
  </BrowserRouter>
);

export default App;
