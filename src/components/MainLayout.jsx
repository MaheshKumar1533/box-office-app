import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import AppTitle from "./AppTitle";

const MainLayout = () => {
    return (
		<>
		    <AppTitle />
            <NavBar />
			<Outlet />
		</>
	);
}

export default MainLayout;