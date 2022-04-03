import React from 'react';
import Clamp from 'react-multiline-clamp';

export const CroppedContent = ( ( { desc, isElipsisOnly = false, lines = 3, maxLines = 50 } ) => {
  function handleShowMore( { toggle } ){
    return (
      <span  className='read-or-hide' onClick={ toggle } onKeyPress={ toggle }>(Reade More...)</span>
    );
  }

  function handleShowLess( { toggle } ){
    return (
      <span className='read-or-hide' onClick={ toggle } onKeyPress={ toggle } >(Show Less)</span>
    );
  }

  return (
    <div className='cropped-content'>
      <Clamp
        showMoreElement={ handleShowMore }
        showLessElement={ handleShowLess }
        lines={ lines }
        maxLines={ maxLines }
        withToggle={ !isElipsisOnly }
        withTooltip={ false }
      >
        <p dangerouslySetInnerHTML={{ __html: desc }}></p>
      </Clamp>
    </div>
  );
} );