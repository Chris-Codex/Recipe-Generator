import { createContext, useState } from "react"


export const SearchContext = createContext()

export const SearchProvider = ({ children }) => {
    const [ingredient, setIngredient] = useState(false)
    const [quantity, setQuantity] = useState(false);
    const [cookingTime, setCookingTime] = useState(false);
    const [numberOfIngredients, setNumberOfIngredients] = useState(false);
    const [mealType, setMealType] = useState(false);
    const [toggleSearchForm, setToggleSearch] = useState(false);
    const [toggleDropdown, setToggleDropdown] = useState(false);


    const handleSearchToggle = () => {
        setToggleSearch((prevState) => !prevState);
    };

    const handleFormDropdownToggle = () => {
        setToggleDropdown((prevState) => !prevState);
    };

    const value = {
        ingredient,
        setIngredient,
        quantity,
        setQuantity,
        cookingTime,
        setCookingTime,
        numberOfIngredients,
        setNumberOfIngredients,
        mealType,
        setMealType,
        toggleSearchForm,
        handleSearchToggle,
        toggleDropdown, setToggleDropdown,
        handleFormDropdownToggle
    }

    return <SearchContext.Provider value={value}>
        {children}
    </SearchContext.Provider>
}