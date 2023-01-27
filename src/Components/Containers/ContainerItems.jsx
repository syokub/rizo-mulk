import styled from '@emotion/styled'
import React from 'react'

export const ContainerItems = ({children}) => {

    const Container = styled.div`
        width:auto !important;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    `;

  return (
      <Container>{children}</Container>
  )
}

export default  ContainerItems;