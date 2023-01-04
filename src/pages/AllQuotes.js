import React, { useEffect } from "react";

import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

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


  return <QuoteList quotes={Home_Quotes} />
};

export default AllQuotes;
