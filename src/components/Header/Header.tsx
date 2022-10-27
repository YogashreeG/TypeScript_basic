import { Title, Side, Card, Image, } from './Header.styled';
import { Content } from '../Content/Content';


export interface Headerprops{
    name:string
}

export const Header = (props: Headerprops) => {
    return (
        <>
        <Card>
            <Title>
                <Image>
                     <img src={require("../assets/logo-icon.png")}alt=''/>  
                </Image> 
            {props.name}
        </Title>
            <Side>
                Sign in with your username and password
            </Side>
                <Content name='Email Address / Username' placeholder='' pwd='Password' />
               
            </Card>
        </>    
        
    )
}