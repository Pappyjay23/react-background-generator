import React from 'react'

function Home({getInputValue1, getInputValue2, input1, input2, text}) {
    return (
        <div className='home'>
            <h1>Background generator</h1>
            <p>{text}</p>
            <div className='color-group'>
                <input onChange={getInputValue1} type="color" />
                <input onChange={getInputValue2} type="color" />
            </div>
            <p>Click above 👆 to create your gradient</p>
        </div>
    )
}

export default Home
