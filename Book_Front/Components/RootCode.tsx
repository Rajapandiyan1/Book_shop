"use client"
import store from '@/Store/BookStore'
import React from 'react'
import { Provider } from 'react-redux'

function RootCode({children,inter}) {
  return (
    
<html lang="en">
      <body className={inter.className}>
        <div className="container-fluid">
          <Provider store={store}>
            {children}
          </Provider>
        </div>
      </body>
    </html>
  )
}

export default RootCode