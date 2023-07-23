import React from 'react'
import StackNavigation from './src/Navigations/Stack'
import AllContexts from './src/Context/AllContexts'

const App = () => (
  <>
    <AllContexts>
      <StackNavigation />
    </AllContexts>
  </>
)

export default App