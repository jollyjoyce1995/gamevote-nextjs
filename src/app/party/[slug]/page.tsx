"use client";
import PartyCodeComponent from "./PartyCodeComponent";

export default function PartyPage({ params }: { params: { slug: string } }) {
  return (<div>Product ID: <PartyCodeComponent partyCode={params.slug}></PartyCodeComponent></div>);
}
