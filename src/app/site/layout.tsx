import Navigation from '@/components/site/Navigation'

import { dark } from '@clerk/themes'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
  
      <main className="h-full">
        <Navigation />
        {children}
      </main>

  )
}

export default layout