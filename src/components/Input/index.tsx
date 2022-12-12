import { InputItem } from "./styles"
import { IInput } from "./types"

const Input = ({ value }: IInput) => {
    return (
            <InputItem disabled value={value} />
    )
}

export { Input }