import PartyComponent from "@/app/party/[slug]/PartyComponent";
import {API_BASE_URL} from "@/lib/config";
import PartyHeader from "@/app/party/[slug]/PartyHeader";


type Party = {
    id: number,
    attendees: string[],
}

export default async function PartyPage({ params }: { params: { slug: string } }) {
    const partyCode = params.slug

    const res = await fetch(`${API_BASE_URL}/parties/${partyCode}`, {
        cache: 'no-store', // like getServerSideProps
    })
    const party: Party = await res.json()

  return (
      <div className="min-w-150 bg-slate-100 border-4 border-slate-300 rounded">
          <div className="bg-slate-300">
              <PartyHeader/>
          </div>

        <div className="p-2">
            <PartyComponent party={party}/>
        </div>

      </div>
  );
}
