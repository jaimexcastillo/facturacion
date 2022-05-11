import { ReactElement, HTMLAttributes } from "react"

export interface ITitleProps extends HTMLAttributes<HTMLHeadingElement> {
	children: string | string[] | ReactElement | ReactElement[]
	color?: string
	type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}
