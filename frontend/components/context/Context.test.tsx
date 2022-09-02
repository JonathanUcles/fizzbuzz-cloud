import React from 'react'
import {render} from '@testing-library/react'
import {GlobalContextProvider} from './GlobalContext'
describe("Mount Provider", ()=>{
    
    test("Render Wrapper", ()=>{
        render(<GlobalContextProvider><div>something</div></GlobalContextProvider>)
    })


})