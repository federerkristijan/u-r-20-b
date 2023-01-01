import { Route, Switch, Redirect } from "react-router-dom";

import NewQuotes from "./pages/AllQuotes";
import AllQuotes from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quote/:quotesId">
            <QuoteDetail />
          </Route>
          <Route path="/new-quote">
            <NewQuotes />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
