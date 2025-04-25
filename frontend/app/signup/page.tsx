"use client";

import { Button } from "@/components/ui/button";

const Signup = () => {
  return (
    <div className="flex w-3/5 min-h-full shadow-xl rounded-2xl border-gray-400 m-50 p-10">
      <div className="w-3/6">
        <h1 className="text-2xl text-[#3F21FB] font-bold">Welcome</h1>
        <p>Register to make resume as per the company</p>

        <form className="mt-10">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
          <label>Password </label>
          <input
            type="password"
            name="password"
            id="password"
            required
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />

          <Button className="bg-[#3F21FB] p-4 text-lg mt-5 w-1 ">Signup</Button>
        </form>
      </div>

      <div className="w-3/6 bg-gradient-to-tl from-green-600  to-[#3F21FB]">
      
        <h1>Create Your Professional Resume</h1>
        <p>
          Join Thousand of the Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Optio quos, consequatur soluta dolorem officiis
          alias necessitatibus dolor, magni incidunt delectus accusamus odit.
          Sapiente aut illo vero ad beatae itaque non?
        </p>
      </div>
    </div>
  );
};
export default Signup;
