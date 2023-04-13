import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'
import LabelAndInput from '../common/form/LabelAndInput';

class BillingCycleForm extends Component {
    
    render(){

        const { handleSubmit } = this.props
        return(
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='name'  component={LabelAndInput}
                        label='Nome' cols='12 4' placeholder='Infrome o nome'/>
                    <Field name='month'   component={LabelAndInput} 
                        label='Mês' cols='12 4' placeholder='Infrome o mês' type='number'/>
                    <Field name='year' component={LabelAndInput}
                        label='Ano' cols='12 4' placeholder='Infrome o ano' type='number' />
                </div>
                <div className="box-footer">
                    <button className="btn btn-primary" type='submit'>Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)