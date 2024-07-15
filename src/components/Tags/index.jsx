import { Container } from "./styles";

export function Tags({ tag, ...rest }){
    return(
        <Container {...rest}>
            { tag }
        </Container>
    )
}