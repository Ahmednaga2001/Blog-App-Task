'use client'
import { useEffect } from 'react';

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='container mx-auto mt-[150px] flex flex-col items-center'>
      <h2 className='text-red-900 text-2xl font-bold mb-4'>Something went wrong!</h2>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
};

export default Error;
