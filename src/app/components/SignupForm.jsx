"use client"
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';


const SignupForm = () => {
    const router = useRouter();
      const handleSubmit = (e) => {
        e.preventDefault()
       router.push("/");
       toast.success("Account Created Successfully !");
    }

    return (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {/* name */}
        <div>
            <label className="block text-sm font-medium text-gray-700">
                Your Name
            </label>
            <input
                type="text"
                required
                placeholder="Your Name"
                className="mt-1 w-full text-black rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
            />
        </div>
            {/* photo */}
        <div>
            <label className="block text-sm font-medium text-gray-700">
                Photo
            </label>
            <input
                type="text"
                placeholder="Photo URL"
                className="mt-1 w-full text-black rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
            />
        </div>
            {/* email */}
        <div>
            <label className="block text-sm font-medium text-gray-700">
                Email address
            </label>
            <input
                type="email"
                required
                placeholder="you@example.com"
                className="mt-1 w-full text-black rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
            />
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700">
                Password
            </label>
            <input
                type="password"
                required
                placeholder="••••••••"
                className="mt-1 w-full text-black rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
            />
        </div>

        <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
        >
            Sign Up
        </button>
    </form>
    );
};

export default SignupForm;