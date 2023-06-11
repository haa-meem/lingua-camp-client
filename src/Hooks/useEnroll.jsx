import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useEnroll = () => {
    const { user } = useContext(AuthContext);
    const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: enroll = [] } = useQuery({
        queryKey: ['enrolled', user?.email],
        enabled: !!user?.email && !!token,
        queryFn: async () => {
            const res = await axiosSecure(`/enrolled?email=${user?.email}`)
            console.log('res from axios', res);
            return res.data;
        }
    })

    return [enroll, refetch]

}
export default useEnroll;
