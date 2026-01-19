import {useEffect, useState} from "react";
import PrehistoricAnimal from "./PrehistoricAnimal.jsx";


function PrehistoricAnimals (){
    const [prehistoricAnimals, setPrehistoricAnimals] = useState(null);

    const loadPrehistoricAnimals = async()=>{
        try{
            const result = await fetch ('http://145.24.237.147:8000/prehistoric-animals/',{
                headers: {
                    'Accept': 'application/json'
                }
            });

            const data = await result.json()
            setPrehistoricAnimals(data.items)
            console.log(data)

        }catch (e){
            console.log(e)
        }
    };

    useEffect(() => {
        loadPrehistoricAnimals()
    }, []);

    return(
        <main className="h-screen mx-auto max-w-7xl">
            {prehistoricAnimals ? (
                <>
                    <h1 className="font-bold text-4xl mt-4">Prehistoric Animals</h1>
                    <section className="mx-6 grid gap-4 py-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                        {prehistoricAnimals.map((prehistoricAnimal)=>(
                            <PrehistoricAnimal key={prehistoricAnimal.id} prehistoricAnimal={prehistoricAnimal}/>
                        ))}
                    </section>
                </>
            ): (
                <p>A little patience, notes are loading...</p>
            )}
        </main>
    )
}

export default PrehistoricAnimals