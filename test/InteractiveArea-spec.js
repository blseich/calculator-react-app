import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { expect } from 'chai'
import InteractiveArea from '../src/components/InteractiveArea'
import Operators from '../src/components/Operators'

Enzyme.configure({ adapter: new Adapter() })

describe('InteractiveArea Component', () => {
    let wrapper
    beforeEach('Render App', () => {
        wrapper = shallow(<InteractiveArea />)
    })

    it('should render Operators', () => {
        expect(wrapper.find(Operators)).to.have.length(1)
    })

})