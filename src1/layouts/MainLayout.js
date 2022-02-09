import {Nav} from "../components/partials/Nav";
import {AppRoutes} from "../routes/AppRoutes";

export const MainLayout = ()=>{
    return <main>
        <Nav/>
        <AppRoutes/>
    </main>
}