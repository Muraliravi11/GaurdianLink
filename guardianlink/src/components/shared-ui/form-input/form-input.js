import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong} from '@fortawesome/free-solid-svg-icons';

export const FormInput = ({ className }) => { 
    const [email, setEmail] = useState();
    const [error, setError]= useState(false)

    function handleChange(e) { 
        const { value } = e.target;
        setEmail(value);
    }
    function handleOnsubmit(e) { 
        e.preventDefault();
        const regex = `/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i`;
        if (!email || (regex.test(email)) ) {
            setError(true)
        }
        else { 
            alert()
            setEmail('')
            setError(false)
        }
    }
    return (
        <div >
            <form className={ `one-line-form ${ className}`} onSubmit={handleOnsubmit }>
                <div className='form-control'>
                    <input type='text' name='email' placeholder='name@domain.com' onChange={handleChange}/>
                </div>
                <button type='submit'><FontAwesomeIcon icon={faRightLong}/></button>
            </form>
            {error && <p className='error-msg'>Please enter a valid email address</p>}
        </div>
    )
}