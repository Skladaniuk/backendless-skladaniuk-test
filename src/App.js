import React, {lazy, Suspense, useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import {NavBar} from './components/NavBar/NavBar';
import {Spinner} from './components/Spinner/Spinner';
import {NotFound} from './components/NotFound/NotFound';
import {fetchDummyInfo} from './services/fakeApi';
import CONST from './constans/contans';

const App = () => {

	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	

	const DummyTable =  lazy(() => {return import('./tabs/DummyTable');});
	const DummyChart = lazy(() => {return import('./tabs/DummyChart');});
	const DummyList = lazy(() => {return import('./tabs/DummyList');});
	
	useEffect(() => {
		fetchDummyInfo()
			.then((response) => {
				const sortedData = response.sort((a, b) => {return a.order - b.order;});
				setData(sortedData); 
				setIsLoading(false);
			})
			.catch((error) => {
				console.log('Error while receiving data', error.message);});
	}, []);

	const componentMap = {
		[CONST.DUMMY_TABLE_PATH]: <DummyTable />,
		[CONST.DUMMY_CHART_PATH]: <DummyChart />,
		[CONST.DUMMY_LIST_PATH]: <DummyList />,
	};

	const getComponentByPath = (path) => {
		const component = componentMap[path];
		return component || <NotFound />;
	};

	return (
		<Router>
			{isLoading ? (<Spinner/>
			) : (<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/" element={<NavBar data={data} />}>
						<Route index element={getComponentByPath(data.find((item) => {return item.order === 0;}).path)} />
						{data.map((item) => {return (<Route key={item.id} path={item.id} element={getComponentByPath(item.path)} />
						);})}
					</Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Suspense>
			)}
		</Router>
	);
		

};

export default App;