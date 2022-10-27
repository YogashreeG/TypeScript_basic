import {Form, Image} from './Content.styled'


export interface Contentprops{
    name: string
}

export const Content = (props:Contentprops) => {
    return (
        <div>
            <Form> 
                
                <Image>
                    {/* {props.name} */}
                 <img src={require('../assets/Group 1623.png')} alt=''></img> 
                </Image>
                {/* <img src={require('../assets/no jobs found.png')} alt=''></img>  */}
            </Form>  
        </div>
    )
}