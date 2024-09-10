import React from 'react'

export default function Layout({children}) {
  return (
    <>
    <div class=" flex justify-center items-center  md:p-1 gap-14 h-screen">
        {children}
    </div>
    </>
  )
}
