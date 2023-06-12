import { useEffect, useState } from 'react';

const PaymentHistory = () => {
    const [history, setHistory] = useState([]);
    useEffect(() => {
        fetch('https://lingua-camp-server.vercel.app/payments')
            .then(res => res.json())
            .then(data => {
                const sortedPayments = data.sort((a, b) => new Date(b.date) - new Date(a.date));
                setHistory(sortedPayments);
            });
    }, []);

    const formatDateTime = (dateTimeString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        return new Date(dateTimeString).toLocaleString(undefined, options);
    };

    return (
        <>
            <h1 className="text-center font-bold text-5xl my-3">My Payment History</h1>
            <div className="p-6">
                <table className="w-full table-auto">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Class Name</th>
                            <th className="px-4 py-2">Date</th>
                            <th className="px-4 py-2">Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((item) => (
                            <tr key={item._id}>
                                <td className="border px-4 py-2">
                                    {item.classNames.map((className) => (
                                        <p key={className.id}>{className}</p>
                                    ))}
                                </td>
                                <td className="border px-4 py-2">{formatDateTime(item.date)}</td>
                                <td className="border px-4 py-2">${item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default PaymentHistory;
