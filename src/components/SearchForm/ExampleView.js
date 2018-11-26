import SearchForm from './SearchForm'
import 'antd/dist/antd.css';

class Example extends Component {

  constructor(props) {
    super(props);

    // this.state = {
    //   // name       : ( (props.flag) ? 'allowed' : 'excluded' ) + props.placeholder,
    //   name       : 'the_name',
    //   placeholder: props.placeholder
    // }
    // console.log(props.placeholder)
    // this.handleChange  = this.handleChange.bind(this);


  }

  // handleChange(items) {
  //   // console.log(items);
  //   this.props.onChange(items)
  // }


  render() {

      // const options = this.props.options;


      return (
        <SearchForm />
        <Select mode="multiple"
                style={{ width: '100%' }}
                onChange={this.handleChange}
                placeholder={this.state.placeholder}>
              {OptionsList(options)}
        </Select>
      );

  }



};

export default ExampleView;
