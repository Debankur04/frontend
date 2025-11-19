'use client'
import { useState } from 'react'
import { postJSON } from '@/app/lib/api'
import { useRouter } from 'next/navigation'


export default function Login(){
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const [msg,setMsg] = useState('')
const router = useRouter()


async function submit(e){
e.preventDefault()
const res = await postJSON('/login', { email, password })
if(res.error) setMsg(res.error)
else{
localStorage.setItem('token', res.token)
router.push('/my-donations')
}
}


return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-4">
    <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 border border-blue-100">
      
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        Login
      </h1>

      <form onSubmit={submit} className="space-y-4">
        
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">
            Email
          </label>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            placeholder="Enter your password"
          />
        </div>

        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all"
        >
          Login
        </button>

        {msg && (
          <div className="text-red-600 text-center text-sm font-medium mt-2">
            {msg}
          </div>
        )}
      </form>
    </div>
  </div>
)

}