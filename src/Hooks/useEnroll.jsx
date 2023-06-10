import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const useEnroll = () => {
    const { user } = useContext(AuthContext);
    const token = localStorage.getItem('access-token');

    const { refetch, data: enroll = [] } = useQuery({
        queryKey: ['enrolled', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/enrolled?email=${user.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return res.json();
        }
    })

    return [enroll, refetch]

}
export default useEnroll;
