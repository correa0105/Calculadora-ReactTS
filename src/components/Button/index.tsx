import { IButton } from "./types"
import { ButtonContainer } from "./styles"

const Button = ({ title, color, onClick }: IButton) => {
    return (
        <ButtonContainer color={color} onClick={onClick}>
            {title}
        </ButtonContainer>
    )
}

export { Button }