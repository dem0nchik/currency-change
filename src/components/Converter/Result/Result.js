import React from 'react'
import './Result.css'

const Result = (props) => {
    const {willchange, selecttext, selectchange, result} = props.props
    return(
        <p className='result'>
            Розрахунок <span>{selecttext} {selectchange}</span> до <span>{willchange}</span> дорівнює: 
            <br/><span className='result-span'>{result}</span>
        </p>
    )
}

export default Result
