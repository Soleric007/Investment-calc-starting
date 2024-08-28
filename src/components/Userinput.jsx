import React from 'react'


const inputGroup1 = ['initialInvestment', 'annualInvestment']
const inputGroup2 = ['expectedReturn', 'duration']
const Userinput = ({ userinput, label, handleChange }) => {
    return (

        <div id='user-input'>
            <div className='input-group'>
                {
                    inputGroup1.map((text) => {
                        return <p>
                            <label htmlFor="">
                                {text === 'initialInvestment' ? 'Initial Investment' : 'Annual investment'}
                            </label>
                            <input type="number" required value={userinput[text]} onChange={(e) => handleChange(text, e.target.value)} />
                        </p>
                    }
                    )}

            </div>
            <div className='input-group'>
                {
                    inputGroup2.map((text) => {
                        return <p>
                    <label htmlFor="">
                        {text === 'expectedReturn' ? 'Expected Return' : 'Duration'}
                    </label>
                    <input type="number" required value={userinput[text]} onChange={(e) => handleChange(text, e.target.value)} />
                </p>
                    })
                }

            </div>

        </div>


        // <div id='user-input'>
        //     <div className='input-group'>
        //         <p>
        //             <label htmlFor="">
        //                 Initial Investment
        //             </label>
        //             <input type="text" />
        //         </p>


        //         <p>
        //             <label htmlFor="">
        //                 Annual Investment
        //             </label>
        //             <input type="text" className='input-group' />
        //         </p>

        //         <p>
        //             <label htmlFor="">
        //                 Expected Return
        //             </label>
        //             <input type="text" />
        //         </p>


        //         <p>
        //             <label htmlFor="">
        //                 Duration
        //             </label>
        //             <input type="text" />
        //         </p>
        //     </div>



        // </div>
    )
}

export default Userinput
