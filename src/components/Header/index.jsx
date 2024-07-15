import { Input } from '../InputHeader'
import { Container, Profile } from './styles'
export function Header(){
    return(
        <Container>
            <Profile to="/profile">
                <h1>RocketMovies</h1>
                <Input placeholder="Pesquisar pelo título" type="text"/>
                <div>
                    <div className='text'>
                        <span>Leonardo Ferreira</span>
                        <strong>sair</strong>
                    </div>
                    <img src="https://github.com/LeonardoSantos16.png" alt="foto perfil github" />  
                </div>
            </Profile>
        </Container>
    )
}