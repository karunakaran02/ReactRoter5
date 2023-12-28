import React, { useState, useEffect } from 'react';
import { CardComponent } from './emmaCard';

const details = [{ name: 'George Bluth', email: 'george.bluth@reqres.in' }, { name: 'Janet Weaver', email: 'janet.weaver@reqres.in' }, { name: 'Emma Wong', email: 'emma.wong@reqres.in' }, { name: 'Eve Holt', email: 'eve.holt@reqres.in' }, { name: 'Charles Morris', email: 'charles.morris@reqres.in' }, { name: 'Tracey Ramos', email: 'tracey.ramos@reqres.in' }]

export const UserDetails = () => {

    const [state, setState] = useState(details)

    useEffect(() => {
        const url = window.location.href.split('/')
        const filteredValue = details.filter((data) => {
            return (data.name.includes(url[url.length - 1]))
        })
        setState(filteredValue)
    }, [])

    // const useparam = useParams();
    //    console.log('useparams',useparam)
    // const location = useLocation();
    //     console.log('location',location)

    return (
        <div id='CardComponent'>
            {
                state.map((values, index) => {
                    return (
                        <CardComponent name={values.name} email={values.email} key={index} />

                    )
                })
            }
        </div>
    )
};  