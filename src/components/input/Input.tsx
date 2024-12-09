import ErrorMessage from '../errorMessage/ErrorMessage';

import { InputProps } from '../../types';

import './Input.scss';

const Input = ({ name, type = 'text', label, error, ...rest }: InputProps) => {
  return (
    <div className='input'>
      <label htmlFor={name} className='input__label'>
        {label}
      </label>
      <input
        {...rest}
        id={name}
        name={name}
        type={type}
        className='input__control'
      />
      {error && <ErrorMessage message={error} />}
    </div>
  );
};

export default Input;