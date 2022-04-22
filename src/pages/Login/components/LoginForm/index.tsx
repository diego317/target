import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import TextField from 'components/TextField';
import { LoginFields } from 'types/forms';
import styles from './styles.module.scss';

function LoginForm({ onSubmit, error }: LoginFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFields>();
  const { t } = useTranslation(['login', 'errors']);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.loginFormContainer}>
      <TextField
        register={register}
        validations={{ required: t('errors:validators.required') }}
        name="email"
        type="email"
        title={t('login:fields.email.title')}
        className="m-bottom-2"
        error={errors.email}
      />
      <TextField
        register={register}
        validations={{ required: t('errors:validators.required') }}
        name="password"
        type="password"
        title={t('login:fields.password.title')}
        className="m-bottom-2"
        error={errors.password}
      />
      <button type="submit" className="button">{t('login:buttons.signIn')}</button>
      <p className="text-error italic center">{error}</p>
    </form>
  )
}

export interface LoginFormProps {
  onSubmit: SubmitHandler<LoginFields>;
  error?: string;
}

export default LoginForm;
