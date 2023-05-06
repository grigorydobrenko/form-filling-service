import {forwardRef} from 'react';

import cn from 'classnames';

import styles from './Input.module.scss';
import {InputProps} from './Input.props';

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

          {...restProps}
        />
        {error && <span className={styles.error}>{error}</span>}
      </div>
    );
  },
);
