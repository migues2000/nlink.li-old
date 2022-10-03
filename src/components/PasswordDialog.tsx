import { useState } from 'react';
import { LockClosedIcon } from '@heroicons/react/24/outline';
import { default as useShortener } from '@hooks/useShortener';

const PasswordDialog = () => {
  const [password, setPassword] = useState('');
  const { addPassword, removePassword } = useShortener();

  return (
    <>
      <input type='checkbox' id='add-password-modal' className='modal-toggle' />
      <div className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box md:w-96'>
          <h3 className='text-lg font-bold'>Add a Password</h3>
          <div className='py-4'>
            <div className='relative w-full form-control'>
              <div className='absolute top-0 bottom-0 w-5 h-5 my-auto left-4'>
                <LockClosedIcon className='w-5 h-5 text-base-500' />
              </div>
              <input
                type='password'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className='input input-bordered pl-11'
              />
            </div>
          </div>
          <div className='modal-action'>
            <label
              htmlFor='add-password-modal'
              className='btn btn-ghost'
              onClick={() => (removePassword(), setPassword(''))}
            >
              Cancel
            </label>
            <label
              htmlFor='add-password-modal'
              className='btn btn-primary'
              onClick={() => (addPassword(password), setPassword(''))}
            >
              Set Password
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordDialog;
