import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { smiles } from 'assets/images';
import routesPaths from 'constants/routesPaths';
import styles from './styles.module.scss';

function About() {
  const { t } = useTranslation('about');

  return (
    <div className={clsx("column center middle", styles.aboutContainer)}>
      <img src={smiles} alt="two smiles faces" className="m-bottom-6" />
      <h1 className={clsx("title-normal medium m-bottom-5", styles.title)}>
        {t('title')}
      </h1>
      <p className={clsx("text-big m-bottom-15", styles.body)}>{t('body')}</p>
      <Link 
        to={routesPaths.login} 
        className={clsx("text-normal column center middle", styles.buttonLink)}
      >
        {t('buttons.login')}
      </Link>
    </div>
    )
}

export default About;
