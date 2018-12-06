import React from 'react'
import { Box } from 'serverless-design-system'

import MenuTitle from './Title'
import MenuDescription from './Description'
import {
  ProductDropdownList,
  DeveloperDropdownList,
  LearnDropdownList,
  CommunityDropdownList,
} from './DropdownList'
import NavLink from 'src/components/NavLink'
import { enterprise, resources, products } from 'src/constants/urls'
import { Button } from 'src/fragments/DesignSystem'

const ProductMenu = () => (
  <Box>
    <MenuTitle name={'products'} />
    <MenuDescription wrapperStyles={{ minWidth: [0, 0, 0, 0, '320px'], pr: [1, 1, 1, 1, 0], pb: [3] }} >
      <ProductDropdownList />
    </MenuDescription>
  </Box>
)

const EnterpriseMenu = () => (
  <Box>
    <NavLink to={enterprise} completed className='header-menu-item'>
      <MenuTitle name={'enterprise'} />
    </NavLink>
  </Box>
)

const DeveloperMenu = () => (
  <Box>
    <MenuTitle name={'developers'} />
    <MenuDescription
      wrapperStyles={{
        minWidth: [0, 0, '498px'],
        px: 5,
      }}
    >
      <DeveloperDropdownList />
    </MenuDescription>
  </Box>
)

const LearnMenu = () => (
  <Box>
    <MenuTitle name={'learn'} />
    <MenuDescription>
      <LearnDropdownList />
    </MenuDescription>
  </Box>
)

const CommunityMenu = () => (
  <Box>
    <MenuTitle name={'community'} />
    <MenuDescription>
      <CommunityDropdownList />
    </MenuDescription>
  </Box>
)

const BlogMenu = () => (
  <Box>
    <NavLink to={resources.blog} completed className='header-menu-item'>
      <MenuTitle name={'blog'} />
    </NavLink>
  </Box>
)

const SupportMenu = () => (
  <Box pt={[2, 2, 0]} pl={[1, 1, 2, 2, 2, 2]}>
    <NavLink to={products.support} completed className='header-menu-item'>
      <Button fontSize={'1.5rem'} px={[2, 2, 2, 2, 0]} width={['176px', '176px', '176px', '176px', '140px', '140px']}>
        support
      </Button>
    </NavLink>
  </Box>
)

export default [
  ProductMenu,
  EnterpriseMenu,
  DeveloperMenu,
  CommunityMenu,
  LearnMenu,
  BlogMenu,
  SupportMenu
]