import {Link} from "react-router";

function Error (){
    return(
        <section className="min-h-full flex flex-col items-center justify-center text-center px-4">
            <img
                src="https://media.tenor.com/qtg0YZqaaKEAAAAC/dinosaur.gif"
                alt="Error Message"
                className="w-64 md:w-80 mb-6 drop-shadow-lg"
            />

            <h1 className="text-5xl font-extrabold text-slate-900 mb-2">
                404
            </h1>

            <p className="text-xl text-slate-700 mb-6">
                Dinosaur not found 🦕
            </p>

            <p className="text-slate-500 max-w-md">
                Looks like this prehistoric creature went extinct… or never existed in the first place.
            </p>
            <Link to={`/prehistoricAnimals`} className={"mt-8 inline-block rounded-xl bg-slate-900 px-6 py-3 text-white font-semibold hover:bg-slate-700 transition"}>
                <span className={"group-hover:translate-x-1 transition-transform"}>Return to Safety</span>
            </Link>

        </section>
    )


}

export default Error