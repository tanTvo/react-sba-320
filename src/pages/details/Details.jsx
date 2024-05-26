import React from "react";
import "./style.scss"
import useFetch from "../../hooks/UseFetch";
import { useParams } from "react-router-dom";



const Details = () => {
    const {mediaType, id} = useParams();
    const {data, loading} = useFetch(`/movie/${mediaType}/${id}`)

    return (
        <div>Footer</div>
    )
}


export default Details