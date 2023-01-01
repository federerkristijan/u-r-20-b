import React from 'react'
import { useParams, Route } from 'react-router-dom'

import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
  const params = useParams();

  return (
    <div>
      <h1>Qoute Detail</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`} >
        <Comments />
      </Route>
    </div>
  )
}

export default QuoteDetail
