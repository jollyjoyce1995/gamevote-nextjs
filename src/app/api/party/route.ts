import { API_BASE_URL } from "@/lib/conifg";

export async function POST() {
    const res = await fetch(`${API_BASE_URL}/parties`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({})
    });
    console.log("asdf");
    console.log(res);
    const data = await res.json();
    console.log(data);
    return Response.json(data);
}