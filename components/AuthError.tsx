'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function AuthError() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Authentication Error</h2>
          <p className="mt-2 text-gray-600">
            {error === 'Invalid email or password'
              ? 'Invalid email or password. Please try again.'
              : 'An error occurred during authentication. Please try again.'}
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/auth/login"
            className="w-full block text-center px-4 py-2 border border-transparent rounded-md text-white bg-blue-600 hover:bg-blue-700 font-medium"
          >
            Back to Login
          </Link>
          <Link
            href="/auth/signup"
            className="w-full block text-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 font-medium"
          >
            Create New Account
          </Link>
        </div>
      </div>
    </div>
  )
}
