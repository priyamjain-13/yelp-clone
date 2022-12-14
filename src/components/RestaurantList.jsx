import React, { useEffect , useContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";

const RestaurantList = (props) => {
  const { Restaurants, setRestaurants } = useContext(RestaurantsContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get("/");
        console.log(response.data.data);
        setRestaurants(response.data.data.restaurant);
        console.log(Restaurants)
      } catch (err) {}
    };

    fetchData();
  }, []); //the array is an empty dependency that we have to pass in useEffect hook augdisgu

  return (
    <div className="list-group">
      <table className="table table-hover table-dark">
        <thead>
          <tr className="bg-primary">
            <th scope="col"> Restaurant </th>
            <th scope="col"> Location </th>
            <th scope="col"> Price Range </th>
            <th scope="col"> Ratings </th>
            <th scope="col"> Edit </th>
            <th scope="col"> Delete </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> Mcdonald's </td>
            <td> New York</td>
            <td> $$ </td>
            <td> Ratings </td>
            <td>
              <button className="btn btn-warning"> Update </button>
            </td>
            <td>
              <button className="btn btn-danger"> Delete </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantList;
