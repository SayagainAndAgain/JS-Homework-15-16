var data = '';
var API_KEY = '3482005-485f073d339ed53c268c40cce';
var delayTimer;

var search = function () {
	$('#progress')
		.html('Searching ' + data)
		.css('display', 'block');

	var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+data;
	$('.pictures').html('');
	$.getJSON(URL, function(data){
	    if (parseInt(data.totalHits) > 0){
			$('#progress').css('display', 'none');	    	
	        $.each(data.hits, function(i, hit){ 
	        	var img = document.createElement('img');
	        	img.src = hit.webformatURL;
	        	$('.pictures')[0].appendChild(img);
	        });
	    }
	    else
	    	$('#progress').html('No results.');
	});
}

var preSearch = function (e) {
	if (data!='') {
		clearTimeout(delayTimer);
		if (e.type == 'click' || e.which == 13) {
			search();
		} 
		else {
		    delayTimer = setTimeout(function() {
				search();
		    }, 500);
		}
	} 
	else {
		clearTimeout(delayTimer);
	}
}

$( document ).ready(function() {
	$('#search').keyup(function(e) {
		data = this.value;
		preSearch(e);
	});
	$('#search-button').click(function(e) {
		preSearch(e);
	});
});


// Second task

function Human(name, age, sex, height, weight) {
	this.name = name || 'Alex';
	this.age = age || 34;
	this.sex = sex || 'male';
	this.height = height || 180;
	this.weight = weight || 70;
}

function Worker (job, salary) {
	this.job = job || 'ATC';
	this.salary = salary || 5000;
	this.work = function () {
		console.log('I`m working...');
	}
}
Worker.prototype = new Human();

var worker1 = new Worker();
var worker2 = new Worker('Sumsung', 10000);
worker2.name = 'Oleg';
var worker3 = new Worker('School', 2000);
worker3.age = '25';
console.log(worker1, worker1.name);
console.log(worker2, worker2.name);
console.log(worker3, worker3.name);

function Student (study, scholarship) {
	this.study = study || 'State Flight Academy of Ukaine';
	this.scholarship = scholarship || 1000;
	this.watchSerials = function () {
		console.log('I`m watching serials...');
	}
}
Student.prototype = new Human();


var student1 = new Student();
var student2 = new Student();
student2.study = 'LNTU';
var student3 = new Student();
student3.name = 'Ivan';
console.log(student1, student1.name);
console.log(student2, student2.name);
console.log(student3, student3.name);