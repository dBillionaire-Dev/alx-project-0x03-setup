import React from 'react'
import Layout from '../components/layouts/Layout'

const index = () => {
  return (
    <div>
      <Layout>
        <div className="container mx-auto px-4 py-10">
          <h1 className="text-4xl font-bold mb-6">Welcome to Splash App</h1>
          <p className="text-lg text-gray-700 mb-4">
            Splash App is your one-stop platform for all your needs. Connecting people, creating opportunities.
          </p>
          <p className="text-lg text-gray-700">
            Explore our services and discover how we can help you achieve your goals.
          </p>
        </div>
      </Layout>
    </div>
  )
}

export default index
