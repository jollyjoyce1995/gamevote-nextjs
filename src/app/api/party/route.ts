import { API_BASE_URL } from "@/lib/config";

export async function POST() {
    const res = await fetch(`${API_BASE_URL}/parties`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({})
    });
    const data = await res.json();
    return Response.json(data);
}