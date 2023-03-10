import React, { useEffect } from "react";

import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from '../components/quotes/NoQuotesFound'

// export const Home_Quotes = [
//   {
//     id: "q1",
//     author: "Kiki",
//     text: "Learning React could be fun",
//   },
//   {
//     id: "q2",
//     author: "Kuku",
//     text: "Hoomans are again stuck with their machines",
//   },
//   {
//     id: "q3",
//     author: "Kuku",
//     text: "I'm bored...I hate my life!",
//   },
//   {
//     id: "q4",
//     author: "Hadas",
//     text: "I'm tired...can I nap now?",
//   },
// ];

const AllQuotes = () => {
  // true - starts in the loading state
  const { sendRequest, status, data: loadedQuotes, error } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest])

  if (status === 'pending') {
    return <div className="centered">
      <LoadingSpinner />
    </div>
  }

  if (error) {
    return <p centered focused>
      {error}
    </p>
  }

  if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />
  }


  return <QuoteList quotes={loadedQuotes} />
};

export default AllQuotes;
