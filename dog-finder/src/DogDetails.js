import { useParams, Redirect } from "react-router-dom";

const DogDetails = ({ dogs }) => {
    const { name } = useParams();
    for(let dog of dogs) {
        if (dog.name.toLowerCase() === name) {
            return (
                <>
                    <h1>{dog.name}</h1>
                    <h3>{dog.name} is {dog.age} years old!</h3>
                    <h3>Here are some fun facts about {dog.name}:</h3>
                    <ul>
                        {dog.facts.map(fact => (
                            <li>{fact}</li>
                        ))}
                    </ul>
                </>
            )
        }else{
            return (
                <Redirect to="/dogs" />
            )
        }
    }
}

export default DogDetails;