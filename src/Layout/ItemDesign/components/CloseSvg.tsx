import React, { DetailedHTMLProps, HTMLAttributes } from 'react'

interface ICloseSvg extends DetailedHTMLProps<
		HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {}

const CloseSvg = ({...props}: ICloseSvg) => {
  return (
	<div {...props}>
		<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g clip-path="url(#clip0_667_623)">
		<path d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M14 8L8 14" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M8 8L14 14" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		</g>
		<defs>
		<clipPath id="clip0_667_623">
		<rect width="22" height="22" fill="white"/>
		</clipPath>
		</defs>
		</svg>
	</div>
  )
}

export default CloseSvg