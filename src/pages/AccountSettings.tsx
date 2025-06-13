import { Link } from 'react-router-dom'

const AccountSettings = () => {
  return (
    <div className="mobile-container">
      <div className="p-6 pt-16">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Account Settings
          </h1>
        </div>

        <div className="mb-8">
          <div className="flex items-start space-x-4">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3307758/pexels-photo-3307758.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Marry Doe</h2>
              <p className="text-gray-600">Marry@mail.Com</p>
            </div>
          </div>
        </div>

        <div className="text-gray-600 text-sm leading-relaxed">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquam Erat, Sed Diam Voluptatem.
        </div>

        <div className="mt-12">
          <Link to="/" className="text-primary-500 text-sm">
            Back to Welcome
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AccountSettings