import React, { DetailedHTMLProps, HTMLProps } from 'react'

export type IDiv = DetailedHTMLProps<HTMLProps<HTMLDivElement>, HTMLDivElement>;

export const MenuOpen = ({...props}: IDiv) => {
  return (
	<div style={{cursor: 'pointer'}} {...props}>
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M3 12H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M3 6H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M3 18H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
	</div>
  )
}

export const MenuClose = ({...props}: IDiv) => {
  return (
	<div style={{cursor: 'pointer'}} {...props}>
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M7 12L21 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M3 6H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M12 18L21 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
	</div>
  )
}