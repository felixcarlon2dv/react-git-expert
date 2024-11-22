//funcional componet 

import { useState } from 'react'

export const AddCategory = ( {onNewCategory} ) => {
    //console.log(onNewCategory);

    const [ inputValue , setInputValue ] = useState('');

    const onInputChange = (event) => {
        
        //console.log(event.target.value);
        setInputValue(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault(); // evita que se refresque la pagina al hacer submit al form

        //si el valor del input sin espacios tiene 1 o menos elementos retorna nada (termina el onSubmit)
        if( inputValue.trim().length <= 1 ) return;
        //setCat( [...categories, 'Attack on Titan'] );

        //manda llamar el callback setCat
        //lo que te regrese ponlo en categorias (en este caso regresa el arreglo categories del useState)
        //asigna al useState categories el valor del input y despues lo que ya traia
        //setCat( (categorias) => [inputValue, ...categorias] );
        onNewCategory(inputValue.trim());

        setInputValue('');

        
    };
    
    return (
        <form onSubmit={ onFormSubmit }> 
        {/*  <form onSubmit={ (event) => onFormSubmit(event) }> 
            Debido a que es un callback que regresa un event y ese mismo lo 
            enviamos al onFormSubmit no es necesario especificarlo
        */}
        
            <input 
                type="text"
                placeholder="Buscar gifs"
                value= { inputValue }
                /* onChange={ (event) => onInputChange(event) } */
                //es lo mismo por que como el argumento que se envia es el mismo que se recibe
                onChange={ onInputChange }
             />
        </form>
  )
}
