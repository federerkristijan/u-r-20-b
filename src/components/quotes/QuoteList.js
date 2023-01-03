import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  console.log(location);

  // browser's built-in constructor function - vanilla JS style
  const queryParams = new URLSearchParams(location.search);

  // no need for 'desc' const, as 'asc' const false serves its purpose
  const isSortingAscending = queryParams.get('sort') === 'asc';


  const changeSortingHandler = () => {
    // 'push' makes a new one & keeps the old, 'replace' makes a new one
    history.push('/quotes?sort=' + (isSortingAscending ? 'desc' : 'asc'))
  }

  return (
    <Fragment>
      <div className={classes.sorting}>
        {/* dynamically changing the button text */}
        <button onClick={changeSortingHandler}>Sort {isSortingAscending ? 'Desceding' : 'Ascending'}</button>
      </div>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
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
