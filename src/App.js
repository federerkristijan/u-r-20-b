import { Route } from "react-router-dom";

import NewQuotes from "./components/comments/NewCommentForm";
import AllQuotes from "./components/comments/Comments";
import QuoteDetail from "./components/comments/Comments";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
          <Route href="/quote-detail" element={<QuoteDetail />} />
          <Route href="/new-quote" element={<NewQuotes />} />
          <Route href="/all-quotes" element={<AllQuotes />} />
      </main>
    </div>
  );
}

export default App;
