//landmark.js

function importLandmark(simpleLandmark) {
  var newLandmark = null;
  if(util.exists(simpleLandmark)) {
    newLandmark = new Landmark(simpleLandmark.label,
                            simpleLandmark.description,
                            importPoint(simpleLandmark.pointRep));
  }
  
  return newLandmark;
}

function Landmark(label, description, pointRep) {
   this.label = label; //string
   this.description = description; //string
   this.pointRep = pointRep; //point
   this.edit = false;
}

Landmark.prototype.toOutput = function() {
   return {
      label: this.label,
      description: this.description,
      pointRep: this.pointRep.toOutput()
   };
};

Landmark.prototype.draw = function() {
	if (this.pointRep === undefined) return;
	
	canvasPoint = stateManager.currentFloor.globals.view.toCanvasWorld(this.pointRep);
	imgSize = 50;
	var image = stateManager.landmarkImage;
	
	if (this.edit) {
		image = stateManager.landmarkImageBlue;
	}
    stateManager.currentFloor.globals.canvas.drawImage(image, 
	0, 0, stateManager.landmarkImage.width, stateManager.landmarkImage.height - 30,
	canvasPoint.x - imgSize/2, canvasPoint.y - imgSize, imgSize, imgSize);
/*
	OLD VERSION?
	canvasPoint = stateManager.currentFloor.globals.view.toCanvasWorld(this.pointRep);
	
	width = 50
	height = 50
	GLOBALS.canvas.drawImage(stateManager.landmarkImage, 0, 0, stateManager.landmarkImage.width, stateManager.landmarkImage.height - 30,
	canvasPoint.x - width/2, canvasPoint.y - height, width, height);
	*/

}