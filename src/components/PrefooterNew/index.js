import React from 'react'
import styled from 'styled-components'

import {
  Background,
  Box,
  Column,
  Flex,
  Heading,
  Overflow,
  Relative,
  ResponsiveStack,
  P,
} from 'serverless-design-system'

import NavLink from '../NavLink'
import WhiteButton from '../WhiteButton'
import RightBoxBgNew from 'src/assets/images/footerRightBoxBgNew.png'

const FlexWithShadow = styled(Flex.horizontallyCenter)`
  box-shadow: 0 -1px 50px 0 rgba(0, 0, 0, 0.15)

  
`

const LeftColumn = ({ heading, sentences }) => (
  <Background background='white' width={[1, 1, 1/2]}>
  <FlexWithShadow
    width={1}
    boxSizing='border-box'
    flexDirection='column'
    height='100%'
    mt={[7,7,0]}
  >
    <Overflow
      o='hidden'
      width={1}
      py={[3, 5, 5]}
      px={[2, 4, 6]}
    >
        <Heading.h3
          color='black'
          fontFamily={'Soleil'}
          fontSize={5}
          letterSpacing={'-0.5px'}
        >
          {heading}
        </Heading.h3>
      {
        sentences.map((sentence, index) => (
          ( typeof sentence === 'string' ) ? (
            <P color='black' mt={0} key={index}>
              {sentence}
            </P>
          ) : (
            <React.Fragment key={index}>
              {sentence}
            </React.Fragment>
          )
        ))
      }
    </Overflow>
  </FlexWithShadow>
  </Background>
)

const RightColumn = ({ actions }) => (
  <Column>
    {actions.map(({ name, navProps }, index) => (
      <Box m={1} key={index}>
        <NavLink {...navProps}>
          <WhiteButton>{name}</WhiteButton>
        </NavLink>
      </Box>
    ))}
  </Column>
)

const Prefooter = ({ heading, sentences, actions }) => (
  <Relative
    top='-420px'
    mb={['100px', '100px', '-290px']}
    height='400px'
  >
    <ResponsiveStack
      bg='serverlessRed'
      o='hidden'
    >
      <LeftColumn heading={heading} sentences={sentences} />
      <Box width={[1, 1, 1/2]}>
        <Background
          width={1}
          height='fullHeight'
          background={`#fd5750 url(${RightBoxBgNew}) no-repeat`}
          backgroundSize='100% 100%'
        >
          <Flex.center
            flexDirection='column'
            height='fullHeight'
            py={[5, 5, 8]}
            px={[3, 3, 7]}
          >
            <RightColumn actions={actions} />
          </Flex.center>
        </Background>
      </Box>
    </ResponsiveStack>
  </Relative>
)

export default Prefooter