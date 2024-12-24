import { PostMenuButtonProps } from '../../types';

import './PostMenuButton.scss';

const PostMenuButton = ({ isOpen, onClick }: PostMenuButtonProps) => {
  return (
    <button type='button' className='postMenuButton' onClick={onClick}>
      <span>Filter</span>
      {isOpen ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          className='size-6'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M6 18 18 6M6 6l12 12'
          />
        </svg>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          className='size-5'
        >
          <path
            fillRule='evenodd'
            d='M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75Zm7 10.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Z'
            clipRule='evenodd'
          />
        </svg>
      )}
    </button>
  );
};

export default PostMenuButton;