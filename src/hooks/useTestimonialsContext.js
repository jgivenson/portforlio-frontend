import { TestimonialsContext } from "../context/TestimonialContext";
import { useContext } from "react";

export const useTestimonialsContext = () =>{
    const context = useContext(TestimonialsContext);
    
    if(!context)
    {
        throw Error("useTestimonialsContext must be used inside a TestimonialsContextProvider");
    }
    return context;
}