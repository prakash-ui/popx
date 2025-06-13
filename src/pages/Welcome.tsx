import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className="mobile-container">
      <div className="flex flex-col justify-end min-h-screen p-6 pb-8">
        <div className="mb-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Welcome to PopX
          </h1>
          <p className="text-gray-600 text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link to="/register">
            <button className="btn-primary">
              Create Account
            </button>
          </Link>
          
          <Link to="/login">
            <button className="btn-secondary">
              Already Registered? Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Welcome