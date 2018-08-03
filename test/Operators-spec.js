import { shallow } from 'enzyme'
import React from 'react'

import { expect } from 'chai'

import Button from '../src/components/Button'
import Operators from '../src/components/Operators'

describe('Operators Component', () => {
    let wrapper
    beforeEach('Initialize Operators Component', () => {
        wrapper = shallow(<Operators />)
    })

    it('should contain 4 Button components', () => {
        expect(wrapper.find(Button)).to.have.length(4)
    })

    let labelTests = [
        {label: '+',    length: 1},
        {label: '-',    length: 1},
        {label: '/',    length: 1},
        {label: '*',    length: 1},
    ]

    labelTests.forEach((test) => {
        it(`should have one Button with label "${test.label}"`, () => {
            expect(wrapper.find(`[value="${test.label}"]`)).to.have.length(test.length)
        })
    })
    
})