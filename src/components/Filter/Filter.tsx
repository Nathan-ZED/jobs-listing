import React, {useContext, useState} from "react";
import './Filter.css'
import iconRemove from './iconRemove.svg'
import {FilterContext} from "../../context/FilterContext";

type Props = {
    name:string
}

function Filter(props:Props) {

    const Filter = useContext(FilterContext)

    const remove = (name:string) => {
        Filter.removeFilter(name)
    }

    return (
        <div className={'filter'}>
            <span>{props.name}</span>
            <button onClick={() => remove(props.name)}>
                <img src={iconRemove} alt={'delete'} />
            </button>
        </div>
    )
}

export default Filter