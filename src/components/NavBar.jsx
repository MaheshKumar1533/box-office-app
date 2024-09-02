import { Link } from "react-router-dom";

const URLS = [
	{
		text: "Home",
		path: "/",
	},
	{
		text: "Starred",
		path: "/starred",
	},
];

const NavBar = () => {
	return (
		<div>
			<ul>
				{URLS.map((item) => (
					<li key={item.path}>
						<Link to={item.path}>{item.text}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default NavBar;
