import React from 'react'
import { render } from '@testing-library/react'
import ResultDisplay from './ResultDisplay'
describe('Mount ResultDisplay', () => { 
    test('Render ResultDisplay in React',()=>{
        render(<ResultDisplay />)
    })
 })