import scss from './DummyList.module.scss';

const DummyList = () =>{

	return(
		<div>
			<ul className={scss.list}>
				<li className={scss.listItem}>Dummy</li>
				<li className={scss.listItem}>List</li>
			</ul>
		</div>
	);
};

export default DummyList;