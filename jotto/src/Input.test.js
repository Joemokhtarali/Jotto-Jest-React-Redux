import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr, checkProps } from '../test/testUtils.js'
import Input from './Input'

const setupProps = {}

const setup = () => {
    return shallow(<Input />)
}

test('renders without error', () => {
    const wrapper = setup()
    const inputComponent = findByTestAttr(wrapper, 'component-input')
    expect(inputComponent.length).toBe(1)
})