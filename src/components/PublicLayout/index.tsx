import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import clsx from 'clsx';

import { i6, appStore, play } from 'assets/images';
import { facebook, twitter } from 'assets/logos';
import styles from './styles.module.scss';

function PublicLayout() {
  const { t } = useTranslation();
  const [open, setOpen] = useState<boolean>(false);

  const handleMenu = () => {
    setOpen(prevState => !prevState);
  }

  return (
    <div className={styles.publicLayoutContainer}>
      <nav className={styles.nav}>
        <button className={styles.button} onClick={handleMenu} arial-label="menu"> 
          <span className={clsx(styles.buttonIcon, { [styles.open]: open })}/>
        </button>
        <div className={clsx(styles.menu, { [styles.show]: open})}>
          <p className={clsx("text-big bold", styles.text)}>{t('about')}</p>
          <p className={clsx("text-big", styles.text)}>{t('contact')}</p>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
      <aside className={styles.aside}>
        <div className={styles.imageContainer}>
          <img src={i6} alt="iphone 6"/>
          <img src={appStore} className="m-bottom-2" alt="apple app store"/>
          <img src={facebook} alt="facebook logo"/>
          <img src={twitter} alt="twitter logo"/>
          <img src={play} alt="play button"/>
        </div>
      </aside>
    </div>
  )
}

export default PublicLayout;
