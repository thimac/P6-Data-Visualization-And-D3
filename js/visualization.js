//This code was based on:
//http://bl.ocks.org/michellechandra/0b2ce4923dc9b5809922
//https://bl.ocks.org/wboykinm/dbbe50d1023f90d4e241712395c27fb3

function drawChart(data, chart){
	//Width and height of map
	var width =  960;
	var height = 500;

	// D3 Projection
	var projection = d3.geo.albersUsa()
			 .translate([width/2, height/2])    // translate to center of screen
			 .scale([1000]);          // scale things down so see entire US
		
	// Define path generator
	var path = d3.geo.path()               // path generator that will convert GeoJSON to SVG paths
		   .projection(projection);  // tell path generator to use albersUsa projection

	// Legend variables
	var minVal = chart == "#chart1" ? 52 : 0;
	var maxVal = chart == "#chart1" ? 14717 : 2500; 
	var lowColor = '#eaeff4';
	var highColor = '#336699';

	//if the Borrower State is the same from GeoJSON, return de frequency
	function getFreq(state) {
		for (var j = 0; j < data.length; j++)  {
			if (state == convertRegion(data[j].BorrowerState))
				return data[j].freq;
		}
		return 0;
	}
	
	//return the percent
	function getPerc(state) {
		for (var j = 0; j < data.length; j++)  {
			if (state == convertRegion(data[j].BorrowerState))
				return ((data[j].freq/data[j].pop)*100).toFixed(2);
		}
		return 0;
	}

	//return population
	function getPop(state) {
		for (var j = 0; j < data.length; j++)  {
			if (state == convertRegion(data[j].BorrowerState))
				return data[j].pop;
		}
		return 0;
	}

	// linear scale for the colors
	var color = d3.scaleLinear().domain([minVal,maxVal]).range([lowColor, highColor]);

	//Create SVG element and append map to the SVG
	var svg = d3.select(chart)
			.append("svg")
			.attr("width", width)
			.attr("height", height);

		
	// Append Div for tooltip to SVG
	var div = d3.select(chart)
			.append("div")   
	    		.attr("class", "tooltip")               
	    		.style("opacity", 0);


	// Load GeoJSON data and merge with states data
	d3.json("us-states.json", function(json) {
		
	// Bind the data to the SVG and create one path per GeoJSON feature
	svg.selectAll("path")
		.data(json.features)
		.enter()
		.append("path")
		.attr("d", path)
		.style("stroke", "#fff")
		.style("stroke-width", "1")
		.style("fill", function(d) {
			return color(getFreq(d.properties.NAME));
		})
		.on("mouseover", function(d) {
			if (chart == "#chart1") {		
			    div.transition()	
				.duration(200)
				.style("opacity", .9);		
			    div.html("<b>" + d.properties.NAME + "</b>" + "<br/>" + "População:" + 
				getPop(d.properties.NAME) + "<br/>" + "Empréstimos:" + getFreq(d.properties.NAME)
				+ "<br/>" + "% da população:" + getPerc(d.properties.NAME))	
				.style("left", (d3.event.pageX) + "px")		
				.style("top", (d3.event.pageY - 28) + "px");
			}
			else {
			    div.transition()	
				.duration(200)
				.style("opacity", .9);		
			    div.html("<b>" + d.properties.NAME + "</b>" + "<br/>" + "Maus Clientes:" + getFreq(d.properties.NAME)
				+ "<br/>" + "% de maus clientes:" + getPerc(d.properties.NAME))
				.style("left", (d3.event.pageX) + "px")
				.style("top", (d3.event.pageY - 28) + "px");
			}
		    })					
		.on("mouseout", function(d) {		
		    div.transition()		
		        .duration(500)		
		        .style("opacity", 0);	
		});

		// add legend
		var w = 140, h = 300;

		var key = d3.select(chart)
			.append("svg")
			.attr("width", w)
			.attr("height", h)
			.attr("class", "legend");

		var legend = key.append("defs")
			.append("svg:linearGradient")
			.attr("id", "gradient")
			.attr("x1", "100%")
			.attr("y1", "0%")
			.attr("x2", "100%")
			.attr("y2", "100%")
			.attr("spreadMethod", "pad");

		legend.append("stop")
			.attr("offset", "0%")
			.attr("stop-color", highColor)
			.attr("stop-opacity", 1);
			
		legend.append("stop")
			.attr("offset", "100%")
			.attr("stop-color", lowColor)
			.attr("stop-opacity", 1);

		key.append("rect")
			.attr("width", w - 100)
			.attr("height", h)
			.style("fill", "url(#gradient)")
			.attr("transform", "translate(0,10)");

		var y = d3.scaleLinear()
			.range([h, 0])
			.domain([minVal, maxVal]);

		var yAxis = d3.axisRight(y);

		key.append("g")
			.attr("class", "y axis")
			.attr("transform", "translate(41,10)")
			.call(yAxis)
 
		});
}

//Converts the state abbreviation
function convertRegion(input) {
    var states = [
        ['Alabama', 'AL'],
        ['Alaska', 'AK'],
        ['American Samoa', 'AS'],
        ['Arizona', 'AZ'],
        ['Arkansas', 'AR'],
        ['Armed Forces Americas', 'AA'],
        ['Armed Forces Europe', 'AE'],
        ['Armed Forces Pacific', 'AP'],
        ['California', 'CA'],
        ['Colorado', 'CO'],
        ['Connecticut', 'CT'],
        ['Delaware', 'DE'],
        ['District Of Columbia', 'DC'],
        ['Florida', 'FL'],
        ['Georgia', 'GA'],
        ['Guam', 'GU'],
        ['Hawaii', 'HI'],
        ['Idaho', 'ID'],
        ['Illinois', 'IL'],
        ['Indiana', 'IN'],
        ['Iowa', 'IA'],
        ['Kansas', 'KS'],
        ['Kentucky', 'KY'],
        ['Louisiana', 'LA'],
        ['Maine', 'ME'],
        ['Marshall Islands', 'MH'],
        ['Maryland', 'MD'],
        ['Massachusetts', 'MA'],
        ['Michigan', 'MI'],
        ['Minnesota', 'MN'],
        ['Mississippi', 'MS'],
        ['Missouri', 'MO'],
        ['Montana', 'MT'],
        ['Nebraska', 'NE'],
        ['Nevada', 'NV'],
        ['New Hampshire', 'NH'],
        ['New Jersey', 'NJ'],
        ['New Mexico', 'NM'],
        ['New York', 'NY'],
        ['North Carolina', 'NC'],
        ['North Dakota', 'ND'],
        ['Northern Mariana Islands', 'NP'],
        ['Ohio', 'OH'],
        ['Oklahoma', 'OK'],
        ['Oregon', 'OR'],
        ['Pennsylvania', 'PA'],
        ['Puerto Rico', 'PR'],
        ['Rhode Island', 'RI'],
        ['South Carolina', 'SC'],
        ['South Dakota', 'SD'],
        ['Tennessee', 'TN'],
        ['Texas', 'TX'],
        ['US Virgin Islands', 'VI'],
        ['Utah', 'UT'],
        ['Vermont', 'VT'],
        ['Virginia', 'VA'],
        ['Washington', 'WA'],
        ['West Virginia', 'WV'],
        ['Wisconsin', 'WI'],
        ['Wyoming', 'WY'],
    ];

    input = input.toUpperCase();
    for (state of states) {
    	if (state[1] == input) {
        	return (state[0]);
        }
    }
};
