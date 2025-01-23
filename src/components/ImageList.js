import React from "react";

const ImageList  = (all_images) =>{
    // console.log(images_prop)
    // description, id, and urls are properties that are loaded with every object of image
    const images = all_images.images_prop.map (({description, id, urls})=>{
        // image.urls.regular is an API element in every object return like from 0-9 in console you can see and inside any one 
        // of them you will find regular
        return console.log(<img key={id} alt={description}  src={urls.regular}/>)


    });
    return <div>{images}</div>;
}
export default ImageList;