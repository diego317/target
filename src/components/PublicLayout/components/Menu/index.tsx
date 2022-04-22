import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import clsx from 'clsx';

import routesPaths from 'constants/routesPaths';
import styles from './styles.module.scss';

function Menu() {
  const [open, setOpen] = useState<boolean>(false);
  const timerId = useRef<NodeJS.Timeout | null>(null);
  const { t } = useTranslation();

  const handleMenu = () => {
    setOpen(prevState => !prevState);
  }

  const handleBlur = () =>  {    
    timerId.current = setTimeout(() => setOpen(false)); 
   }

   const handleFocus = () => {
     if (timerId.current) {
       clearTimeout(timerId.current);
     }
   }

  return (
    <div className={styles.menuContainer} onBlur={handleBlur} onFocus={handleFocus}>
      <button 
        className={styles.menuButton} 
        onClick={handleMenu} 
        arial-label="menu" 
        aria-haspopup="true"
        aria-expanded={open}
      > 
        <span className={clsx(styles.buttonIcon, { [styles.open]: open })}/>
      </button>
      <ul className={clsx(styles.list, { [styles.show]: open})}>
        <li>
          <Link to={routesPaths.about} className={clsx("text-big bold", styles.link)}> 
            {t('about')}
          </Link> 
        </li>
        <li >
          <button className={clsx("text-big", styles.button)}>{t('contact')}</button>
        </li>
      </ul>
    </div>
  )
}

export default Menu;
