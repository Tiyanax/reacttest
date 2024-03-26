import React, { useState } from 'react';
 
function App(props) {
    
    const [formData, setFormData] = useState({});
    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
    }
     
    return (
        <div style={{ 
    display: 'flex', 
    flexDirection: 'row' 
}} >
            <form style={{ 
    display: 'flex', 
    flexDirection: 'column' }}>
                <label>First Name</label>
                <input value={formData.firstName || ''}
              
onChange={handleChange} type="text" name="firstName" />
                <label>Last Name</label>
                <input value={formData.lastName || ''} 
onChange={handleChange} type="text" name="lastName" />
                <label>Date of Birth</label>
                <input value={formData.DOB || ''} 
onChange={handleChange} type="datetime-local" name="DOB" />
                <label>Gender</label>
                <div>
                    <input value="Male" 
checked={formData.gender === "Male"}                        
onChange={handleChange} type="radio" name="gender" />Male
                </div>
                <div>
                    <input value="Female" 
checked={formData.gender === "Female"}                        
onChange={handleChange} type="radio" name="gender" />Female
                    </div>
                <div>
                    <input value="None" 
checked={formData.gender === "None"}
onChange={handleChange} type="radio" name="gender" />Prefer not to say
                    </div>
                <button type="button">Save</button>
            </form>
             
        </div>);
}
 
export default App;