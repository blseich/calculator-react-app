import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React, { Component } from 'react'
import { expect } from 'chai'
import App from '../src/App'
import Display from '../src/components/Display'
import InteractiveArea from '../src/components/InteractiveArea'

Enzyme.configure({ adapter: new Adapter() })

describe("App Test", () => {
    let wrapper
    beforeEach('Render App', () => {
        wrapper = shallow(<App />)
    })

    it('should render Display', () => {
        expect(wrapper.find(Display)).to.have.length(1)
    })

    it('should pass 0 to Display initially', () => {
        expect(wrapper.find(Display).props().value).to.be.equal('0')
    })

    it('should render InteractiveArea', () => {
        expect(wrapper.find(InteractiveArea)).to.have.length(1)
    })
})