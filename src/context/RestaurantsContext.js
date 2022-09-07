import React, {useState, createContext } from "react";

//useState : It is used to add react state to functional components. while you cant use hooks inside classes you can wrap your class component with a function one and use hooks from it. 


export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = (props) => {
    const [Restaurants , setRestaurants ] = useState([]);

    return(
        <RestaurantsContext.Provider value = {{Restaurants,setRestaurants}}>
            {props.children
        </RestaurantsContext.Provider>
    );
};
