

$(function() {

	var $element = $('#fizzbuzz');
	var answer = '';
	
	for (var i = 1; i <= 100; i++) {

		if((i % 3 === 0) && (i % 5 === 0)) {
			answer += 'FizzBuzz'+ '</br>';
			console.log('FizzBuzz');
			$element.html(answer);

		} else if(i % 3 === 0) {
			console.log('Fizz');
			answer += 'Fizz ' + '</br>';
			$element.html(answer);

		} else if(i % 5 === 0) {
			console.log('Buzz');
			answer += 'Buzz' + '</br>';
			$element.html(answer);

		} else {
			console.log(i);
			answer += i + '</br>';
			$element.html(i);
		}

	}

});

