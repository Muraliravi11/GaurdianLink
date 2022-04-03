import React, { useState } from 'react';
import { useWindowSize } from 'components/utils/useWindowSize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong} from '@fortawesome/free-solid-svg-icons';

export const FormInput = ({ className, subscribeBtn }) => { 
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);

    const { width } = useWindowSize();

    const isMobile = width <= 1024;

    function handleChange(e) { 
        const { value } = e.target;
        setEmail(value);
    }
    function handleOnsubmit(e) { 
        e.preventDefault();
        let reg = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

        if (!(reg.test(email)) ) {
            setError(true)
        }
        else { 
            alert('Success')
            setEmail('')
            setError(false)
        }
    }
    return (
        <div >
            <form className={ `one-line-form ${ className}`} onSubmit={handleOnsubmit }>
                <div className='form-control'>
                    <input type='text' name='email' placeholder='name@domain.com' value={email} onChange={handleChange}/>
                </div>
                <button type='submit' className={`${ subscribeBtn && !isMobile ? 'subscribe' : ''}`}>
                    {subscribeBtn   && !isMobile && <span>Subscribe</span>} <span className='arrow_icon'><FontAwesomeIcon icon={faRightLong} /></span>
                </button>
            </form>
            {error && <p className='error-msg'>Please enter a valid email address</p>}
        </div>
    )
}