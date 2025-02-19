import { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { useLogout } from '../../hooks/useLogout';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

import { menuItems } from '../../data';
import { onClose } from '../../features/sidebar/sidebarSlice';

import './Sidebar.scss';

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector((state) => ({ ...state.sidebar }));

  const { handleLogout } = useLogout(isOpen, onClose);

  const user = true;

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(onClose());
  };

  const onCloseHandler = () => {
    dispatch(onClose());
  };

  const sidebarClasses = useMemo(() => {
    return isOpen ? 'sidebar show' : 'sidebar hide';
  }, [isOpen]);

  return (
    <aside className={sidebarClasses}>
      <div className='sidebar__container'>
        <div className='sidebar__wrapper'>
          <div className='sidebar__logo'>
            <Link to='/'>Fusion hub</Link>
          </div>
          <button className='sidebar__closeBtn' onClick={handleClose}>
            <span>Menu</span>
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
          </button>
        </div>
        <div className='sidebar__box'>
          <ul className='sidebar__menu'>
            {menuItems.map((menu) => {
              const { id, url, label } = menu;
              return (
                <li
                  key={id}
                  className='sidebar__menu--item'
                  onClick={onCloseHandler}
                >
                  <Link to={url}>{label}</Link>
                </li>
              );
            })}
          </ul>
          <div className='sidebar__accountWrap'>
            {user && (
              <div className='sidebar__accounts'>
                <Link
                  to='/accounts/profile'
                  className='sidebar__account'
                  onClick={onCloseHandler}
                >
                  <img
                    src='/user-default.jpg'
                    width={70}
                    height={70}
                    alt='avatar'
                    className='sidebar__account--avatar'
                  />
                  <span className='sidebar__account--name'>Elise beverley</span>
                </Link>
                <button
                  type='button'
                  className='sidebar__logoutBtn'
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
            {!user && (
              <Link
                to='/login'
                className='sidebar__login'
                onClick={onCloseHandler}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
