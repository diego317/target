import { SelectHTMLAttributes } from "react";
import { FieldError, Path, RegisterOptions, UseFormRegister } from "react-hook-form";
import clsx from "clsx";

import styles from './styles.module.scss';

function SimpleSelect<IFormValues>({ 
  name, 
  title, 
  options,
  register,
  validations,
  className = "",
  placeholder = "",
  error
}: SimpleSelectProps<IFormValues>) {
  return (
    <div className={clsx(styles.simpleSelectContainer, "column", className)}>
      <label 
        htmlFor={name} 
        className="text-normal center m-bottom-1"
      >
        {title}
      </label>
      <select id={name} {...register(name, validations)} className={styles.input} defaultValue="">
        <option value="" disabled hidden>{placeholder}</option>
        {
          options.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))
        }
      </select>
      <p className="text-error italic">{error?.message}</p>
    </div>
  )
}

export interface SimpleSelectProps<IFormValues> extends SelectHTMLAttributes<HTMLSelectElement> {
  name: Path<IFormValues>;
  title: string;
  register: UseFormRegister<IFormValues>;
  validations?: RegisterOptions;
  options: { value: string, label: string }[];
  placeholder?: string;
  className?: string;
  error?: FieldError;
}

export default SimpleSelect;
