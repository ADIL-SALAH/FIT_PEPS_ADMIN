"use client"
import { useQuery } from '@tanstack/react-query'
import { BASE_URL } from '../urls/urls'
import useBearerToken from './useBearerToken'

export const useQueryFetch = (url: any) => {

    const token = useBearerToken()

    const { data: fetchedData, refetch } = useQuery([url], () =>

        fetch(BASE_URL + url, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            }
        }).then(res =>
            res.json()
        )
    )
    // console.log(fetchedData, 'ppppppppppppp')

    return { fetchedData: fetchedData?.result, refetch }

}


export const useQueryFetch2 = (url: any, page: any, limit: any, search: any,) => {

    const token = useBearerToken()

    const { data: fetchedData, refetch } = useQuery([url], () =>

        fetch(BASE_URL + url + `?page=${page}&limit=${limit}` + search, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            }
        }).then(res =>
            res.json()
        )
    )

    return { fetchedData: fetchedData?.result, refetch }

}


export const useQueryFetchByCode = (url: any, code: any) => {

    const token = useBearerToken()

    const { data: fetchedData, refetch } = useQuery([url, code], () =>
        fetch(`${BASE_URL + url + '/' + code}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            }
        }).then(res =>
            res.json()
        )
    )

    return { fetchedData: fetchedData?.result, refetch }
}

export const useQueryFetchById = (url: any, id: any) => {

    const token = useBearerToken()

    const { data: fetchedData, refetch } = useQuery([url, id], () =>
        fetch(`${BASE_URL + url + '/' + id}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            }
        }).then(res =>
            res.json()
        )
    )

    return { fetchedData: fetchedData?.result, refetch }
}
