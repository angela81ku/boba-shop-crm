import drinkService from "./drink-service"; // import user-service so we can fetch a single user

const {useState, useEffect} = React; // import React's hooks
const {useParams, useHistory} = window.ReactRouterDOM; // import userParams to parse parameters from URL import useHistory

import 'react-confirm-alert/src/react-confirm-alert.css';

const DrinkFormEditor = () => {
    const {id} = useParams()// parse "id" from URL
    const [drink, setDrink] = useState({})
    useEffect(() => { // on load
        if(id !== "new") {
            findDrinkById(id)
        }
    }, []);
    const createDrink = (drink) =>
        drinkService.createDrink(drink)
            .then(() => {
                alert("the drink is created");
            })

    const findDrinkById = (id) =>// fetch a single user using their ID
        drinkService.findDrinkById(id)// use user service's new findUserById
            .then(drink => setDrink(drink)) //// store user from server to local user state variable

    const updateDrink = (id, newDrink) =>
        drinkService.updateDrink(id, newDrink)
            .then(() => history.back())


    return (
        <div>
            <h2>Drink Editor</h2>
            <label>Drink Name</label>
            <br/>
            <input
                onChange={(e) =>
                    setDrink(drink =>
                        ({...drink, name: e.target.value}))}
                value={drink.name}/>
            <br/>

            <label>Price</label>
            <br/>
            <input
                onChange={(e) =>
                    setDrink(drink =>
                        ({...drink, price: e.target.value}))}
                value={drink.price}/>
            <br/>
            <br/>

            <button className="btn btn-warning"// add a button
                    onClick={() => { // when you click,use history to go back
                        history.back()}}>
                Back
            </button>


            <button className="btn btn-success"
                    onClick={() => createDrink(drink)}>
                Create Drink
            </button>

            <button className="btn btn-primary"
                    onClick={() => updateDrink(drink.id, drink)}>
                Save
            </button>

        </div>

    )
}

export default DrinkFormEditor