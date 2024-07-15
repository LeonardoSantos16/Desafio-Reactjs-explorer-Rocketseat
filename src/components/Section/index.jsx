import { Film, Container } from "./styles"
export function Section({title, text, children}){
    return(
        <Container>
            <Film>
                <h2>{ title }</h2>
                <img src="../src/assets/stars.svg" alt="" />
            </Film>
            <p>{ text }</p>
            { children }
        </Container>
    )
}