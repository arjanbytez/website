var size = 0;
var placement = 'point';

var style_voelbarebevingen_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
	var magnitude = feature.get("Magnitude");
	radiusFactor = 5; //AJZ vermenigvuldigingsfactor voor straal bevingsbol
	var jaar = feature.get("Datum");
	var jaar = jaar.substring(0,4);
	if (magnitude > 3) labelText = "3+"; //AJZ tekst voor sterkste bevingen
	var labelFont = "15.4px \'MS Shell Dlg 2\', sans-serif"; //AJZ groter lettertype
    var labelText = "";
    if ("" !== null) {
        labelText = String("");
    }
    size = 0;
    var labelFont = "10.4px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var bufferColor = "";
	var bufferWidth = 1; //AJZ, 1 geeft dikkere letter
	var fillColor = 'rgba(255,1,1,'; // opacity fillColor en strokeColor afhankelijk van datum
	var strokeColor = 'rgba(35,35,35,';
	var opacity =  (jaar - 1986) / 32 //AJZ transformeert opacity tussen 0 voor begin waarnemingen en 1 huidig jaar.
	if (jaar < 2014) opacity -= 0.2; //HACK voor sneller vervagen van oudere bevingen
	if (jaar < 2006) opacity -= 0.2;
	if (opacity < 0) opacity=0; // maar opacity mag niet kleiner worden dan 0 
	if (magnitude >= 3) // AJZ aanpassingen voor 3+ bolletjes
	{
		labelText = "3+";
		fillColor = 'rgba(202,0,0,';
		radiusFactor = 7;
		opacity += 0.3; //AJZ en weer iets donkerder maken
	}
	fillColor += opacity += ")"; //AJZ toevoegen opacity aan fillColor
	strokeColor += opacity; //AJZ toevoegen opacity aan strokeColor
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: radiusFactor * magnitude,
            stroke: new ol.style.Stroke({color: strokeColor, lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: fillColor})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
