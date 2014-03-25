var fs = require('fs');
var util = require('util');

String.prototype.format = function(){
  var args = Array.prototype.slice.call(arguments);
  args.unshift(this.valueOf());
  return util.format.apply(util, args);
};

var writeFile = function(fileName, text){
	fs.writeFile(fileName, text, function(err){
		if (err) {
			console.log(err);
		}
		else{
			console.log('File saved!');
		}
	});
};

var array = fs.readFileSync('test.txt').toString().split('\n');
var result="";

for(i in array){
	currentBuilder = ".AddOption(groupBuilder => groupBuilder.AddCode(\"%s\").AddName(\"%s\").Build())";
	value = array[i];
		console.log(value);
	currentBuilder = currentBuilder.format(value.toLowerCase().replace(/ /g, '').replace(/(?:\\[rn]|[\r\n]+)+/g,''), value.replace(/(?:\\[rn]|[\r\n]+)+/g,''));
	result += i == 0 ? '' : '\n';
	result += currentBuilder;
}

writeFile('codespit.txt', result);


