import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './UseAxiosSecure';

const useCarts = () => {

    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user.email}`)
            return res.data
        }
    })


    return [cart, refetch]
};

export default useCarts;