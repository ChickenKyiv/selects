import React, { Component, Fragment } from 'react';
import {
  Form,
  // Input,
  // Col,
  // Button,

} from 'antd';


// import _ from 'lodash';

// import SelectContainer from './SelectContainer';
import FormElementsLayout from './FormElementsLayout';
// import GroupedElements from './GroupedElements';




import {
  getFormattedAttributes,
  getPlaceholder,

  getFormattedIngredients,
  toOpt,
  toOptAntD
} from "../selectors/selector"



//@TODO test it later with IDS instead of text at values

//@TODO update it with fetching data from server

//@TODO update for graphql work

const options = [
  { value: 'chocolate',  label: 'Chocolate'},
  { value: 'strawberry', label: 'Strawberry'},
  { value: 'vanilla',    label: 'Vanilla'  },
  { value: 'vanilla-ice',    label: 'Vanilla Ice'},
  { value: 'vanilla latte',    label: 'Vanilla Latte'},
  { value: 'vanilla Chino',    label: 'Vanilla Chino'},
  { value: 'vanilla double',    label: 'Vanilla Double' }
];




// @TODO this component can do better just by calling a different db queries for each of select.
// so it's not necessary to manipulate it in this way.

class SearchForm extends Component {

  // constructor(props) {
  //   super(props)
  //
  //   // this.proceedDisabledOptions = this.proceedDisabledOptions.bind(this);
  //
  //   //@TODO move options array into a top of the search form. so we can pass it from one source.
  //   // from parent component into child component
  // }




 //  componentDidMount() {
 //   console.log('mount');
 // }


 componentDidUpdate(prevProps, prevState) {
   // console.log('update');




 }

  render(){

    // const  = this.state.option2;

    const ingredientsData = toOptAntD( getFormattedIngredients() );
    const ingredientsData2 = toOptAntD( getFormattedIngredients() );

    console.log(ingredientsData);
    console.log(ingredientsData2);

    const attributeData   = toOptAntD( getFormattedAttributes('holidays') );
    const attributeData1   = toOptAntD( getFormattedAttributes('holidays') );

    const attributeData2  = toOptAntD( getFormattedAttributes('diets') );
    const attributeData21  = toOptAntD( getFormattedAttributes('diets') );


    return (
      <Fragment>
        <Form onSubmit={this.handleSubmit}>


          <FormElementsLayout options1={attributeData} options2={attributeData1} />

        </Form>


      </Fragment>
    )
  }

}
export default SearchForm;
