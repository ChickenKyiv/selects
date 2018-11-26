import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { SearchForm2 } from '../component/SearchForm/SearchForm2';

Enzyme.configure({ adapter: new Adapter() });

describe('<SearchForm2 />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Attribute />, div);
    });
});
