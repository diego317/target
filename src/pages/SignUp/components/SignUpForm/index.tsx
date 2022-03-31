import { useTranslation } from 'react-i18next';
import { SubmitHandler, useForm } from 'react-hook-form';
import clsx from 'clsx';

import TextField from 'components/TextField';
import SimpleSelect from 'components/SimpleSelect';
import { SignUpFields } from 'types/forms';
import { genderOptions } from 'pages/SignUp/constants';
import { emailPattern, minLengthPassword } from 'constants/formValidations';
import styles from './styles.module.scss';                           

function SignUpForm({ onSubmit, error }: SignUpFormProps) {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<SignUpFields>();
  const { t } = useTranslation(['signUp', 'errors']);

  const password = watch('password');

  return (
    <form className={clsx(styles.signUpForm, "m-bottom-6")} onSubmit={handleSubmit(onSubmit)}>
      <h1 className={clsx(styles.header, "title-big center bold m-bottom-7")}>{t('signUp:title')}</h1>
      <TextField 
        register={register}
        validations={{ required: t('errors:validators.required') }}
        name="username"
        title={t('signUp:fields.name.title')} 
        className="m-bottom-2"
        error={errors.username}
      />
      <TextField 
        register={register}
        validations={{ 
          required: t('errors:validators.required'),
          pattern: { value: emailPattern, message: t('errors:validators.email') }
        }}
        name="email"
        type="email"
        title={t('signUp:fields.email.title')} 
        className="m-bottom-2"
        error={errors.email}
      />
      <TextField 
        register={register}
        validations={{ 
          required: t('errors:validators.required'),
          minLength: {
            value: minLengthPassword,
            message: t('errors:validators.minLength', { number: minLengthPassword})
          }
        }}
        name="password"
        type="password"
        title={t('signUp:fields.password.title')}
        placeholder={t('signUp:fields.password.placeholder')}
        className="m-bottom-2"
        error={errors.password}
      />
      <TextField 
        register={register}
        validations={{ 
          required: t('errors:validators.required'),
          validate: (value) => password === value || t('errors:validators.passwordConfirmation')
        }}
        name="confirmPassword"
        type="password"
        title={t('signUp:fields.confirmPassword.title')} 
        className="m-bottom-2"
        error={errors.confirmPassword}
      />
      <SimpleSelect 
        register={register}
        validations={{ required: t('errors:validators.required') }}
        name="gender"
        title={t('signUp:fields.gender.title')}
        options={genderOptions} 
        className="m-bottom-7"
        placeholder={t('signUp:fields.gender.placeholder')}
        error={errors.gender}
      />
      <button className="button">{t('signUp:button.signUp')}</button>
      <p className="text-error italic center">{error}</p>
    </form>
  )
}

export interface SignUpFormProps {
  onSubmit: SubmitHandler<SignUpFields>;
  error?: string;
}

export default SignUpForm;
