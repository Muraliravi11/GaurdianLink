import React from 'react';
import { string } from 'prop-types';
import './index.scss';

export const Image = ( { src, alt = '', className = '', ...otherProps } ) => {
  return (
    <img className={ className } src={ src } alt={ alt } { ...otherProps} />
  );
};

Image.propTypes = {
  src: string,
  alt: string,
  className: string,
};