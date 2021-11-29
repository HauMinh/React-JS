import React, {Component} from 'react';
class FormErrors extends Component {
    constructor(props){
        super(props);
        this.state = {
            formErrors:""
        }
    
    }

    renderE = ()=>  {
        let formErrors = this.props.formErrors;
        if( Object.keys(formErrors).length > 0){
            return  Object.keys(formErrors).map((key, i) =>{ 
                return (
                    <p>{formErrors[key]}</p>
                )
            })
        }
    }

    
    render() {
        // let formErrors = this.state.formErrors;
        return(
            <div className="formErrors">
               {this.renderE()}
            </div>
        );
    }
}
export default FormErrors;