import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { LockClosedIcon } from '@heroicons/react/24/outline';
import { default as useShortener } from '@hooks/useShortener';

type PasswordDialogProps = { isOpen: boolean; onClose: () => void };

const PasswordDialog = ({ isOpen, onClose }: PasswordDialogProps) => {
  const [password, setPassword] = useState('');
  const { addPassword, removePassword } = useShortener();
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>
        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex items-center justify-center min-h-full p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white rounded-lg shadow-xl w-80'>
                <Dialog.Title
                  as='h3'
                  className='text-lg font-medium leading-6 text-center text-gray-900'
                >
                  Add a Password
                </Dialog.Title>
                <div className='mt-4'>
                  <div className='relative w-full'>
                    <div className='absolute top-0 bottom-0 w-5 h-5 my-auto left-3'>
                      <LockClosedIcon className='w-5 h-5 text-base-500' />
                    </div>
                    <input
                      type='password'
                      autoComplete='new-password'
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      className='w-full py-2 pl-10 pr-2 transition-colors border rounded-lg bg-base-50 border-base-200 focus:outline-none focus:border-primary-300'
                    />
                  </div>
                </div>
                <div className='flex mt-4 space-x-2'>
                  <button
                    type='button'
                    className='inline-flex justify-center w-full px-4 py-2 text-sm font-medium border border-transparent rounded-md hover:bg-base-100 focus:outline-none'
                    onClick={() => (
                      removePassword(), setPassword(''), onClose()
                    )}
                  >
                    Cancel
                  </button>
                  <button
                    type='button'
                    className='inline-flex justify-center w-full px-4 py-2 text-sm font-medium border border-transparent rounded-md text-primary-900 bg-primary-100 hover:bg-primary-200 focus:outline-none'
                    onClick={() => (
                      addPassword(password), setPassword(''), onClose()
                    )}
                  >
                    Set password
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default PasswordDialog;
