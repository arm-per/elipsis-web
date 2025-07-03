import { ReactElement } from "react";
import { Outlet} from 'react-router-dom'


const Articles = (): ReactElement => {
    return (
        <Outlet/>
    )
}

export {
    Articles
}