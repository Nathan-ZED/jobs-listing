import React, {useContext, useState} from "react";
import './Card.css'
import {FilterContext} from "../../context/FilterContext";

type Props = {
    logo: string,
    new: boolean,
    featured: boolean,
    position: string,
    postedAt: string,
    location: string,
    role: string,
    company: string,
    contract: string,
    level: string,
    tools: [],
}

function Card(props:Props) {

    const Filter = useContext(FilterContext)
    const [clickedFilter, setClickedFilter] = useState<any>()

    const {
        logo,
        featured,
        position,
        postedAt,
        location,
        role,
        company,
        contract,
        level,
        tools
    } = props;


    const addFilter = (e:any) => {
        const value = e.currentTarget.textContent
        e.preventDefault()
        setClickedFilter(value)
        Filter.newFilter(value)
    }

    return(
        <li>
            <div className={'left-block'}>
                <img src={logo} alt={company} />
                <div className={'text-block'}>
                    <div className={'row-left'}>
                        <h2>{company}</h2>
                        {
                            props.new
                                ? <span className={'new-badge'}>New!</span>
                                : null
                        }
                        {
                            featured
                                ?  <span className={'featured-badge'}>Featured</span>
                                : null
                        }
                    </div>
                    <div className={'col-left'}>
                        <h1>{position}</h1>
                        <div className={'row-left-bottom conditions'}>
                            <p>{postedAt}</p>
                                <p>•</p>
                            <p>{contract}</p>
                                <p>•</p>
                            <p>{location}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'right-block'}>
                <button onClick={(e) => addFilter(e)} className={'category-badge'}>{role}</button>
                <button onClick={(e) => addFilter(e)} className={'category-badge'}>{level}</button>
                {tools.length > 0
                    ? tools.map((tool:any, i:number) => (
                        <button key={i} onClick={(e) => addFilter(e)} className={'category-badge'}>{tool}</button>
                    ))
                    :null
                }
            </div>
        </li>
    )
}

export default Card