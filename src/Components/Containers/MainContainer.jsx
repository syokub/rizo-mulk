import React from 'react'

export const MainContainer = ({children}) => {
  return (
      <div
          style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: "space-between",
          }}
      >
          {children}
      </div>
    )
    
}
export default MainContainer;


