import React from 'react'
import './Converter.css'

const Converter = () => {
    const now = new Date()
    const date = now.getDate() + '-0' + (now.getMonth() + 1) + "-" + now.getFullYear();
    
    return(
        <div className='converter'>
            <div className='title'>
                <h1>КОНВЕРТЕР ВАЛЮТ</h1>
                <div className='date'><span>{date}</span></div>
            </div>
            <div className='exchanges'>
                <div className='exchange'>
                    <p>Міняю</p>
                    <input type="text" placeholder="0.00" />
                    <select className="items-currency">
                        <option value="USD">USD</option>
                        <option value="GBP">GBP</option>
                        <option value="UAH">UAH</option>
                        <option value="RUR">RUR</option>
                        <option value="BYN">BYN</option>
                    </select>
                </div>

                <div className='exchange'>
                    <p>Отримую</p>
                    <input type="text" placeholder="0.00" />
                    <select className="items-currency">
                        <option value="USD">USD</option>
                        <option value="GBP">GBP</option>
                        <option value="UAH">UAH</option>
                        <option value="RUR">RUR</option>
                        <option value="BYN">BYN</option>
                    </select>
                </div>
            </div>

            <button>Розрахувати</button>
        </div>
    )
}

export default Converter