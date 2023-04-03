const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b9aa7e243amshf11ff019fd0449ap1f4b05jsnb909506d628d',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=delhi', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
	.catch(err => console.error(err));