import { useEffect, useState } from "react";
import Job from "../Job/Job";



const FeaturedJobs = () => {

    // this is not the best way to show all data 
    const [dataLength, setDataLength] = useState(4)

    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])


    return (
        <div>
             <h2 className="text-4xl text-center font-bold">Featured Jobs: {jobs.length}</h2>
      <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>

      <div className="grid grid-cols-2 gap-6">
        {
            jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
        }
      </div>

      <div className={`${dataLength === jobs.length && 'hidden'} flex justify-center my-4`}>

      <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary ">Show All Jobs</button>
     
      </div>
        </div>
    );
};

export default FeaturedJobs;