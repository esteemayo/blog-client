import PostLists from '../../components/postList/PostList';

import { postItems } from '../../data';

import './DislikedPosts.scss';

const DislikedPosts = () => {
  return (
    <div className='dislikedPosts'>
      <div className='dislikedPosts__container'>
        <div className='dislikedPosts__header'>
          <h1 className='dislikedPosts__header--heading'>
            Least favorite posts
          </h1>
          <span className='dislikedPosts__header--text'>
            My least liked stories/articles
          </span>
        </div>
        <PostLists posts={postItems} />
      </div>
    </div>
  );
};

export default DislikedPosts;
