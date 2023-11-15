import axios from 'axios';
import React from 'react'
import useBearerToken from './useBearerToken';

export default function useDelete(url: any, id: any) {

    const token = useBearerToken();

    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };

    axios.patch(`/${url}/${id}`,
        {
            headers
        }
    ).then(() => {
        alert("workinnnnnnnnnnnngggggggggggggggg")
    })



    return (
        <div>useDelete</div>
    )
}
