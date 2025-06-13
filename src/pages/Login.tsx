import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login attempt:', formData)
  }

  return (
    <div className="mobile-container">
      <div className="p-6 pt-16">
        <div className="mb-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Signin to your PopX account
          </h1>
          <p className="text-gray-600 text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="form-label">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleInputChange}
              className="form-input"
              required
            />
          </div>

          <div>
            <label className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleInputChange}
              className="form-input"
              required
            />
          </div>

          <div className="pt-8">
            <button type="submit" className="btn-gray">
              Login
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

export default Login