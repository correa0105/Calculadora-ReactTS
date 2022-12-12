export interface IButton {
    title: string,
    color?: string, 
    type?: string,
    onClick?: () => void | string | number | undefined, 
    value?: string
}

export interface IButtonStyled {
    color?: string
}