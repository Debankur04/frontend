'use client'
import ProtectedClient from '@/app/components/ProtectedClient'
import { useState } from 'react'
import { postJSON } from '@/app/lib/api.js'
import { useRouter } from 'next/navigation'


export default function DonatePage(){
return (
<ProtectedClient>
<DonateForm />
</ProtectedClient>
)
}


function DonateForm(){
const [items, setItems] = useState('Rice, Dal, Chapati')
const [quantity, setQuantity] = useState(1)
const [msg, setMsg] = useState('')
const router = useRouter()


async function submit(e){
e.preventDefault()
const token = localStorage.getItem('token')
const body = { items: items.split(',').map(s=>s.trim()), quantity: Number(quantity) }
const res = await postJSON('/donation', body, token)
if(res.error) setMsg(res.error)
else{
setMsg('Donation submitted')
router.push('/my_donations')
}
}


return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-4">
    <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-8 border border-blue-100">

      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        Donate Food
      </h1>

      <form onSubmit={submit} className="space-y-5">

        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">
            Items (comma separated)
          </label>
          <input
            value={items}
            onChange={e => setItems(e.target.value)}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            placeholder="Rice, Dal, Chapati"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">
            Quantity (units)
          </label>
          <input
            type="number"
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            placeholder="Enter quantity"
          />
        </div>

        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all"
        >
          Submit Donation
        </button>

        {msg && (
          <div className="text-center text-blue-700 font-medium mt-2">
            {msg}
          </div>
        )}
      </form>
    </div>
  </div>
)

}