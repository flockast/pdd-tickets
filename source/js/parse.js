var questions = document.getElementsByClassName("panel-default");
var result = [];

for(var i = 1; i < questions.length; i++) {
	var item;
	var title = questions[i].childNodes[1].childNodes[4].innerHTML;
	var image = 'http://pdd-new.ru' + questions[i].children[1].children[0].children[0].children[1].getAttribute("src");
	var answers = questions[i].children[1].children[0].children[1].children[1].children[0].children;

	var allAnswers = [];
	for(var j = 0; j < answers.length; j++) {
		var status = false;
		answers[j].children[0].remove();
		if ( (" " + answers[j].className + " ").replace(/[\n\t]/g, " ").indexOf(" square-black ") > -1 ) {
			status = true;
		}
		allAnswers.push(
			{
				title: answers[j].innerHTML,
				status: status
			}
		);
	}

	item = {
		title: title,
		image: image,
		answers: allAnswers
	}
	result.push(item);
}

console.log(JSON.stringify(result));