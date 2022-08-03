import Header from './components/Header';
import Main from './components/Main';
import { HomePage } from './pages/HomePage';
import { NotFound } from './pages/NotFound';
import { Details } from './pages/Details';
import { Switch, Route } from 'react-router-dom';
import {useState} from "react";

function App() {
    const [countries, setCountries] = useState([]);

    return (
        <>
            <Header />
            <Main>
                <Switch>
                    <Route path="/" exact>
                        <HomePage countries={countries} setCountries={setCountries} />
                    </Route>
                    <Route path="/country/:name" component={Details} />
                    <Route component={NotFound} />
                </Switch>
            </Main>
        </>
    );
}

export default App;
