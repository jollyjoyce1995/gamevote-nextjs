import { getServerSession } from "next-auth";
import PartyCodeComponent from "./PartyCodeComponent";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function PartyLayoutPage({ children, params }: { children: React.ReactNode, params: { slug: string } }) {
    //const session = await getServerSession(authOptions);

    return (<div>Product ID: <PartyCodeComponent partyCode={params.slug}></PartyCodeComponent>
        UserId: 
        {children}
    </div>);
}
