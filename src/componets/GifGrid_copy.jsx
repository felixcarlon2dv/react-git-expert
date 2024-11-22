import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ( { category } ) => {

    const [ images, setImages ] = useState( [] );

    const getImges = async () =>{
        const newImages = await getGifs( category );
        setImages( newImages );
    }

    useEffect( () =>{
            getImges();
        }, []
    );
    
    return (
        <>
            <h3>{ category }</h3>

            <div className="card-grid">
                {
                    images.map( (image) => (
                            <GifItem 
                                key={ image.id }
                                { ...image } // Toma el objeto, sacale sus propiedad y mandalas como props cada una (esparcir las propiedades)
                             />
                        )
                    )
                }
            </div>
        </>
    )
};
