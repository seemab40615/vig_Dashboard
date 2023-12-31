import React, { useState } from 'react';
import { Error } from '../../icons-svgs/Svgs';
import { useNavigate } from 'react-router-dom';

export default function EmailForm() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!e.target.value.trim()) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const navigate = useNavigate();
  const state = { state: false };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (!emailRegex.test(email) || !email.trim()) {
      setEmailError(true);
    } else {
      setEmailError(false);
      navigate('/password', { state: state });
    }
  };

  return (
    <div className="flex justify-center items-center w-[100%]">
      <div className="flex flex-col lg:w-[25.5em] sm:w-[25.5em]w-[80%] gap-3">
        <form onSubmit={handleSubmit} className="gap-3 flex flex-col">
          <div className="flex flex-col">
            <label className="text-[#FF993C] ps-4 pb-1">Enter your email address:</label>
            <input
              className={`bg-[#ff9a3c2d] border border-[#ff9a3c62] rounded-full text-[#FF993C] px-5 lg:py-2 sm:py-2 py-2 focus:border-[#FF993C] outline-[#FF993C] placeholder:text-[#FF993C]`}
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
            {submitted && emailError && (
              <p className="text-red-500 flex text-[12px] items-center gap-2 mt-1">
                <Error /> Invalid email address
              </p>
            )}
          </div>
          <button
            className={`bg-[#FF993C] rounded-full text-black px-4 lg:py-2 sm:py-2 py-2 focus:border-[#FF993C] outline-[#FF993C] placeholder:text-[#FF993C] font-bold border-[#FF993C] w-full`}
          >
            Next
          </button>
        </form>
        <p className="text-[#ff9a3c96] mt-4 text-center">
          Already have an account? <a href="/" className="underline text-[#FF993C]">Log in</a>
        </p>
      </div>
    </div>
  );
}
