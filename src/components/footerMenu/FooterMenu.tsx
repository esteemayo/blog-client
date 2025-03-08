import FooterMenuItem from '../footerMenuItem/FooterMenuItem';

import { footerMenuItems } from '../../data';

import './FooterMenu.scss';

const FooterMenu = () => {
  return (
    <ul className='footer-menu'>
      {footerMenuItems.map((item) => {
        return <FooterMenuItem key={item.id} {...item} />;
      })}
    </ul>
  );
};

export default FooterMenu;
