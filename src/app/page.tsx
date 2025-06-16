"use client";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function handleClick() {
    setIsLoading(true);
    try {
      const res = await fetch("/api/party", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!res.ok) throw new Error("Something went wrong");
      const party = await res.json();
      
      router.push(`/party/${party.code}`);
    } catch (err) {
      console.error(err);
      alert("Error occurred");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="mx-auto px-4">
      <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              {isLoading ? (
        <>
          <Loader2 className="animate-spin h-5 w-5 mr-2" />
          Loading...
        </>
      ) : (
        "New Lobby"
      )}
      </button>
    </div>
  );
}