import React from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { ArrowRight } from "lucide-react";

const Signup = () => {
  return (
    <>
      <Button
        variant="outline"
        className="w-full bg-white hover:bg-gray-50 border-gray-300"
      >
        <svg
          className="mr-2 h-4 w-4"
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="google"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 488 512"
        >
          <path
            fill="currentColor"
            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
          ></path>
        </svg>
        Sign up with Google
      </Button>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-gray-500">
            Or sign up with email
          </span>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="signup-email" className="text-gray-700">
          Email
        </Label>
        <Input
          id="signup-email"
          type="email"
          placeholder="m@example.com"
          className="bg-white border-gray-300"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="signup-password" className="text-gray-700">
          Password
        </Label>
        <Input
          id="signup-password"
          type="password"
          className="bg-white border-gray-300"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="confirm-password" className="text-gray-700">
          Confirm Password
        </Label>
        <Input
          id="confirm-password"
          type="password"
          className="bg-white border-gray-300"
        />
      </div>
      <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
        Sign Up
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </>
  );
};

export default Signup;
