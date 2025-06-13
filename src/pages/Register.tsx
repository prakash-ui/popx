import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    password: '',
    companyName: '',
    isAgency: true
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target
    setFormData({
      ...formData,
      [name]: type === 'radio' ? value === 'true' : value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle registration logic here
    console.log('Registration attempt:', formData)
    // Navigate to account settings page after successful registration
    navigate('/account')
  }

  return (
    <div className="mobile-container">
      <div className="p-6 pt-16">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Create your PopX account
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="form-label">
              Full Name*
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Marry Doe"
              value={formData.fullName}
              onChange={handleInputChange}
              className="form-input"
              required
            />
          </div>

          <div>
            <label className="form-label">
              Phone number*
            </label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Marry Doe"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="form-input"
              required
            />
          </div>

          <div>
            <label className="form-label">
              Email address*
            </label>
            <input
              type="email"
              name="emailAddress"
              placeholder="Marry Doe"
              value={formData.emailAddress}
              onChange={handleInputChange}
              className="form-input"
              required
            />
          </div>

          <div>
            <label className="form-label">
              Password *
            </label>
            <input
              type="password"
              name="password"
              placeholder="Marry Doe"
              value={formData.password}
              onChange={handleInputChange}
              className="form-input"
              required
            />
          </div>

          <div>
            <label className="form-label">
              Company name
            </label>
            <input
              type="text"
              name="companyName"
              placeholder="Marry Doe"
              value={formData.companyName}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>

          <div className="pt-4">
            <p className="text-gray-700 text-base mb-4">Are you an Agency?*</p>
            <div className="flex space-x-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="isAgency"
                  value="true"
                  checked={formData.isAgency === true}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-primary-500 border-gray-300 focus:ring-primary-500"
                />
                <span className="ml-2 text-gray-700">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="isAgency"
                  value="false"
                  checked={formData.isAgency === false}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-primary-500 border-gray-300 focus:ring-primary-500"
                />
                <span className="ml-2 text-gray-700">No</span>
              </label>
            </div>
          </div>

          <div className="pt-12">
            <button type="submit" className="btn-primary">
              Create Account
            </button>
          </div>
        </form>

        <div className="mt-8 text-center">
          <Link to="/" className="text-primary-500 text-sm">
            Back to Welcome
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register