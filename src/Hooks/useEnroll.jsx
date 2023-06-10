import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const useEnroll = () => {
    const { user } = useContext(AuthContext);

    const { refetch, data: enrolled = [] } = useQuery({
        queryKey: ['enrolled', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/enrolled?email=${user.email}`)
            return res.json();
        }
    })

    return [enrolled, refetch]

}
export default useEnroll;
