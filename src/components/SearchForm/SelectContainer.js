import React, { Component } from 'react';
import {
  Select
} from 'antd';
// import shortid from 'shortid';

const Option = Select.Option;

const OptionsList = ( options ) => {

  const opts = options.map((item) => {
    // console.log(item)

    const isDisabled = item.disabled;
    // i'm doing this for the sake of logic. right now we're using label, value.
    // but we should use id and label
    // const key   = item.id;
    const value = item.value;
    const label = item.label;

    return (
      <Option key={value} disabled={isDisabled}>
        {label}
      </Option>
    )
  });

  return opts;

};



class SelectContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // list       : props.list,
      flag       : props.flag,
      // selected     : [],
      // name       : ( (props.flag) ? 'allowed' : 'excluded' ) + props.placeholder,
      name       : 'the_name',
      placeholder: props.placeholder
    }
    // console.log(props.placeholder)
    // this.handleChange  = this.handleChange.bind(this);


  }

  // handleChange(items) {
  //   this.props.onChange(items)
  // }


  //
  // <Select mode="multiple"
  //         style={{ width: '100%' }}
  //         onChange={this.handleChange}
  //         placeholder={this.state.placeholder}>
  //       {OptionsList(options)}
  // </Select>
  render() {

      const options = this.props.options;

      // console.log(this.props.disabled)

      return (
        <Select mode="multiple"
                style={{ width: '100%' }}
                
                placeholder={this.state.placeholder}>
              {OptionsList(options)}
        </Select>
      );

  }



};

export default SelectContainer;
// https://ant.design/components/select/#components-select-demo-select-users
