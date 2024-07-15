import { FiCamera } from 'react-icons/fi';
import { Input } from '../../components/Input'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { Container, Picture, Form } from "./styles";
import { GoArrowLeft } from 'react-icons/go';
import { Link } from 'react-router-dom';
export function Profile(){
    return(
        <Container>
            <header>
                <Link to="/">
                    <GoArrowLeft/>
                    voltar
                </Link>
            
            </header>
            <Form>
            <Picture>
                <img
                    src="https://github.com/LeonardoSantos16.png"
                    alt="Foto do usuário"
                />
                <label htmlFor="avatar">
                    <FiCamera />

                    <input
                    id="avatar"
                    type="file"
                    />
                </label>
            </Picture>
            <Input
                placeholder="Leonardo Santos"
                type="text"
                icon={FiUser}
            />
            <Input
                placeholder="leodsmf@gmail.com"
                type="text"
                icon={FiMail}
            />
            <Input
                placeholder="Senha atual"
                type="password"
                icon={FiLock}
            />
            <Input
                placeholder="Nova senha"
                type="password"
                icon={FiLock}
            />
            <Button
                title="Salvar"
            />
            </Form>
        </Container>
    )
}