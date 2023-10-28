import {Link} from 'react-router-dom';
import scss from './NotFound.module.scss';
export const NotFound = () => {
	return(
		<div className={scss.styleNotFound}>Error 404, Page Not Found , go to our <Link to = '/' className={scss.styleLink}> home page </Link></div>
	);
};