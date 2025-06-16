export default function PartyComponent({party}) {


    return <div>
        <h1 className="text-slate-600 text-2xl font-bold">This Party ({party.code})</h1>
        <div className="flex flex-row gap-1">
            <div className="w-1/2 bg-slate-300 text-slate-100 px-2 p-1">
                <h1 className="font-bold bg-slate-300 text-slate-500">Attendees</h1>
                <ul className="bg-slate-200 p-2 text-slate-400">
                    <li>Joyci</li>
                    <li>Thomas 1</li>
                    <li>Thomas 2</li>
                </ul>
            </div>
            <div className="w-1/2 bg-slate-300 text-slate-100 px-2 p-1 ">
                <h1 className="font-bold bg-slate-300 text-slate-500">Options</h1>
                <ul className="bg-slate-200 p-2 text-slate-400">
                    <li>Worms</li>
                    <li>Flatout 2</li>
                    <li>Left 4 Dead</li>
                </ul>
            </div>
        </div>
    </div>
}