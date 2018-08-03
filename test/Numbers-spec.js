import { shallow } from 'enzyme'
import React from 'react'

import { expect } from 'chai'

import Numbers from '../src/components/Numbers'
import Button from '../src/components/Button'
import ClearButton from '../src/components/ClearButton'
import EqualsButton from '../src/components/EqualsButton'

describe('Numbers Component', () => {
    let wrapper
    beforeEach('Initialize Numbers Component', () => {
        wrapper = shallow(<Numbers />)
    })

    it('should contain 12 Button components', () => {
        expect(wrapper.find(Button)).to.have.length(10)
    })

    for(let i = 0; i <= 9; i++){
        it(`should have one Button with label "${i}"`, () => {
            expect(wrapper.find(`[value="${i}"]`)).to.have.length(1)
        })
    }

    it('should render ClearButton Component', () => {
        expect(wrapper.find(ClearButton)).to.have.length(1)
    })

    it('should render EqualsButton Component', () => {
        expect(wrapper.find(EqualsButton)).to.have.length(1)
    })
    
})