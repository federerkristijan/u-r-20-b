import { Fragment } from 'react';
// location has a pathname!
import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  // useLocation for a certain loaded path, useRouteMatch for all paths
  const location = useLocation();

  console.log(location);

  // browser's built-in constructor function - vanilla JS style
  const queryParams = new URLSearchParams(location.search);

  // no need for 'desc' const, as 'asc' const false serves its purpose
  const isSortingAscending = queryParams.get('sort') === 'asc';

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  const changeSortingHandler = () => {
    // 'push' makes a new one & keeps the old, 'replace' makes a new one
    // v.1
    // history.push(`${location.pathname}?sort=${(isSortingAscending ? 'desc' : 'asc')}`);

    // v.2
    history.push({
      pathname: location.pathname,
      search: `?sort=${(isSortingAscending ? 'desc' : 'asc')}`
    })
  }

  return (
    <Fragment>
      <div className={classes.sorting}>
        {/* dynamically changing the button text */}
        <button onClick={changeSortingHandler}>Sort {isSortingAscending ? 'Desceding' : 'Ascending'}</button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
