import React, {useState, useEffect} from 'react'

const Table = () => {
    const [data, setDtate] = useState([])
    
    const getData = async() => {
        // const res = await fetch('https://data.covid19india.org/v4/min/data.min.json')
        const res = await fetch('https://api.rootnet.in/covid19-in/stats/latest.json')
        const actualData = await res.json()

        console.log(actualData.data.regional);
        setDtate(actualData.data.regional)
        JSON.stringify(data)
    }
    
    useEffect(() => {
        getData()     
    }, [])
    return (
        <div>
            
            <div className="table-responsive">
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">State</th>
                        <th scope="col">Confirmed</th>
                        <th scope="col">Recovered</th>
                        <th scope="col">Deaths</th>
                        {/* <th scope="col">Active</th>
                        <th scope="col">Updated</th> */}
                    </tr>
                </thead>
                <tbody>
                {
                data.map((curElem, ind) => {
                    return (
                        <tr key={ind}>
                                <th className='text-start'>{curElem.loc}</th>
                                <td>{curElem.confirmedCasesIndian}</td>
                                <td>{curElem.discharged}</td>
                                <td>{curElem.deaths}</td>
                                {/* <td>{curElem.active}</td>
                                <td>{curElem.lastupdatedtime}</td> */}
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>

        
        </div>
    )
}

export default Table
