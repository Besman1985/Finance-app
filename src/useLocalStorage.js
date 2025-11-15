

import { useState, useEffect } from "react";



function useLocalStorage(key, defaultValue) {

    const [value, setValue] = useState(() => {
        try {
            const storedValue = window.localStorage.getItem(key);
            if (storedValue) {
                
                return JSON.parse(storedValue);
            } return defaultValue;

        } catch (error) {
            console.error('Ошибка при чтении LocalStorage:', error);
            return defaultValue;
        }
    });

    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error('Ошибка при записи в LocalStorage:', error);
        }

    }, [key, value])

    return [value, setValue];
}



export default useLocalStorage;