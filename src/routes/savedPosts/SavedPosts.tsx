import PostLists from '../../components/postList/PostList';

import { postItems } from '../../data';

import './SavedPosts.scss';

const SavedPosts = () => {
  return (
    <div className='savedPosts'>
      <div className='savedPosts__container'>
        <div className='savedPosts__header'>
          <h1 className='savedPosts__header--heading'>Saved posts</h1>
          <span className='savedPosts__header--text'>
            My saved stories/articles
          </span>
        </div>
        <PostLists posts={postItems} />
      </div>
    </div>
  );
};

export default SavedPosts;
