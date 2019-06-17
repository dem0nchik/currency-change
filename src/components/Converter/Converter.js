import React from 'react'
import './Converter.css'
import Result from './Result/Result'

class Converter extends React.Component {
    state = {
        willchange: 'AUD',
        selectchange: 'AUD',
        willtext: '',
        selecttext: '',
        result: null,
    }

    handleInputChange = (e) => {
            this.setState({ selecttext: e.currentTarget.value.replace(/([^0-9\\.])+/g,'') })
    }

    calcCurrency = () => {
        let ratewill = 0, rateselect = 0;
        const { willchange, selectchange, selecttext} = this.state;
        this.props.currency.map(item => {
            if(item.cc === selectchange)
                rateselect = item.rate;
            if(item.cc === willchange)
                ratewill = item.rate;
        })
        let num = !isNaN(selecttext) ? selecttext : 0;
        const result = (rateselect / ratewill) * num;

        this.setState({ willtext: result, result })
    }

    renderOption = () => {
        let optionTemplate = null;
        if(this.props.currency.length) {
            optionTemplate = this.props.currency.map((item, index) => {
                return  <option key={index} value={item.cc}>{item.cc}</option>
            })
        }
        return optionTemplate
    }

    changedCurrency = (e) => {
        this.setState({[e.currentTarget.id]: e.currentTarget.value})
    }

    onHandleCalc = (e) => {
        e.preventDefault();
        this.calcCurrency();
    }

    render() {
        const now = new Date()
        const date = now.getDate() + '-0' + (now.getMonth() + 1) + "-" + now.getFullYear();

        const { willtext, selecttext} = this.state
        return(
            <div className='converter'>
                <div className='title'>
                    <h1>КОНВЕРТЕР ВАЛЮТ</h1>
                    <div className='date'><span>{date}</span></div>
                </div>

                <div className='exchanges'>
                    <div className='exchange'>
                        <p>Міняю</p>
                        <input 
                                type="text"
                                placeholder="0.00"
                                value={selecttext}
                                onChange={this.handleInputChange}
                        />
                        <select
                                id='selectchange'
                                className="items-currency"
                                onChange={this.changedCurrency}
                        >
                            {this.renderOption()}
                        </select>
                    </div>

                    <div className='exchange'>
                        <p>Отримую</p>
                        <input type="text" placeholder="0.00" value={willtext} readOnly/>
                        <select 
                                id='willchange'
                                className="items-currency"
                                onChange={this.changedCurrency}
                        >
                            {this.renderOption()}
                        </select>
                    </div>
                </div>

                <button onClick={this.onHandleCalc}>Розрахувати</button>

                <Result props={this.state} />
            </div>
        )
    }
}

export default Converter