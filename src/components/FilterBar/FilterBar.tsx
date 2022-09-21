import React, {useContext, useEffect, useState} from "react";
import './FilterBar.css'
import Filter from "../Filter/Filter";

type Props = {
    filter: []
}

function FilterBar(props:Props) {

    return(
        <article>
            {props.filter.map((fil:any, i:number) => <Filter key={i} name={fil} />)}
        </article>
    )
}

export default FilterBar