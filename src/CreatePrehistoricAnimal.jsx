import {useState} from "react";
import {useNavigate} from "react-router";

function CreatePrehistoricAnimal(){

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        genus: "",
        era: "",
        family: "",
    })

    const handleInputChange = (e) => {
        console.log(e.target);
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try{
            const response = await fetch('http://145.24.237.147:8000/prehistoric-animals/', {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    genus: formData.genus,
                    era: formData.era,
                    family: formData.family,
                }),
                // body: JSON.stringify(formData)
            });

            const data = await response.json();
            console.log(data)
            navigate(`/prehistoricAnimal/${data.id}`)

            console.log("Formulier verzonden", formData)

        }catch (error){
            console.error("Er is een error opgetreden", error)
        }

    }

    return(
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 rounded-2xl border border-slate-800 shadow-sm flex flex-col gap-6">
            <h1 className={"text-3xl font-bold text-slate-900"}>Add a Prehistoric Animal</h1>
            <div className="flex flex-col gap-1">
                <label htmlFor="genus" className={"text-sm font-semibold text-slate-700"}>Genus</label>
                <input
                    type="text"
                    id="genus"
                    name="genus"
                    value={formData.genus}
                    onChange={handleInputChange}
                    className="rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="era" className={"text-sm font-semibold text-slate-700"}>Era</label>
                <input
                    type="text"
                    id="era"
                    name="era"
                    value={formData.era}
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
                    value={formData.family}
                    className="rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    onChange={handleInputChange}
                />
            </div>
            <div className="mt-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 self-start">
                <button type="submit">Add</button>
            </div>
        </form>
    )
}

export default CreatePrehistoricAnimal