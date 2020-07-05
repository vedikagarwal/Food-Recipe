import React from "react";
import style from './recipe.module.css';

const Recipe =({title,calories,image,ingredients,protien,carbo,fat}) => {

    const sum=protien+carbo+fat;
    const check=(protien/sum)*100;
    const carbf=carbo+fat;
    const carb=(carbf/sum)*100;
    console.log(check);
    if(check>15){
        return(
            <div className={style.recipe} >
                <h1>{title}</h1>
                <ol>
                    {ingredients.map(ingredient => (
                        <li>{ingredient.text}</li>
                    ))}
                </ol>
                  <h2>High protein</h2>  
                <p>Calorie content: {calories}</p>
                <img className={style.image} src ={image} alt=""/>
            </div>
        );
    }
    if(check>=12 && check<=15){
        return(
            <div className={style.recipe} >
                <h1>{title}</h1>
                <ol>
                    {ingredients.map(ingredient => (
                        <li>{ingredient.text}</li>
                    ))}
                </ol>
                  <h2>Blanced</h2>  
                <p>Calorie content: {calories}</p>
                <img className={style.image} src ={image} alt=""/>
            </div>
        );
    }
    if(carb>=50){
        return(
            <div className={style.recipe} >
                <h1>{title}</h1>
                <ol>
                    {ingredients.map(ingredient => (
                        <li>{ingredient.text}</li>
                    ))}
                </ol>
                  <h2>High carb</h2>  
                <p>Calorie content: {calories}</p>
                <img className={style.image} src ={image} alt=""/>
            </div>
        );
    }

    else{
        return(
            <div className={style.recipe} >
                <h1>{title}</h1>
                <ol>
                    {ingredients.map(ingredient => (
                        <li>{ingredient.text}</li>
                    ))}
                </ol>
                  <h2>Regular</h2>  
                <p>Calorie content: {calories}</p>
                <img className={style.image} src ={image} alt=""/>
            </div>
        );
    }

    
};

export default Recipe;