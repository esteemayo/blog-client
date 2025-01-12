import Feed from '../feed/Feed';
import { feedItems } from '../../data';

import './Feeds.scss';

const Feeds = () => {
  return (
    <section className='feeds'>
      <div className='feeds__container'>
        <h2 className='feeds__container-heading'>Feeds</h2>
        {feedItems.map((feed) => {
          return <Feed key={feed.id} {...feed} />;
        })}
      </div>
    </section>
  );
};

export default Feeds;
