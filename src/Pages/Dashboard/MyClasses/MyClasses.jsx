import useEnroll from "../../../Hooks/useEnroll";

const MyClasses = () => {
    const [enroll]=useEnroll();
    const total=enroll.reduce((sum,item)=>item.price+sum,0)

    return (
        <div className="uppercase">
            <h3 className="text-3xl">My Selected Classes: {enroll.length}</h3>
            <h3 className="text-3xl">Total Price: ${total}</h3>
            <button className="btn btn-warning btn-sm">PAY</button>
        </div>
    );
};

export default MyClasses;