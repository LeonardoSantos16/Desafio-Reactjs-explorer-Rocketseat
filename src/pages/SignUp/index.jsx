import { Container, Form, Background } from "./styles";
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Button } from '../../components/Button';
import { Input } from "../../components/Input";
import { Link } from 'react-router-dom'
import { GoArrowLeft } from "react-icons/go";


export function SignUp(){
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                   
                />
                <Input
                    placeholder="Email"
                    type="text"
                    icon={FiMail}
                   
                />
                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    
                />
                <Button 
                    title="Cadastrar" 
                />
                <Link to="/ "><GoArrowLeft/>Voltar para o login</Link>
           
            </Form>
            <Background/>
        </Container>
    )
}