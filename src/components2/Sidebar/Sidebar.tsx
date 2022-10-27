
import { Card,Sider, Menu} from './Sidebar.styled'

export interface Sidebarprops{
    name: string
    mode: string
}

export const Sidebar = (props:Sidebarprops) => {
    return (
        <Card>
            <Sider>
            <Menu
        />
      </Sider>
        </Card>
    )
}