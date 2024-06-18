function myFunc(a, b){
	if(a>b){
		[a, b] = [b, a];
	}
	let intervalId = setInterval(function () {

		console.log(a);
		a++;
		if(a>b){
			clearInterval(intervalId)
		}
			   
	}, 1000);	
}

myFunc(15, 2)
