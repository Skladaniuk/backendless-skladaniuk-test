import scss from './DummyTable.module.scss';

const DummyTable = () =>{

	return(
		<table className={scss.dummyTable}>
			<tbody>
				<tr>
					<td>Dummy</td>
					<td>Table</td>
				</tr>
			</tbody>
		</table>
	);
};
export default DummyTable;