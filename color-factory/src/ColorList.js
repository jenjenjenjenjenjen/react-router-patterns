import { Link } from "react-router-dom";

const ColorList = ({colors}) => {
    return(
        <>
            <div>
                <h1>Welcome to the Color Factory.</h1>
                <h2><Link to="/colors/new">Add a color</Link></h2>
            </div>
            <div>
                <p>Please select a color.</p>
                <ul>
                    {colors.map(color => (
                        <li><Link to={`/colors/${color}`}>{color}</Link></li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default ColorList;