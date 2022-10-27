import { Form, Input, Id} from './Content.style'
import { Sidebar } from '../Sidebar/Sidebar'


export interface Contentprops {
    name: string
    placeholder: string
    pwd: string
}


export const Content = (props: Contentprops) => {
    
    return (
        <><Form >
            {props.name}
        </Form><Input/>
            <Id>
                {props.pwd}
            </Id>
            <Input type='password'/>
            <Sidebar name='Forget password'/>
        </>
    )
}