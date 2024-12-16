import CommentForm from '../commentForm/CommentForm';

import './Comments.scss';

const Comments = () => {
  return (
    <section className='comments'>
      <h3 className='comments__heading'>Comments</h3>
      <div className='comments__container'>
        <CommentForm />
      </div>
    </section>
  );
};

export default Comments;
