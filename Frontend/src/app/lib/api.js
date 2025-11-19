export const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:4000'


export async function postJSON(path, body, token) {
const res = await fetch(`${API_BASE}${path}`, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
...(token ? { Authorization: `Bearer ${token}` } : {}),
},
body: JSON.stringify(body),
})
return res.json()
}


export async function getJSON(path, token) {
const res = await fetch(`${API_BASE}${path}`, {
headers: {
...(token ? { Authorization: `Bearer ${token}` } : {}),
},
})
return res.json()
}