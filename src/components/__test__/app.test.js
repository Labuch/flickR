import React from 'react';
import {shallow} from 'enzyme';
import App from '../app';
import Greeting from '../gretting';

describe('App test', () => {
    it('show the gretting component ', () => {

        const wrapper = shallow(<App/>);
        expect(wrapper.find(Greeting).length).toEqual(1);

    });
});