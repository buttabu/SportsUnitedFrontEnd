import React, { Component } from 'react';
import { Field } from 'redux-form'
import Select from 'react-select';
import match from 'utils/validation';

// ===============================
// ====== REDUX RENDER FORM ======
// ===============================

export const RenderInput = ({field, label, labelClassName, inputClassName, placeholder='', type='text'}) => {
  return(
    <div className={`form-group ${field.error && field.touched ? 'has-error' : ''}`}>
      <label className={labelClassName}>{label}</label>
      <div className={inputClassName}>
        <input type={type} className="form-control" name={field.name} placeholder={placeholder} {...field} />
        {field.error && field.touched && <span className="glyphicon glyphicon-remove form-control-feedback"></span>}
        {field.error && field.touched && <div className="text-danger"><strong>{field.error}</strong></div>}
      </div>
    </div>
  )
}

// export class RenderInput extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render(){
//     const {field, label, labelClassName, inputClassName, validate, placeholder='', type='text'} = this.props;
//     const renderField = ({input, meta, label, labelClassName, inputClassName, placeholder, type}) => {
//       return(
//         <div className={`form-group ${meta.error && meta.touched ? 'has-error' : ''}`}>
//           <label className={labelClassName}>{label}</label>
//           <div className={inputClassName}>
//             <input {...input} />
//             {meta.error && meta.touched && <span className="glyphicon glyphicon-remove form-control-feedback"></span>}
//             {meta.error && meta.touched && <div className="text-danger"><strong>{meta.error}</strong></div>}
//           </div>
//         </div>
//       )
//     }
//     return(
//       <Field name={field.name} label={label} labelClassName={labelClassName} inputClassName={inputClassName} 
//         placeholder={placeholder} type={type} component={renderField} validate={validate ? [match(validate, field.value)] : ''} />
//     )
//   }
// }

export class RenderSelect extends Component {
  constructor(props) {
    super(props);
  }
  handleChange = (value) => {
    if (!value) 
      return this.props.onChange(null)

    return value.value ? this.props.onChange({ value }) : this.props.onChange(value)
  }
  handleBlur = () => {
    const { value } = this.props;
    if (!value) return this.props.onBlur(null)
    return value.value ? this.props.onBlur({ value }) : this.props.onBlur(value)
  }
  render() {
    const { field, value, options, label, labelClassName, inputClassName, placeholder} = this.props;
    return(
      <div className={`form-group ${field.error && field.touched ? 'has-error' : ''}`}>
        <label className={labelClassName}>{label}</label>
        <div className={inputClassName}>
          <Select
            name={field.name}
            value={value || ''}
            placeholder={placeholder || ''}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            options={options}
          />
          {field.error && field.touched && <div className="text-danger"><strong>{field.error}</strong></div>}
      </div>
    </div>
    )
  }
}


export const RenderButton = ({className, buttonClassName, label}) => {
  return(
    <div className={className}>
      <button className={"btn btn-default btn-md "+ buttonClassName}>
        {label}
      </button>
    </div>
  );
}


