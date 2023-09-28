import classes from './ResultsTable.module.css';

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

const ResultsTable = (props) => {

    return (
        <table className={classes.result}>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {props.dataYears.map((dataYear) => (
                    <tr key={dataYear.year}>
                        <td>{dataYear.year}</td>
                        <td>{formatter.format(dataYear.savingsEndOfYear) }</td>
                        <td>{formatter.format(dataYear.yearlyInterest)}</td>
                        <td>{formatter.format(dataYear.savingsEndOfYear - props.initialInvesment - dataYear.yearlyContribution * dataYear.year)}</td>
                        <td>{formatter.format(props.initialInvesment + dataYear.yearlyContribution * dataYear.year)}</td>
                    </tr>
                ))}
            </tbody>
        </table>

    );
};

export default ResultsTable;
