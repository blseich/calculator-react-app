import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React, { Component } from 'react'
import { expect } from 'chai'

import App from '../src/App'
import Display from '../src/components/Display'
import InteractiveArea from '../src/components/InteractiveArea'
import Button from '../src/components/Button'

import jsdom from 'jsdom'
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc
global.window = doc.defaultView

Enzyme.configure({ adapter: new Adapter() })

describe("App Test", () => {
    let wrapper
    beforeEach('Mount App', () => {
        wrapper = mount(<App />)
    })

    describe('Render App', () =>{
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

    describe('Add Numbers to Display', () => {
        it('should change number on display when number is pressed', () => {

            let button3 = wrapper.find({label: "3"})
            button3.simulate('click')

            let display = wrapper.find(Display)
            expect(display.text()).to.be.equal("3")
        })

        it('should append number on display when number is pressed and display isn\'t 0', () => {

            wrapper.find({label: "5"}).simulate('click')
            wrapper.find({label: "9"}).simulate('click')

            let display = wrapper.find(Display)
            expect(display.text()).to.be.equal("59")
        })
    })

    describe('Add Operators to Display', () => {
        it('should NOT add operator when display is 0', () => {

            let button3 = wrapper.find({label: "/"})
            button3.simulate('click')

            let display = wrapper.find(Display)
            expect(display.text()).to.be.equal("0")
        })

        it('should add operator when display is NOT 0', () => {

            wrapper.find({label: "4"}).simulate('click')
            wrapper.find({label: "*"}).simulate('click')

            let display = wrapper.find(Display)
            expect(display.text()).to.be.equal("4*")
        })

        it('should NOT add operator when last character is an operator', () => {

            wrapper.find({label: "2"}).simulate('click')
            wrapper.find({label: "-"}).simulate('click')
            wrapper.find({label: "+"}).simulate('click')

            let display = wrapper.find(Display)
            expect(display.text()).to.be.equal("2-")
        })

        it('should add number after an operator', () => {

            wrapper.find({label: "7"}).simulate('click')
            wrapper.find({label: "+"}).simulate('click')
            wrapper.find({label: "8"}).simulate('click')

            let display = wrapper.find(Display)
            expect(display.text()).to.be.equal("7+8")
        })
    })

    describe('Clear Display', () => {
        it('should display 0 when clear button is pressed', () => {
            wrapper.find({label: "2"}).simulate('click')
            wrapper.find({label: "-"}).simulate('click')

            let display = wrapper.find(Display)
            expect(display.text()).to.be.equal("2-")

            wrapper.find({label: "clr"}).simulate('click')
            expect(display.text()).to.be.equal("0")
        })
    })

    describe('Equals Functionality', () => {
        it('should evaluate expression when equals button is pressed', () => {
            wrapper.find({label: "2"}).simulate('click')
            wrapper.find({label: "+"}).simulate('click')
            wrapper.find({label: "7"}).simulate('click')

            let display = wrapper.find(Display)
            expect(display.text()).to.be.equal("2+7")

            wrapper.find({label: "="}).simulate('click')
            expect(display.text()).to.be.equal("9")
        })

        it('should NOT evaluate expression when equals button is pressed and last char is an operator', () => {
            wrapper.find({label: "8"}).simulate('click')
            wrapper.find({label: "*"}).simulate('click')
            wrapper.find({label: "9"}).simulate('click')
            wrapper.find({label: "-"}).simulate('click')

            let display = wrapper.find(Display)
            expect(display.text()).to.be.equal("8*9-")

            wrapper.find({label: "="}).simulate('click')
            expect(display.text()).to.be.equal("8*9-")
        })
    })
})
