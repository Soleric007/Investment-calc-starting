import React from 'react'
import { calculateInvestmentResults } from '../util/investment'
import { formatter  } from '../util/investment'
const Result = ({ userinput }) => {
    const resultsData = calculateInvestmentResults(userinput)

    const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment
    return (

        <table id='result'>
            <thead>
                <tr>
                    <th>
                        Year
                    </th>
                    <th>
                        Investment Value
                    </th>
                    <th>
                        Interest(Year)
                    </th>
                    <th>
                        Total Interest
                    </th>
                    <th>
                        Invested Capital
                    </th>
                </tr>
            </thead>

            <tbody>
                {
                    resultsData.map((data) => {
                        const totalInterest = data.valueEndOfYear - data.annualInvestment * data.year - initialInvestment
                        const investedCapital = data.valueEndOfYear - totalInterest
                        return <tr key={data.year}>
                            <td>
                                {
                                    data.year
                                }
                            </td>
                            <td>
                                {
                                    formatter.format(data.valueEndOfYear)
                                }
                            </td>
                            <td>
                                {
                                    formatter.format(data.interest)
                                }
                            </td>
                            <td>
                                {
                                   formatter.format(totalInterest) 
                                }
                                
                            </td>
                            <td>
                                {formatter.format(investedCapital)}
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}

export default Result
