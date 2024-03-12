import React from 'react'
import { withBaseIcon } from 'react-icons-kit'
import {bin} from 'react-icons-kit/icomoon/bin'
import {pencil} from 'react-icons-kit/icomoon/pencil'

//lets say the icons on your side navigation are all color red
const SideIconContainer = 
    withBaseIcon({ size: 25, style: {color: '#2A9D8F'}})

export const TrashIcon = () => <SideIconContainer icon={bin}/>
export const EditIcon = () => <SideIconContainer icon={pencil}/>