import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';
import clsx from 'clsx';

import { signUp } from 'state/actions/userActions';
import Spinner from 'components/Spinner';
import SignUpForm from './components/SignUpForm';
import { useAppDispatch } from 'hooks/redux';
import useStatus from 'hooks/useStatus';
import routesPaths from 'constants/routesPaths';
import { FULFILLED, PENDING } from 'constants/actionStatus';
import { SignUpFields } from 'types/forms';
import styles from './styles.module.scss';

function SignUp() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation('signUp');

  const { status, error } = useStatus(signUp);

  const handleSubmit: SubmitHandler<SignUpFields> = (data) => {
    dispatch(signUp(data));
  }

  useEffect(() => {
    if (status === FULFILLED) {
      navigate(`/${routesPaths.login}`);
    }
    setLoading(status === PENDING);
  }, [navigate, status])

  return (
    <div className={clsx("column center middle", styles.signUpContainer)} >
      <SignUpForm onSubmit={handleSubmit} error={error?.message}/>
      <hr className="hr"/>
      <Link to={`/${routesPaths.login}`} className="text-normal medium">{t('link.login')}</Link>
      {loading && <Spinner />}
    </div>
  )
}

export default SignUp;
