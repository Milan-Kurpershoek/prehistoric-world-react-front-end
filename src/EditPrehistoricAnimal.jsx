import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";

function EditPrehistoricAnimal(){

    const params = useParams()

    const navigate = useNavigate()

    const [editPrehistoricAnimal, setEditPrehistoricAnimal] = useState(null);

    const handleInputChange = (e) => {
        console.log(e.target);
        const {name, value} = e.target;
        setEditPrehistoricAnimal({
            ...editPrehistoricAnimal,
            [name]: value,
        })
    }

    const handleEditSubmit = async (event) => {
        event.preventDefault()

        try{
            const response = await fetch(`http://145.24.237.147:8000/prehistoric-animals/${params.id}`, {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    genus: editPrehistoricAnimal.genus,
                    era: editPrehistoricAnimal.era,
                    family: editPrehistoricAnimal.family,
                }),
            });

            const data = await response.json();
            console.log(data)
            console.log("Formulier verzonden", editPrehistoricAnimal)
            navigate(`/prehistoricAnimal/${data.id}`)

        }catch (error){
            console.error("Er is een error opgetreden", error)
        }
    }

    const loadEditPrehistoricAnimals = async(id)=>{
        try{
            const result = await fetch (`http://145.24.237.147:8000/prehistoric-animals/${id}`,{
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            });

            const data = await result.json()
            setEditPrehistoricAnimal(data)
            console.log(data)

        }catch (e){
            console.log(e)
        }
    };

    useEffect(() => {
        loadEditPrehistoricAnimals(params.id)
    }, [params.id]);

    if (!editPrehistoricAnimal) {
        return <p>Loading...</p>;
    }

    return(
        <>
            <form onSubmit={handleEditSubmit} className="max-w-xl mx-auto bg-white p-6 rounded-2xl border border-slate-800 shadow-sm flex flex-col gap-6">
                <h1 className={"text-3xl font-bold text-slate-900"}>Edit Prehistoric Animal</h1>
                <div className="flex flex-col gap-1">
                    <label htmlFor="genus" className={"text-sm font-semibold text-slate-700"}>Genus</label>
                    <input
                        type="text"
                        id="genus"
                        name="genus"
                        value={editPrehistoricAnimal.genus}
                        onChange={handleInputChange}
                        className="rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="era" className={"text-sm font-semibold text-slate-700"}>era</label>
                    <input
                        type="text"
                        id="era"
                        name="era"
                        value={editPrehistoricAnimal.era}
                        onChange={handleInputChange}
                        className="rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="family" className={"text-sm font-semibold text-slate-700"}>family</label>
                    <input
                        type="text"
                        id="family"
                        name="family"
                        value={editPrehistoricAnimal.family}
                        onChange={handleInputChange}
                        className="rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    />
                </div>
                <div className="mt-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 self-start">
                    <button type="submit">Change</button>
                </div>
            </form>
        </>
    )
}

export default EditPrehistoricAnimal