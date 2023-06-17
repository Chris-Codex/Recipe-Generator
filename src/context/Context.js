import { createContext, useState } from "react"


export const SearchContext = createContext()

export const SearchProvider = ({ children }) => {
    const [ingredient, setIngredient] = useState(false)
    const [quantity, setQuantity] = useState(false);
    const [cookingTime, setCookingTime] = useState(false);
    const [numberOfIngredients, setNumberOfIngredients] = useState(false);
    const [mealType, setMealType] = useState(false);

    const handleIngredientForm = () => {
        setIngredient((prevState) => !prevState)
    }

    const handleQuantity = () => {
        setQuantity((prevState) => !prevState)
    }

    const handleCokingTime = () => {
        setCookingTime((prevState) => !prevState)
    }

    const handleNumberOfIngredients = () => {
        setNumberOfIngredients((prevState) => !prevState)
    }

    const handleMealType = () => {
        setMealType((prevState) => !prevState)
    }

    const value = {
        ingredient,
        setIngredient,
        handleIngredientForm,
        quantity,
        setQuantity,
        handleQuantity,
        cookingTime,
        setCookingTime,
        handleCokingTime,
        numberOfIngredients,
        setNumberOfIngredients,
        handleNumberOfIngredients,
        mealType,
        setMealType,
        handleMealType,
    }

    return <SearchContext.Provider value={value}>
        {children}
    </SearchContext.Provider>
}