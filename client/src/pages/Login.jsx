import React, { useState } from 'react';

import {  useNavigate } from 'react-router-dom';  // Import useHistory

import { useMutation, useQuery } from '@apollo/client';
import { ADD_USER, LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

export default function Contact() {
  const history = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [isExistingUser, setIsExistingUser] = useState(false);

  const [addUser, { error, data }] = useMutation(ADD_USER);
  // const [login, { error, data }] = useMutation(LOGIN_USER)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)

    if (isExistingUser) {
      //if they are an existing user, call the login mutation
      try {
        const { data } = await login({
          variables: { ...formData },
        });
  
        Auth.login(data.login.token);
        
        console.log('Login Submitted:', { email: formData.email, password: formData.password });
        setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
        // Redirect to the home page
        history.push('/');  // Assuming '/' is the route for the home page
      } catch (err) {
        console.error(err);
      }
      
    } else {
      try {
        const { data } = await addUser({
          variables: { ...formData },
        });
  
        Auth.login(data.addUser.token);
        
        console.log('Sign Up Submitted:', formData);
        // Reset the form after submission
        setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        });

      } catch (err) {
        console.error(err);

// MIKEL'S CODE STARTS HERE
      // Simulate login (replace with actual API request)
      try {
        const response = await login(formData.email, formData.password);
        console.log('Login Response:', response);
        // Redirect to the home page
        history(); // Assuming '/' is the route for the home page
      } catch (error) {
        console.error('Login Error:', error.message);
        // Handle login error
      }
    } else {
      // Simulate sign up (replace with actual API request)
      try {
        const response = await signUp(formData);
        console.log('Sign Up Response:', response);

        if (response && response.userExists) {
          // User already exists, show alert and redirect to login
          window.alert('User already exists. Please log in.');
          setIsExistingUser(true); // Switch to the login form
        } else {
          // Reset the form after successful sign-up
          setFormData({
            name: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: '',
          });
        }
      } catch (error) {
        console.error('Sign Up Error:', error.message);
        // Handle sign-up error
      }
       
      }
    };
  // MIKEL'S CODE STOPS HERE

  // Modify the signUp function to check if the user already exists
  const signUp = async (userData) => {
    // Replace the following line with your actual sign-up API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate success
        resolve({ message: 'User created successfully' });
        // Simulate user already exists
        // resolve({ userExists: true });
        // Simulate error
        // reject(new Error('Failed to create user'));
      }, 1000);
    });
  };

  const login = async (email, password) => {
    // Replace the following line with your actual login API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate success
        resolve({ message: 'Login successful' });
        // Simulate error
        // reject(new Error('Invalid credentials'));
      }, 1000);
    });
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {isExistingUser ? (
            <p className="text-gray-800">Welcome back! Please log in.</p>
          ) : (
            <>
              <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/* ... (other input fields) */}
            </>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {!isExistingUser && (
            <>
              <div>
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Create Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* {!isExistingUser && ( */}
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
                    Confirm Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      autoComplete="new-password"
                      required
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              {/* )} */}
            </>
          )}

          {isExistingUser && (
            <div>
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          )}

          {/* ... (other input fields) */}

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[--Navy] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[--Gold] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {isExistingUser ? 'Log In' : 'Sign Up'}
            </button>
          </div>

          <div>
            <button
              type="button"
              onClick={() => setIsExistingUser(!isExistingUser)}
              className="flex w-full justify-center rounded-md bg-gray-400 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-800 shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
            >
              {isExistingUser ? 'New User? Sign Up' : 'Existing User? Log In'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}