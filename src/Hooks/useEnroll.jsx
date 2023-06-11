import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useEnroll = () => {
    const { user, loading } = useContext(AuthContext);
    //const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: enroll = [] } = useQuery({
        queryKey: ['selectedClasses', user?.email],
        // enabled: !!user?.email && !!token,
        enabled:!loading,
        queryFn: async () => {
            const res = await axiosSecure(`/selectedClasses?email=${user?.email}`)
            console.log('res from axios', res);
            return res.data;
        }
    })

    return [enroll, refetch]

}
export default useEnroll;
