import { useEffect, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import clsx from 'clsx';

import { login } from 'state/actions/userActions';
import LoginForm from './components/LoginForm';
import Spinner from 'components/Spinner';
import { useAppDispatch } from 'hooks/redux';
import useStatus from 'hooks/useStatus';
import routesPaths from 'constants/routesPaths';
import { FULFILLED, PENDING } from 'constants/actionStatus';
import { LoginFields } from 'types/forms';
import { smiles } from 'assets/images';
import styles from './styles.module.scss';

function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { status, error } = useStatus(login);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation('login');

  const handleSubmit: SubmitHandler<LoginFields> = (data: LoginFields) => {
    dispatch(login(data))
  }

  useEffect(() => {
    if (status === FULFILLED) {
      navigate(routesPaths.home);
    }
    setLoading(status === PENDING);
  }, [navigate, status])

  return (
    <div className={clsx("column center middle", styles.loginContainer)}>
      <img src={smiles} alt="two smiles faces" className="m-bottom-3" />
      <h1 className={"title-big bold m-bottom-3"}>{t('title')}</h1>
      <article className="column center m-bottom-10">
        <h2 className={clsx(styles.subtitle, "title-normal medium ")}>{t('subtitle')}</h2>
        <p className={clsx(styles.body, "text-big")}>{t('body')}</p>
      </article>
      <LoginForm onSubmit={handleSubmit} error={error?.message}/>
      <Link 
        to={routesPaths.landing} 
        className={clsx("m-bottom-11", styles.forgotLink)}
      >
        {t('links.forgotPassword')}
      </Link>
      <div className="title-small bold">{t('links.facebook')}</div>
      <hr className="hr"/>
      <Link to={routesPaths.signUp} className="text-normal medium">{t('links.signUp')}</Link>
      {loading && <Spinner />}
    </div>
  )
}

export default Login;
