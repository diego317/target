import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import clsx from 'clsx';

import ContactModal from '../ContactModal';
import routesPaths from 'constants/routesPaths';
import styles from './styles.module.scss';

function Menu() {
  const timerId = useRef<NodeJS.Timeout | null>(null);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState(false);
  const { t } = useTranslation();

  const handleMenu = () => setOpenMenu(prevState => !prevState);
  
  const handleBlur = () =>  {    
    timerId.current = setTimeout(() => setOpenMenu(false)); 
   }

   const handleFocus = () => {
     if (timerId.current) {
       clearTimeout(timerId.current);
     }
   }

   const handleModal = () => setOpenModal(prevState => !prevState)

  return (
    <div className={styles.menuContainer} onBlur={handleBlur} onFocus={handleFocus}>
      <button 
        className={styles.menuButton} 
        onClick={handleMenu} 
        arial-label="menu" 
        aria-haspopup="true"
        aria-expanded={openMenu}
      > 
        <span className={clsx(styles.buttonIcon, { [styles.open]: openMenu })}/>
      </button>
      <ul className={clsx(styles.list, { [styles.show]: openMenu})}>
        <li>
          <Link to={routesPaths.about} className={clsx("text-big bold", styles.link)}> 
            {t('about')}
          </Link> 
        </li>
        <li >
          <button 
            className={clsx("text-big", styles.button)} 
            onClick={handleModal}
            >
              {t('contact')}
            </button>
        </li>
      </ul>
      <ContactModal open={openModal} onClose={handleModal}/>
    </div>
  )
}

export default Menu;
