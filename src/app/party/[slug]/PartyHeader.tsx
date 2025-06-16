"use client";

import { useRouter } from "next/navigation";

export default function PartyHeader() {
    const router = useRouter()

    async function goBack() {
        await router.push("/")
    }

    return (
        <div className="p-2">
            <button className="bg-slate-400 hover:bg-slate-500 text-slate-100 font-bold p-1 px-2 rounded text-sm" onClick={goBack}>↩ Back</button>
        </div>
    )
}