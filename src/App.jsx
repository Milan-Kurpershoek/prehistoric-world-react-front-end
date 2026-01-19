import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./layout.jsx";
import PrehistoricAnimals from "./PrehistoricAnimals.jsx";
import DetailsPrehistoricAnimal from "./DetailsPrehistoricAnimal.jsx";
import EditPrehistoricAnimal from "./EditPrehistoricAnimal.jsx";
import CreatePrehistoricAnimal from "./CreatePrehistoricAnimal.jsx";
// import je components





const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <PrehistoricAnimals />,
            },

            {
                path: "/prehistoricAnimals",
                element: <PrehistoricAnimals/>,
            },

            {
                path: "/prehistoricAnimal/:id",
                element: <DetailsPrehistoricAnimal/>,
            },

            {
                path: "/createPrehistoricAnimal",
                element: <CreatePrehistoricAnimal/>,
            },

            {
                path: "/editPrehistoricAnimal/:id",
                element: <EditPrehistoricAnimal/>,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
