/* eslint-disable no-mixed-spaces-and-tabs */
import {useState, useEffect} from 'react';
import scss from './Tabs.module.scss';
import {Link, useLocation} from 'react-router-dom';

export const Tabs = ({data}) => {
	const [activeTabIndex, setActiveTabIndex] = useState(0);
	const location = useLocation();
	
	useEffect(() => {
	
		const activeIndex = data.findIndex(item => {return location.pathname.includes(item.id);});
		if (activeIndex !== -1) {setActiveTabIndex(activeIndex);
		}
	}, [location.pathname, data]);
	return(
		<nav className={scss.tabs}>
			{data.map((item, index) => {
		  const isActive = index === activeTabIndex;
		  return (
					<Link to={`${item.id}`} className={isActive ? `${scss.tabItemWrapper} ${scss.active}` : scss.tabItemWrapper} key={item.id}>
			  <div  onClick={() => {return setActiveTabIndex(index);}}>
							<span className={scss.tabsLink}>
				  <span className={scss.tabItem}>{item.title}</span>
							</span>
			  </div>
					</Link>
		  );
			})}
	  </nav>
	
	);



};