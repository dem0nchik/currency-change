import React from 'react'
import './Currentcurrency.css'

class Currentcurrency extends React.Component {

    renderCurrency = () => {
        let currencyTemplate = null;
        if(this.props.currency.length) {
            currencyTemplate = this.props.currency.map((item, index) => {
                return  <tr key={index}>
                            <td>{item.txt}</td>
                            <td>{item.rate}</td>
                            <td>{item.cc}</td>
                            <td>{item.exchangedate}</td>
                        </tr>
            })
        }
        return currencyTemplate
    }
    render(){
        return(
            <div className='course'>
                <h1>Готівковий курс</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Валюта</th>
                            <th>Ціна до гривні</th>
                            <th>Маркування</th>
                            <th>Дата</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderCurrency()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Currentcurrency