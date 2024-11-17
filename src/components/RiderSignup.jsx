import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const RiderSignup = () => {
  // Formik initialization
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      state: '',
      city: '',
      password: '',
      confirmPassword: '',
      experienceInLogistics: '',
      ecommerceLogistics: '',
      courierLicense: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('Full Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phone: Yup.string().required('Phone number is required'),
      address: Yup.string().required('Address is required'),
      state: Yup.string().required('State is required'),
      city: Yup.string().required('City is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Please confirm your password'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="bg-gray-100 py-10 px-6 md:px-12 lg:px-24 max-w-3xl mx-auto shadow-lg rounded-md mt-10">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
        Become Our Delivery Partner
      </h2>
      <p className="text-center text-gray-700 mb-10">
        We're excited about your interest in partnering with The Kitchen as our Third-Party Logistics provider! To get started, please complete the short form below with some additional information.
      </p>

      <form onSubmit={formik.handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="fullName">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            {...formik.getFieldProps('fullName')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ee2a23] focus:border-transparent"
          />
          {formik.touched.fullName && formik.errors.fullName ? (
            <div className="text-red-500 text-sm">{formik.errors.fullName}</div>
          ) : null}
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            {...formik.getFieldProps('email')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ee2a23] focus:border-transparent"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          ) : null}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            {...formik.getFieldProps('phone')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ee2a23] focus:border-transparent"
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="text-red-500 text-sm">{formik.errors.phone}</div>
          ) : null}
        </div>

        {/* Address */}
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="address">
            Address
          </label>
          <input
            type="text"
            id="address"
            {...formik.getFieldProps('address')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ee2a23] focus:border-transparent"
          />
          {formik.touched.address && formik.errors.address ? (
            <div className="text-red-500 text-sm">{formik.errors.address}</div>
          ) : null}
        </div>

        {/* State and City (side-by-side) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="state">
              State
            </label>
            <input
              type="text"
              id="state"
              {...formik.getFieldProps('state')}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ee2a23] focus:border-transparent"
            />
            {formik.touched.state && formik.errors.state ? (
              <div className="text-red-500 text-sm">{formik.errors.state}</div>
            ) : null}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="city">
              City
            </label>
            <input
              type="text"
              id="city"
              {...formik.getFieldProps('city')}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ee2a23] focus:border-transparent"
            />
            {formik.touched.city && formik.errors.city ? (
              <div className="text-red-500 text-sm">{formik.errors.city}</div>
            ) : null}
          </div>
        </div>

        {/* Password and Confirm Password */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...formik.getFieldProps('password')}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ee2a23] focus:border-transparent"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm">{formik.errors.password}</div>
            ) : null}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              {...formik.getFieldProps('confirmPassword')}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ee2a23] focus:border-transparent"
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="text-red-500 text-sm">{formik.errors.confirmPassword}</div>
            ) : null}
          </div>
        </div>

 {/* Experience in Logistics */}
 <div>
          <label className="block text-gray-700 font-medium mb-2">
            Do you have prior experience in logistics?
          </label>
          <div className="flex items-center space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="experienceInLogistics"
                value="yes"
                {...formik.getFieldProps('experienceInLogistics')}
                className="form-radio text-[#ee2a23] focus:ring-[#ee2a23]"
              />
              <span className="ml-2 text-gray-700">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="experienceInLogistics"
                value="no"
                {...formik.getFieldProps('experienceInLogistics')}
                className="form-radio text-[#ee2a23] focus:ring-[#ee2a23]"
              />
              <span className="ml-2 text-gray-700">No</span>
            </label>
          </div>
        </div>

        {/* E-commerce Logistics */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Have you managed e-commerce logistics in the past?
          </label>
          <div className="flex items-center space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="ecommerceLogistics"
                value="yes"
                {...formik.getFieldProps('ecommerceLogistics')}
                className="form-radio text-[#ee2a23] focus:ring-[#ee2a23]"
              />
              <span className="ml-2 text-gray-700">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="ecommerceLogistics"
                value="no"
                {...formik.getFieldProps('ecommerceLogistics')}
                className="form-radio text-[#ee2a23] focus:ring-[#ee2a23]"
              />
              <span className="ml-2 text-gray-700">No</span>
            </label>
          </div>
        </div>

        {/* Courier License */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Is your company registered with a courier license?
          </label>
          <div className="flex items-center space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="courierLicense"
                value="yes"
                {...formik.getFieldProps('courierLicense')}
                className="form-radio text-[#ee2a23] focus:ring-[#ee2a23]"
              />
              <span className="ml-2 text-gray-700">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="courierLicense"
                value="no"
                {...formik.getFieldProps('courierLicense')}
                className="form-radio text-[#ee2a23] focus:ring-[#ee2a23]"
              />
              <span className="ml-2 text-gray-700">No</span>
            </label>
          </div>
        </div>

        {/* Sign Up Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#ee2a23] hover:bg-[#c0241a] text-white font-semibold py-2 px-6 rounded-md transition-colors duration-300 w-full"
          >
            Sign Up
          </button>
        </div>

        {/* Login prompt */}
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{' '}
          <a href="#" className="text-[#ee2a23] font-semibold hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default RiderSignup;
