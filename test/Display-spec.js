import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React, { Component } from 'react'
import { expect } from 'chai'
import Display from '../src/components/Display'

Enzyme.configure({ adapter: new Adapter() })

describe('Display Component', () => {

    it('should display passed value', () => {
        let wrapper = shallow(<Display value="1234"/>)
        expect(wrapper.text()).to.be.equal('1234')
    })

})