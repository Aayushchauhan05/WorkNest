import React from 'react';

function VerifyIdentity() {
  return (

<div class="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
  <div class="max-w-md w-full space-y-6 p-8 bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <div class="text-center">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">Enter Your OTP</h1>
      <p class="mt-2 text-gray-600 dark:text-gray-400">Please enter the one-time password sent to your device.</p>
    </div>
    <form class="space-y-6">
      <div>
        <label for="otp" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
          One-Time Password
        </label>
        <div class="mt-1">
          <input
            id="otp"
            maxlength="6"
            pattern="[0-9]*"
            required=""
            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-400"
            type="text"
            name="otp"
          />
        </div>
      </div>
      <div>

        <button type="submit" className='flex items-center justify-center text-white bg-black w-96 h-9'>Verify otp</button>
      </div>
    </form>
  </div>
</div>
  );
}

export default VerifyIdentity;
