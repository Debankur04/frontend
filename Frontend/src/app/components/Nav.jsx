'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Nav(){
  const router = useRouter()
  const [token, setToken] = useState(null)

  useEffect(()=>{
    setToken(localStorage.getItem('token'))
  },[])

  function logout(){
    localStorage.removeItem('token')
    router.push('/')
    setToken(null)
  }

return (
  <nav className="w-full bg-white shadow-md border-b border-blue-100 px-6 py-3 flex items-center gap-4">
    
    <Link
      href="/"
      className="text-blue-700 font-semibold hover:text-blue-900 transition"
    >
      Distribution
    </Link>

    <Link
      href="/donate"
      className="text-blue-700 font-semibold hover:text-blue-900 transition"
    >
      Donate
    </Link>

    <Link
      href="/my_donations"
      className="text-blue-700 font-semibold hover:text-blue-900 transition"
    >
      My Donations
    </Link>

    <div className="ml-auto flex items-center gap-3">
      {!token ? (
        <>
          <Link
            href="/auth/login"
            className="px-4 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
          >
            Login
          </Link>

          <Link
            href="/auth/signup"
            className="px-4 py-1.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-medium"
          >
            Signup
          </Link>
        </>
      ) : (
        <button
          onClick={logout}
          className="px-4 py-1.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition font-medium"
        >
          Logout
        </button>
      )}
    </div>
  </nav>
)

}
