var fs = require('fs');
var arrayOne,arrayTwo = [];
var textProcessing = function(contents){
	console.log('process the text');
	contents.toLowerCase();
	contents.replace('[^A-Za-z]', '');
	console.log(contents);
}
var filematch = function(){
	fs.readFile('./testData/file1.txt', { encoding: 'utf8' }, function(err, contents) {
	if (err) throw err;
	contents = textProcessing(contents);
	arrayOne = contents.split(" ");
	
	fs.readFile('./testData/file2.txt', {encoding: 'utf8'}, function(err, contents2){
	if (err) throw err;
	arrayTwo = contents2.split(" ");
	
	//compare each array item with each array item in the other array
	arrayOne.forEach(function(elementOne,index){
		var tmp = arrayTwo.indexOf(elementOne);
		if(tmp > -1) {
			console.log('match: ',elementOne);
		}
	});
	});
});
};

filematch();
