import {Link} from "react-router";

function PrehistoricAnimal({prehistoricAnimal}){
    return(
        <article className={"group p-6 bg-white rounded-2xl border border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4"} >
            <h2 className={"text-2xl font-bold text-slate-800 line-clamp-2"}>{prehistoricAnimal.genus}</h2>
            <div className={"text-slate-600"}>
                <div className={"text-sm font-semibold uppercase tracking-wide text-slate-600"}>Era:</div>
                <div className={"text-base"}>{prehistoricAnimal.era}</div>
            </div>
            <Link to={`/prehistoricAnimal/${prehistoricAnimal.id}`} className={" text-slate-800 hover:text-blue-400 transition-colors duration-200"}>
                View details
                <span className={"group-hover:translate-x-1 transition-transform"}>→</span>
            </Link>
        </article>
    )
}

export default PrehistoricAnimal