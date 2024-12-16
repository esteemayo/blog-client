import './RelatedTags.scss';

const RelatedTags = () => {
  return (
    <section className='relatedTags'>
      <h3 className='relatedTags__heading'>Related tags</h3>
      <div className='relatedTags__container'>
        <span className='relatedTags__container--item'>Travel</span>
        <span className='relatedTags__container--item'>Lifestyle</span>
        <span className='relatedTags__container--item'>Photo</span>
        <span className='relatedTags__container--item'>Adventures</span>
        <span className='relatedTags__container--item'>Musician</span>
        <span className='relatedTags__container--item'>Food</span>
      </div>
    </section>
  );
};

export default RelatedTags;
