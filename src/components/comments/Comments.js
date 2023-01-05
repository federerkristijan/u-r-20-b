import { useState } from 'react';
import { useParams } from 'react-router-dom';

import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();
  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addedCommentHanlder = () => {

  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteId={params.quoteId} onAddedComment={addedCommentHanlder} />}
      <p>Comments...</p>
    </section>
  );
};

export default Comments;
