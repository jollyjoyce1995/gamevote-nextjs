"use client";
import PartyCodeComponent from "./PartyCodeComponent";
import {useRouter} from "next/navigation";
import PartyComponent from "@/app/party/[slug]/PartyComponent";

export default function PartyPage({ params }: { params: { slug: string } }) {
    const router = useRouter()
      async function handleClick() {
          router.push('/')
      }

  return (
      <div>
        <div>
            <button onClick={handleClick}>Back</button>
        </div>

        <div>Product ID: <PartyCodeComponent partyCode={params.slug}></PartyCodeComponent></div>
          <div><PartyComponent/></div>

      </div>
  );
}
