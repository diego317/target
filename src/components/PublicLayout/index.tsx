import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';

import { i6, appStore, play } from 'assets/images';
import { facebook, twitter } from 'assets/logos';
import Menu from './components/Menu';
import styles from './styles.module.scss';

function PublicLayout() {
  const { t } = useTranslation();

  return (
    <div className={styles.publicLayoutContainer}>
      <nav className={styles.nav}>
        <Menu />
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
