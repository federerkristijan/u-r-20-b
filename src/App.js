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
          <Route href="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route href="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route href="/quote/:quotesId">
            <QuoteDetail />
          </Route>
          <Route href="/new-quote">
            <NewQuotes />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
