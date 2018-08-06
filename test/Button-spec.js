import { shallow } from 'enzyme'
import React from 'react'

import chai, { expect } from 'chai'
import { spy } from 'sinon'
import sinonChai from 'sinon-chai'

import Button from '../src/components/Button'

chai.use(sinonChai)

describe('Button Component', () => {

    it('should contain a button element', () => {
        let wrapper = shallow(<Button />)
        expect(wrapper.find('button')).to.have.length(1)
    })

    it('should display the value it is passed', () => {
        let wrapper = shallow(<Button value="+" />)
        expect(wrapper.find({label: "+"}).text()).to.be.equal("+")
    })

    it('should call provided function', () => {
        let clickySpy = spy()
        let wrapper = shallow(<Button value="9" onClick={clickySpy}/>)
        wrapper.find('button').simulate("click")
        expect(clickySpy.called).to.be.true
    })

})
