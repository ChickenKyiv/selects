import React, { Component } from 'react';
import {
  Select
} from 'antd';
// import shortid from 'shortid';

class SelectContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list       : props.list,
      flag       : props.flag,
      // selected     : [],
      // name       : ( (props.flag) ? 'allowed' : 'excluded' ) + props.placeholder,
      name       : 'the_name',
      placeholder: props.placeholder
    }
    // console.log(props.placeholder)
    this.handleChange  = this.handleChange.bind(this);


  }

  handleChange(items) {
    this.props.onChange(items)
  }




  render() {

      const options = this.state.list;
      // console.log(this.state.list)
      const opts    = options.map((item) => {
        // console.log(item)
        return (
          <Select.Option key={item}>
            {item}
          </Select.Option>
        )
      });

      // console.log(this.props.disabled)

      return (
        <Select mode="multiple"
                style={{ width: '100%' }}
                onChange={this.handleChange}
                placeholder={this.state.placeholder}>
              {opts}
        </Select>
      );

  }



};

export default SelectContainer;
// https://ant.design/components/select/#components-select-demo-select-users
