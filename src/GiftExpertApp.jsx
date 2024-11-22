import { useState } from 'react';
//import { AddCategory } from './componets/AddCategory';
//import { GifGrid } from './componets/GifGrid';
import { GifGrid, AddCategory } from "./componets";  //importa de lo que esta en el index.js

export const GiftExpertApp = ()=> {

    const [ categories, setCategories ] = useState( ['Naruto'] );
    
    const onAddCategory = ( newCategory ) => {
        if ( categories.includes( newCategory ) ) {
            return;
        }
        setCategories( [ newCategory, ...categories ] );
    };

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory = { (value) => onAddCategory(value) }
            />

            {
                categories.map( (category) => (
                    <GifGrid 
                        category= { category }
                        key= { category }
                    />
                ))
            }
        </>
    );
};
