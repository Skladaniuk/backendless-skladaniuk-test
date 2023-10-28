import {Outlet} from "react-router-dom";
import {Tabs} from '../Tabs/Tabs';
export const NavBar = ({data}) => {
	return (
		<div>
			<Tabs data = {data}/>
			<Outlet />
		</div>
	);
};