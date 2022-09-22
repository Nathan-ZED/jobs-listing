import React, {useContext, useEffect, useState} from "react";
import Card from "../Card/Card";
import './CardList.css'
import {FilterContext} from "../../context/FilterContext";

type Props = {
    filters: [],
}


function CardList(props:Props) {

    const [jobs, setJobs] = useState([]);
    const [jobSave, setJobSave] = useState([])
    const [prevFilters, setPrevFilters] = useState(props.filters)
    const Filter = useContext(FilterContext);

    const { filters } = props;
    const filterJobs:any = [];
    const getJobs = async () => {
        let result: any;
        await fetch('http://localhost:4000/jobs')
            .then(res => res.json())
            .then(res => result = res)
        setJobs(result)
        setJobSave(result)
    }

    if(prevFilters !== filters) {
        setPrevFilters(filters)
            filters.forEach((filter:any) => {
                jobSave.forEach((job:any) => {
                    if(job.role === filter) {
                        filterJobs.push(job)
                    }
                    if(job.level === filter) {
                        filterJobs.push(job)
                    }
                            // job.tools.forEach((tool:any) => {
                            //     if(tool === filter) {
                            //         console.log('tools')
                            //         filterJobs.push(job)
                            //     }
                            // })
                })
            })

        const noDoublonsFiltered = filterJobs.filter(function(ele:any , pos:any){
            return filterJobs.indexOf(ele) === pos;
        })


        filters.length > 0 ? setJobs(noDoublonsFiltered) : setJobs(jobSave)

    }

    useEffect(() => {
        getJobs()
    }, [])

    return(
        <ul>
            {jobs.map((job:any) => (
                <Card
                    key={job.id}
                    contract={job.contract}
                    logo={job.logo}
                    new={job.new}
                    featured={job.featured}
                    position={job.position}
                    postedAt={job.postedAt}
                    location={job.location}
                    role={job.role}
                    company={job.company}
                    tools={job.tools}
                    level={job.level}
                />
            ))}
        </ul>
    )
}

export default CardList