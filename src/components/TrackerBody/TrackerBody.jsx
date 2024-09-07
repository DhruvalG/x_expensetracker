import "./TrackerBody.css";
import ExpensesTransactions from '../ExpensesTransactions/ExpensesTransactions';
import ExpensesTop from '../ExpensesTop/ExpensesTop';

const TrackerBody = () => {
    return (
        <div className='AppBody'>
            <ExpensesTransactions />
            <ExpensesTop />
        </div>
    );
};

export default TrackerBody;