import './LikedPosts.scss';

const LikedPosts = () => {
  return (
    <div className='likedPosts'>
      <div className='likedPosts__container'>
        <div className='likedPosts__header'>
          <h1 className='likedPosts__header--heading'>Favorite posts</h1>
          <span className='likedPosts__header--text'>
            My favorite stories/articles
          </span>
        </div>
      </div>
    </div>
  );
};

export default LikedPosts;
