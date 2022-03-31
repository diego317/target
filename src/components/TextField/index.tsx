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
  type = "text",
  placeholder = "",
  error
}: TextFieldProps<IFormValues>) {
  return (
    <div className={clsx(styles.textFieldContainer, "column", className)}>
      <label 
        htmlFor={name} 
        className="text-normal center m-bottom-1"
      >
        {title}
      </label>
      <input 
        id={name} 
        {...register(name, validations)}
        className={styles.input} 
        type={type}
        placeholder={placeholder}
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
  error?: FieldError;
}

export default TextField;
