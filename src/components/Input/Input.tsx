import {forwardRef, useState} from 'react';

import cn from 'classnames';

import styles from './Input.module.scss';
import {InputProps} from './Input.props';
import {ReactComponent as Logo} from "../../assets/remove_photo.svg";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (props, ref): JSX.Element => {
    const {
      className,
      classNameWrapper,
      variant = 'primary',
      type = 'text',
      error,
        value,
        closeButton,
      ...restProps
    } = props;

    const [currentValue, setCurrentValue] = useState(value)

    return (
      <div className={cn(styles.wrapper, classNameWrapper, {[styles.relative] : closeButton})}>
        <input
          className={cn(
            styles.input,
            {
              [styles.input_error]: error,
            },
            className,
          )}
          ref={ref}
          type={type}
          onChange={(event) => {setCurrentValue(event.currentTarget.value)}}
          value={currentValue}
          {...restProps}
        />
          {closeButton && <div className={styles.logo_container} onClick={() => setCurrentValue('')}><Logo/></div>}
        {error && <span className={styles.error}>{error}</span>}
      </div>
    );
  },
);
