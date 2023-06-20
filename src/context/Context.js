import { createContext, useState } from "react"


export const SearchContext = createContext()

export const SearchProvider = ({ children }) => {
    const [selectedIngredient, setSelectIngredient] = useState("");
    const [quantity, setQuantity] = useState("");
    const [availableCookingTime, setAvailableCookingTime] = useState("");
    const [numberOfIngredient, setNumberOfIngredient] = useState("");
    const [mealType, setMealType] = useState("");
    const [toggleSearchForm, setToggleSearch] = useState(false);
    const [toggleDropdown, setToggleDropdown] = useState(false);


    //This function toggles the state of toggleSearchForm variable between true and false.
    const handleSearchToggle = () => {
        setToggleSearch((prevState) => !prevState);
    };

    //This function toggles the state of toggleDropdown variable between true and false.
    const handleFormDropdownToggle = () => {
        setToggleDropdown((prevState) => !prevState);
    };

    //This is a helper function that slice text
    const shortenText = (text, num) => {
        if (text.length > num) {
            return text.slice(0, num) + "..."
        } else {
            return text
        }
    }

    const value = {
        shortenText,
        selectedIngredient,
        setSelectIngredient,
        quantity,
        setQuantity,
        availableCookingTime,
        setAvailableCookingTime,
        numberOfIngredient,
        setNumberOfIngredient,
        mealType,
        setMealType,
        toggleSearchForm,
        handleSearchToggle,
        toggleDropdown, setToggleDropdown,
        handleFormDropdownToggle,
        setToggleSearch
    }

    return <SearchContext.Provider value={value}>
        {children}
    </SearchContext.Provider>
}