import { Title, Card,Word, Form } from './Header.styled'
//import { Sidebar } from '../Sidebar/Sidebar'

import { Content } from '../Content/Content'

export interface Headerprops{
     name: string
}


export const Header = (props:Headerprops) => {
    return (
        <>
            <Form>
            <Card>
            <Title>
                <Word className="site-layout-background" style={{ padding: 0 }}>
                    <img src={require('../assets/Account Profile (1).png')} alt=''></img>
                </Word>
            </Title>
        </Card>
                <Content name='No jobs here 💼'/>
                </Form>
        </>
    )
}