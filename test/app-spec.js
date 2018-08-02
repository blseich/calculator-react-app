import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React, { Component } from 'react'
import { expect } from 'chai'
import App from '../src/App'
import Display from '../src/components/Display'

Enzyme.configure({ adapter: new Adapter() })

describe("App Test", () => {

    it('should render display', () => {
        const wrapper = shallow(<App />)
        expect(wrapper.find(Display)).to.have.length(1)
    })

    it('should pass 0 to Display initially', () => {
        const wrapper = shallow(<App />)
        expect(wrapper.find(Display).props().value).to.be.equal('0')
    })

})