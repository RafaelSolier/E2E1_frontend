import { useLocation } from "react-router-dom";

interface ButtonProps {}

export default function Button() {
	const location = useLocation();
	const buttonStyle = location.pathname === props.to ? "" : "";

	function handleClick() {}

	return (
		<button className={`${buttonStyle} `} onClick={handleClick}>
			{props.message}
		</button>
	);
}
