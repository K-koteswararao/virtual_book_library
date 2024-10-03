import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import BookDetails from './pages/BookDetails';
import MyLibrary from './pages/MyLibrary';
import LibraryProvider from './context/LibraryContext';

function App() {
    return (
        <LibraryProvider>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/book/:id" component={BookDetails} />
                    <Route path="/my-library" component={MyLibrary} />
                </Switch>
            </Router>
        </LibraryProvider>
    );
}

export default App;
