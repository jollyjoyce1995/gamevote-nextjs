"use client";

import { useRouter } from "next/navigation";
import styles from './party.module.css'

export default function PartyHeader() {
    const router = useRouter()

    async function goBack() {
        await router.push("/")
    }

    return (
        <div className="p-2">
            <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-3 rounded text-sm" onClick={goBack}>↩ Back</button>
        </div>
    )
}