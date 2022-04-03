import axios from "axios";
import { useState, useEffect } from "react";

export function useApi(url,request) {
    const [dataApi,setDataApi] = useState([])

    useEffect(()=>{
        axios.get(url)
            .then(response => {
                setDataApi(response.data)
            })

    }, []);

    return { dataApi }
}

