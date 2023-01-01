import { Route, Switch } from "react-router-dom";

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
          <Route href="/quote/:quotesID" element={<QuoteDetail />} />
          <Route href="/new-quote" element={<NewQuotes />} />
          <Route href="/all-quotes" element={<AllQuotes />} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
