import React, { Component, Fragment } from 'react';
import {
  Form,
  Input,
  Col,
  Button
} from 'antd';
import Select from 'react-select';
import Animated from 'react-select/lib/animated';
import _ from 'lodash';


//@TODO test it later with IDS instead of text at values
const options = [
  { value: 'chocolate',  label: 'Chocolate',  isDisabled: false },
  { value: 'strawberry', label: 'Strawberry', isDisabled: false },
  { value: 'vanilla',    label: 'Vanilla',    isDisabled: false },
  { value: 'vanilla-ice',    label: 'Vanilla Ice',    isDisabled: false },
  { value: 'vanilla latte',    label: 'Vanilla Latte',    isDisabled: false },
  { value: 'vanilla Chino',    label: 'Vanilla Chino',    isDisabled: false },
  { value: 'vanilla double',    label: 'Vanilla Double',    isDisabled: false }
];

class SearchForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      selectedOption1: null,
      selectedOption2: null
    }

    this.handleChange2       = this.handleChange2.bind(this);
    this.handleChange1       = this.handleChange1.bind(this);

    //@TODO move options array into a top of the search form. so we can pass it from one source.
    // from parent component into child component
  }

  handleChange1 = (options) => {
    // this.setState({ selectedOption1 });
    // console.log(options.value)

    var values = _.flatMap(options, function(item) {
      return item.value;
    });
    console.log(values)
    // this.setState({ selectedOption1: values });
    console.log(`Option selected:`, options);
  }

  handleChange2 = (options) => {
    var values = _.flatMap(options, function(item) {
      return item.value;
    });
    console.log(values)
    // this.setState({ selectedOption1: values });
    console.log(`Option selected:`, options);
  }

  componentDidMount() {
   // this.timerID = setInterval(
   //   () => this.tick(),
   //   1000
   // );
   console.log('mount');
 }

 componentDidUpdate(prevProps, prevState) {
   console.log('update');

   console.log(this.state.selectedOption1)
   console.log(this.state.selectedOption2)

 }

 // <Select
 //   value={selectedOption1}
 //   onChange={this.handleChange1}
 //   options={options}
 //   isMulti
 //   isSearchable
 //   components={Animated()}
 // />

  render(){
    const  selectedOption1  = this.state.selectedOption1;
    const  selectedOption2  = this.state.selectedOption2;
    return (
      <Fragment>
        <Form onSubmit={this.handleSubmit}>

            <Select
              value={selectedOption1}
              onChange={this.handleChange1}
              options={options}

            />

            <Select
              value={selectedOption2}
              onChange={this.handleChange2}
              options={options}
            />

        </Form>

        <div>
          One - {!(selectedOption1)? null : selectedOption1}
        </div>
        <div>
          Two - {!(selectedOption2)? null : selectedOption2}
        </div>


      </Fragment>
    )
  }

}
export default SearchForm;
