function mostrar(){
  var archivo = document.getElementById("myImage").files[0];
  console.log(archivo)
  var reader = new FileReader();
  if (archivo) {
    reader.readAsDataURL(archivo );
    reader.onloadend = function () {
      document.getElementById("imgCanvas").src = reader.result;
    }
  }
}

var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');


var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
var fs = require('fs');

var visualRecognition = new VisualRecognitionV3({
	version: '2018-03-19',
	iam_apikey: "PCWyKvsvvIEab_hick6oIzRkoWLz_p5u2wiOy4-7zYc8"
});

var images_file= fs.createReadStream('./fruitbowl.jpg');
var classifier_ids = ["DefaultCustomModel_122856305"];
var threshold = 0.6;

var params = {
	images_file: images_file,
	classifier_ids: classifier_ids,
	threshold: threshold
};

visualRecognition.classify(params, function(err, response) {
	if (err) { 
		console.log(err);
	} else {
		console.log(JSON.stringify(response, null, 2))
	}
});