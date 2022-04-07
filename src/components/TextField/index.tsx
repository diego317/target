import { InputHTMLAttributes } from 'react';
import { FieldError, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';
import clsx from 'clsx';

import styles from './styles.module.scss';

function TextField<IFormValues>({ 
  name, 
  title, 
  register,
  validations = {},
  className = "",
  classNameLabel = "",
  classNameInput = "",
  type = "text",
  placeholder = "",
  error,
  tag,
  disabled
}: TextFieldProps<IFormValues>) {
  const InputComponent = tag === 'textarea' ? 'textarea' : 'input'

  return (
    <div className={clsx(styles.textFieldContainer, "column", className)}>
      <label 
        htmlFor={name} 
        className={clsx("text-normal center m-bottom-1", classNameLabel)}
      >
        {title}
      </label>
      <InputComponent 
        id={name} 
        {...register(name, validations)}
        className={clsx(styles.input, classNameInput, { [styles.error]: error?.message })} 
        type={type}
        placeholder={placeholder}
        disabled={disabled}
      />
      <p className="text-error italic">{error?.message}</p>
    </div>
  )
}

export interface TextFieldProps<IFormValues> extends InputHTMLAttributes<HTMLInputElement> {
  name: Path<IFormValues>;
  title: string;
  register: UseFormRegister<IFormValues>;
  validations?: RegisterOptions;
  className?: string;
  classNameInput?: string;
  classNameLabel?: string;
  error?: FieldError;
  tag?: 'textarea' | 'input'
}

export default TextField;
