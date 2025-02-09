import React from "react";
import './ImageList.css'
import ImageCard from "./ImagesCard";

const ImageList  = (all_images) =>{
    // console.log(images_prop)
    
    // we give an object with the name image and access other elements of all_image by image
    // like this: image.urls.regular
    // const images = all_images.images_prop.map (image=>{
    // // description, id, and urls are properties that are loaded with every object of image
    // const images = all_images.images_prop.map (({description, id, urls})=>{
    //     // image.urls.regular is an API element in every object return like from 0-9 in console you can see and inside any one 
    //     // of them you will find regular
    //     return <img key={id} alt={description}  src={urls.regular}/>


    // });

    // using the upper images object but through ImagesCard component to settle them with good style
    const images = all_images.images_prop.map((image)=>{
        return <ImageCard key={image.id} image={image} />;

    });
    return <div className="image-list">{images}</div>;
}
export default ImageList;