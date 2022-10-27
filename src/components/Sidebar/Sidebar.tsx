import { Bar, Button } from './Sidebar.styled';
import { Take } from './Take';




export interface Sideprops  {
    name: string
}

export const Sidebar = (props: Sideprops) => {

    return (
        <><Bar>
            {props.name}
        </Bar>
            <Button onClick={Take}>Sign In</Button>
            </>
    )

}