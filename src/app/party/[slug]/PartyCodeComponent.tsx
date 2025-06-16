"use client";
import useBearStore from "@/lib/store";
import { useEffect } from "react";

export default function PartyCodeComponent({ partyCode }: { partyCode: string }) {
    const { setPartyCode } = useBearStore();

    useEffect(() => {
        setPartyCode(partyCode);
    }, [setPartyCode, partyCode]);

    return `${partyCode}`;
}
