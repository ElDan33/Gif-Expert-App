import React, { useState } from 'react'
import AddCategories from './components/AddCategories';
import GifGrid from './components/GifGrid';

function GifExpertApp() {
    const [categories, setCategories] = useState(["One Punch"]);
    
    // const handleAdd = () => {
    //     const newCategories = ["Hunter-X-Hunter", "Boku No Hero Academia", "Fairy Tail"];
    //     newCategories.map( cat => {
    //         return setCategories([...categories, cat]);
    //     })
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategories setCategories = {setCategories}/>
            <hr/>
            {/* <button onClick={handleAdd}>Agregar</button> */}
            
            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                        key={ category } 
                        category={ category }
                        />
                    ))
                }
            </ol>

        </>
    )
}

export default GifExpertApp




