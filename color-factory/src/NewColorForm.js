import { Redirect, Link } from "react-router-dom";
import { useState } from "react";

const NewColorForm = ({addColor, colors, setColors}) => {
    const [formData, setFormData] = useState('')
    const handleSubmit = evt => {
        evt.preventDefault();
        addColor(formData);
        setFormData('');
        return (
            <Redirect to="/colors" />
        )
    }
    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
          ...fData,
          [name]: value
        }));
      };
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="color">Color Name</label>
            <input name="color" type="text" onChange={handleChange}/>
            <button type="submit">Add color</button>
            <button><Link to="/colors">GO HOME</Link></button>
        </form>
        
    )
}

export default NewColorForm;