import { getJSON } from '@/app/lib/api'


export default async function Page(){
// server component: fetch distribution from backend
const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:4000'}/distribution`)
const data = await res.json()


return (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
    <h1 className="text-3xl font-bold text-blue-700 mb-2 text-center">
      Distribution
    </h1>

    <p className="text-center text-slate-600 mb-6">
      List of places where donations have been distributed
    </p>

    {data?.length ? (
      <div className="grid gap-4 max-w-4xl mx-auto">
        {data.map(d => (
          <div
            key={d.distribution_id}
            className="bg-white border border-blue-100 shadow-md rounded-xl p-5"
          >
            <div className="flex justify-between">
              
              {/* Left - Address */}
              <div>
                <strong className="text-slate-700">{d.address}</strong>
                <p className="text-slate-500 text-sm">{d.state}</p>
              </div>

              {/* Right - Stats */}
              <div className="text-right">
                <div className="text-sm text-slate-600">
                  <strong>Quantity:</strong> {d.quantity}
                </div>
                <div className="text-sm text-slate-600 mt-1">
                  <strong>Distributed:</strong>{" "}
                  {d.distributed_at || (
                    <span className="text-orange-600 font-medium">—</span>
                  )}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    ) : (
      <div className="max-w-md mx-auto">
        <div className="bg-white border border-blue-100 shadow-md rounded-xl p-6 text-center text-slate-600">
          No distribution records yet.
        </div>
      </div>
    )}
  </div>
)

}