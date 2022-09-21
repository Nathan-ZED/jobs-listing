import React, {useEffect, useState} from "react";
import Card from "../Card/Card";
import './CardList.css'

function CardList() {

    const [jobs, setJobs] = useState([])

    const getJobs = async () => {
        let result: any;
        await fetch('http://localhost:4000/jobs')
            .then(res => res.json())
            .then(res => result = res)
        setJobs(result)
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