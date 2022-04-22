import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

import TextField from 'components/TextField';
import { ContactFields } from 'types/forms';
import { emailPattern } from 'constants/formValidations';
import { smiles } from 'assets/images';
import styles from './styles.module.scss';

function ContactForm({ loading = false, onSubmit }: ContactFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFields>();
  const { t } = useTranslation(['common', 'errors']);

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className={clsx("column m-bottom-9", styles.contactFormContainer)}
    >
      <img src={smiles} alt="two smiles faces" className="m-bottom-2 self-center"/>
      <h2 className="title-normal medium  center m-bottom-5">
        {t('common:modals.contact.title.form')}
      </h2>
      <TextField
        register={register}
        validations={{ 
          required: t('errors:validators.required'),
          pattern: { value: emailPattern, message: t('errors:validators.email') }
        }}
        name="email"
        type="email"
        title={t('common:modals.contact.fields.email.title')}
        error={errors.email}
        classNameLabel="medium"
        disabled={loading}
      />
      <TextField
        register={register}
        validations={{ required: t('errors:validators.required') }}
        name="body"
        title={t('common:modals.contact.fields.message.title')}
        error={errors.body}
        tag="textarea"
        className={"m-bottom-7"}
        classNameLabel="medium"
        classNameInput={styles.textarea}
        disabled={loading}
      />
      <button 
        type="submit" 
        className={clsx("button self-center", styles.button)}
        disabled={loading}
      >
        {t('common:modals.contact.button.send')}
      </button>
    </form>
  )
}

export interface ContactFormProps {
  onSubmit: SubmitHandler<ContactFields>;
  loading?: boolean;
}

export default ContactForm;
