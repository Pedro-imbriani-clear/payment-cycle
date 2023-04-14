import React, {Component} from 'react'
import { Field } from 'redux-form'
import Input from '../common/form/input'

import Grid from '../common/layout/grid'

class CreditList extends Component {

    renderRows(){
        const list = this.props.list || []
        return list.map((item,index)=>(
            <tr key={index}>
                <td><Field name={`credits[${index}].name`} component={Input}
               /></td>
                <td><Field name={`credits[${index}].value`} component={Input}
                 placeholder='Informe o valor' readOnly={this.props.readOnly}/></td>
            </tr>
    
        ))
    
    }

    render(){
        return(
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>Créditos</legend>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}

export default CreditList