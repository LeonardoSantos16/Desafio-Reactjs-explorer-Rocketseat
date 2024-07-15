import { Header } from "../../components/Header"
import { Container, Form, Nav } from "./styles"
import { Input } from "../../components/InputHeader";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/Noteitem";
import { Button } from "../../components/Button";
import { GoArrowLeft } from "react-icons/go";
import { Link } from 'react-router-dom'

export function CreateMovie(){
    return(
    <Container>
        <Header/>
        <main>
            <Nav>
                <Link to="/">
                    <GoArrowLeft/>
                    voltar
                </Link>
                <div className='back'>
                    
                </div>
                <h1>Novo filme</h1>
            </Nav>
            <Form>
                <div className="inputs">
                    <Input placeholder="Título" type="text"/>
                    <Input placeholder="Sua nota (de 0 a 5)" type="text"/>
                </div>
                <Textarea placeholder="Observações"/>
            </Form>
            <h2>Marcadores</h2>
            <div className="marcadores">
                <NoteItem value="React" />
                <NoteItem isNew placeholder="Novo marcador"/>
            </div>
            <footer>
                <Button isNew title="Excluir filme" />
                <Button title="Salvar alterações"/>
            </footer>
        </main>
    </Container>
    )
}



