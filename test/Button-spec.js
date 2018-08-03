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
        expect(wrapper.find('.button[label="+"]')).to.have.length(1)
    })

    it('should call provided function with its provided value when clicked', () => {
        let clickySpy = spy()
        let wrapper = shallow(<Button value="9" clicky={clickySpy}/>)
        wrapper.find('button').simulate("click")
        expect(clickySpy).to.have.been.calledWith("9")
    })

})