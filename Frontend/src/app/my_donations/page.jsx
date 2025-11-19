'use client'
import ProtectedClient from '@/app/components/ProtectedClient'
import { useEffect, useState } from 'react'


export default function MyDonationsPage(){
return (
<ProtectedClient>
<MyDonations />
</ProtectedClient>
)
}


function MyDonations(){
const [rows, setRows] = useState([])


useEffect(()=>{
const t = localStorage.getItem('token')
if(!t) return
fetch('http://localhost:4000/donation/mine', { headers: { Authorization: `Bearer ${t}` }})
.then(r=>r.json())
.then(setRows)
},[])


return (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
    <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
      My Donations
    </h1>

    {rows?.length ? (
      <div className="grid gap-4 max-w-3xl mx-auto">
        {rows.map(r => (
          <div
            key={r.donation_id}
            className="bg-white border border-blue-100 shadow-md rounded-xl p-5"
          >
            <div className="text-lg font-semibold text-slate-700 mb-2">
              Items: 
              <span className="font-normal text-slate-600 ml-1">
                {JSON.parse(r.items).join(', ')}
              </span>
            </div>

            <div className="text-sm text-slate-600">
              <strong>Quantity:</strong> {r.quantity}
            </div>

            <div className="text-sm text-slate-600 mt-1">
              <strong>Distributed to:</strong>{" "}
              {r.address || (
                <span className="text-orange-600 font-medium">
                  Not distributed yet
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    ) : (
      <div className="max-w-md mx-auto">
        <div className="bg-white border border-blue-100 shadow-md rounded-xl p-6 text-center text-slate-600">
          You have no donations yet.
        </div>
      </div>
    )}
  </div>
)

}