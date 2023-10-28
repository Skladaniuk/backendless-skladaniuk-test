const URL = 'https://api.jsonbin.io/v3/b/653a89e712a5d3765990e0b8';



export const fetchDummyInfo = () => {
	return  fetch(URL).then((response) => 
	{return response.json();}).then(data => {return data.record;}).catch(error => {
		console.log('Помилка при отриманні JSON-даних', error.message);
	});
};