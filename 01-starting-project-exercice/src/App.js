import { useState } from "react";
import Header from "./components/Header/Header";
import ResultsTable from "./components/ResultsTable/ResultsTable";
import UserInput from "./components/UserInput/UserInput";

function App() {
  const [userInput, setResults] = useState(null);

  const calculateHandler = (userInput) => {
    setResults(userInput);
  };

  /* whenever the state changes this code gets executed */
  const yearlyData = [];
  if (userInput) {

    let currentSavings = +userInput['current-savings'];
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }


  return (
    <div>
      <Header />
      <UserInput onCalculate={calculateHandler} />
      {!userInput && <p style={{textAlign: 'center'}}>No invesment calculated yet</p>}
      {userInput && <ResultsTable dataYears={yearlyData} initialInvesment={+userInput['current-savings']} />}

    </div>
  );
}

export default App;
