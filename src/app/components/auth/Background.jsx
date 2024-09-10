import React from 'react'

export default function Background({children}) {
  return (
    <>
    <React.Fragment>
      <body className=" bg-[linear-gradient(260deg,_#614BC3,_65%,_#33BBC5)]">
        {children}
      </body>
    </React.Fragment>
    </>
  )
}
