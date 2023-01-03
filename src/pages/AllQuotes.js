import QuoteList from "../components/quotes/QuoteList";

const Home_Quotes = [
  {
    id: "q1",
    author: "Kiki",
    text: "Learning React could be fun",
  },
  {
    id: "q2",
    author: "Kuku",
    text: "Hoomans are again suck with their machines",
  },
  {
    id: "q3",
    author: "Kuku",
    text: "I'm bored...I hate my life!",
  },
  {
    id: "q4",
    author: "Hadas",
    text: "I'm tired...can I nap now?",
  },
];

const AllQuotes = () => {
  return <QuoteList quotes={Home_Quotes} />
};

export default AllQuotes;
