import React from 'react';
import "../ExpensesTransactionsBody/ExpensesTransactionsBody.css";
import useCustChartData from '../customChartData/useCustChartData';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const ExpenseTopBody = () => {
    const chartData  = useCustChartData([
            { name: 'food', value: 0 },
            { name: 'entertainment', value: 0 },
            { name: 'travel', value: 0 },
        ]);

    const showSortedData = () => {
        return chartData.sort((a,b) => b.value - a.value);
    }
    
    return (
        <div className='TopExpensesBody' style={{height: "100px"}} onClick={showSortedData}>
            <ResponsiveContainer width="100%" height="100%" >
                <BarChart data={showSortedData()} layout="vertical" barSize={30}>
                    <XAxis type='number' hide/>
                    <YAxis type="category" width={120} dataKey="name"/>
                    <Bar dataKey="value" fill="#8784D2" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ExpenseTopBody;
