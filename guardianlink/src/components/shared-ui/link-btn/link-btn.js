import React from 'react';
import { bool, string, node, oneOfType } from 'prop-types';

export const LinkBtn = ( { className, children,  href, ...rest } ) => {

  return ( <a className={ className } href={ href } { ...rest }>
      { children }
    </a> ) 
};

LinkBtn.propTypes = {
  className: string,
  children: node.isRequired,
  href: oneOfType( [bool, string] ),
};



export default LinkBtn;
