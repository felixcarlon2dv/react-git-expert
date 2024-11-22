import { useState } from 'react';
import { AddCategory } from './componets/AddCategory';
import { GifGrid } from './componets/GifGrid';


//functional componet
export const GiftExpertApp = ()=> {

    //hook useState. cateogies es el valor, setCategories actualiza el categories
    //reservamos en memoria un espacio para las categorias
    //inicializamos con un arreglo con un elemento
    const [ categories, setCategories ] = useState( ['Naruto'] );
    
    const onAddCategory = ( newCategory ) => {

        if ( categories.includes( newCategory ) ) {
            return;
        }

        //hace una copia ... de todas las cotegorias y al inicio agrego el nuevo
        setCategories( [ newCategory, ...categories ] );

        //Otra forma: 
        //setCategories me da el valor de categories y lo pone en cat
        //le paso cat a la funcion flecha y la desestructuro y añado otro texto
        //el arreglo resultante se lo paso al setcCategory para que haga lo suyo
        //setCategories( cat => [...cat,'Attack on Titan' ] );
    };

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory = { (value) => onAddCategory(value) }
                /* onNewCategory = { onAddCategory } */
            />


           {/*  <button onClick={onAddCategory} >Agregar</button> */}


            {
                categories.map( (category) => 
                    (
                        <GifGrid 
                            category= { category }
                            key= { category }
                        />
                    )
                )
            }
        </>
    );
};
