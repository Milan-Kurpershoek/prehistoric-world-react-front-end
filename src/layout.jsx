import {Link, Outlet} from "react-router";

function Layout(){
    return(
        <div className={"min-h-screen flex flex-col"}>
            <header className={"bg-slate-900 text-white text-2xl font-semibold px-6 py-4 shadow"}>Prehistoric World Rraw:)</header>
            <nav className={"bg-slate-800 text-white px-6 py-3 flex gap-6"}>
                <Link className={"hover:text-blue-400 transition-colors duration-200"} to={"/"}>Home</Link>
                <Link className={"hover:text-blue-400 transition-colors duration-200"} to={"/createPrehistoricAnimal"}>Add Prehistoric Animal</Link>
            </nav>

            <main className={"flex-1 px-6 py-8 bg-gray-100"}>
                {/*Andere componenten komen hier                */}
                <Outlet></Outlet>
            </main>
            <footer className={"bg-slate-900 text-gray-300 text-center py-4 text-sm"}>
                Copyright Prehistoric World©
            </footer>
        </div>
    )
}

export default Layout