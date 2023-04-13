import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form'

import { Init } from './billingCycleActions';
import LabelAndInput from '../common/form/LabelAndInput';

class BillingCycleForm extends Component {
    
    render(){

        const { handleSubmit, readOnly } = this.props
        return(
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='name'  component={LabelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 4' placeholder='Infrome o nome'/>
                    <Field name='month'   component={LabelAndInput} readOnly={readOnly}
                        label='Mês' cols='12 4' placeholder='Infrome o mês' type='number'/>
                    <Field name='year' component={LabelAndInput} readOnly={readOnly}
                        label='Ano' cols='12 4' placeholder='Infrome o ano' type='number' />
                </div>
                <div className="box-footer">
                    <button type='submit' className="btn btn-primary">Submit</button>
                    <button type='button' className="btn btn-default"
                    onClick={this.props.Init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const mapDispatchToProps = dispatch => bindActionCreators({Init}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycleForm)