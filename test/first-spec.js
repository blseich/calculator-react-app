import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { expect } from 'chai'

Enzyme.configure({ adapter: new Adapter() })

describe("Our First Test", () => {

    it('should run some tests', () => {
        expect(true).to.be.equal(true)
    })

})