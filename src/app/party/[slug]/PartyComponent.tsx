import styles from './party.module.css'
import {API_BASE_URL} from "@/lib/config";


export async function getServerSideProps() {
    // todo: fetch information of the parties
    /*
    const res = await fetch(`${API_BASE_URL}/parties`)
    const data = await res.json()

    return { props: { data } }
     */
    return { props: {} }
}

type Party = {
    id: number,
    attendees: string[],
}

export default function PartyComponent() {


    return <div className={styles.party}>
        <h1>This Party</h1>
        <h2>Members</h2>

    </div>
}