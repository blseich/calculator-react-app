import { shallow } from 'enzyme'
import React from 'react'

import { expect } from 'chai'

import Numbers from '../src/components/Numbers'
import Button from '../src/components/Button'

describe('Numbers Component', () => {
    let wrapper
    beforeEach('Initialize Numbers Component', () => {
        wrapper = shallow(<Numbers />)
    })

    it('should contain 10 Button components', () => {
        expect(wrapper.find(Button)).to.have.length(10)
    })

    for(let i = 0; i <= 9; i++){
        it(`should have one Button with label "${i}"`, () => {
            expect(wrapper.find(`[value="${i}"]`)).to.have.length(1)
        })
    }
    
})