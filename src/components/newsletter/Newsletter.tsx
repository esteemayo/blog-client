import Input from '../input/Input';
import Button from '../button/Button';

import './Newsletter.scss';

const Newsletter = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <aside className='newsletter'>
      <div className='newsletter__container'>
        <h3 className='newsletter__container--heading'>Our newsletters</h3>
        <p className='newsletter__container--paragraph'>
          Subscribe to our newsletter to get the latest updates directly to your
          inbox.
        </p>
        <form onSubmit={handleSubmit} className='newsletter__wrapper'>
          <Input type='email' name='email' placeholder='Email address' />
          <div className='newsletter__wrapper--btn'>
            <Button type='submit' label='Submit' className='dark' />
          </div>
        </form>
      </div>
    </aside>
  );
};

export default Newsletter;
