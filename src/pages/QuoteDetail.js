import React from 'react'
import { useParams, Route } from 'react-router-dom'

import Comments from "../components/comments/Comments";
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import { Home_Quotes } from './AllQuotes';

const QuoteDetail = () => {
  const params = useParams();

  const quote = Home_Quotes.find(quote => quote.id === params.quoteId);

  return (
    <div>
      <HighlightedQuote text={quote.text} author={quote.author}/>
      <Route path={`/quotes/${params.quoteId}/comments`} >
        <Comments />
      </Route>
    </div>
  )
}

export default QuoteDetail
