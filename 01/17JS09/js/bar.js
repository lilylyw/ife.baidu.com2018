/*var SVG = function (h,w) {
    var NS = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(NS,"svg");
    svg.setAttribute("width",w);
    svg.setAttribute("height",h);

    return svg;
}

    var  circle = function(x,y,r,fill) {
	var NS = "http://www.w3.org/2000/svg";
	var SVGObj = document.createElementNS(NS,"circle")
	SVGObj.setAttribute("cx",x);
	SVGObj.setAttribute("cy",y);
	SVGObj.setAttribute("r",r);
	SVGObj.style.fill=fill;
	return SVGObj;
    }
    var rect = function (h,w,fill) {
	var NS = "http://www.w3.org/2000/svg";
	var SVGObj = document.createElementNS(NS,"rect");

	SVGObj.setAttribute("height",h);
	SVGObj.setAttribute("width",w);
	SVGObj.style.fill = fill;
	return SVGObj;
    }
    function bar() {
	//console.log("hello world")

	var svg = SVG(800,600) 
	var r = rect(10,20,"red");
	var c = circle(100,100,100,"blue")
	document.body.appendChild(svg);
	svg.appendChild(r);
	svg.appendChild(c);

	//body.appendChild("svg");
	//svg.appendChild("rect");
    }
*/

function bar_module(name) {
	// x axis, y axis
	//data & data on change
	//text
	//responding with table hover

	var svg;
	var svg_width = 0;
	var svg_height = 0;
	var root;
	var NS = "http://www.w3.org/2000/svg";

	var origin_point = [];

	function set_point(x,y) {
		origin_point.push(x);
		origin_point.push(y);
	}
	function log_point() {
		console.log("x",origin_point[0],"y",origin_point[1]);
	}

	function select(selection) {
		root = document.getElementById(selection);
	}
	function create_svg(width,height) {
		svg = document.createElementNS(NS,'svg');
		svg_width = width;
		svg_height = height;
		set_point(0,height-50); //origin point
		svg.setAttribute("width",width);
		svg.setAttribute("height",height);
		var x_axis = create_line(svg,origin_point[0],origin_point[1],origin[0],50);
		var y_axis = create_line(svg,origin_point[0],origin_point[1],width,origin_point[1]);
		svg.appendChild(x_axis)
		svg.appendChild(y_axis)
		if (root.children.length ==0){
			root.appendChild(svg)
		}

		return svg;
	}

	function create_rect(rect_arr) {
		console.log("create_rect",rect_arr);
		var SVGObj = document.createElementNS(NS,"rect");

		SVGObj.setAttribute("height",svg_height/50);
		SVGObj.setAttribute("width",svg_height/50);
		SVGObj.style.fill = "lightblue";
		return SVGObj;
	}

	function create_bar(bar_arr1,bar_arr2,bar_mode) {
		console.log("create bar |",bar_arr1,bar_arr2,bar_mode);
		create_rect(bar_arr1);
	}
    function create_line(svg,x1,y1,x2,y2) {
    	var SVGObj = document.createElementNS(NS,"line");
    	SVGObj.setAttribute("x1",x1);
    	SVGObj.setAttribute("y1",y1);
    	SVGObj.setAttribute("x2",x2);
    	SVGObj.setAttribute("y2",y2);

    	SVGObj.setAttribute("stroke","black");
    	return SVGObj;
    }
    return {
    	set_point:set_point,
    	log_point:log_point,
    	select:select,
    	create_svg:create_svg,
    	create_bar:create_bar,
    }
}(bar_module || {})
