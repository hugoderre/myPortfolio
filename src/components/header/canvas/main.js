/**
 *
 * Triangle mesh for 3D objects in HTML5
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2012, Script Tutorials
 * http://www.script-tutorials.com/
 */
// get random color
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return '#' + color;
}
// prepare object
function prepareObject(o) {
    o.colors = [];

    // prepare normals
    o.normals = [];
    for (var i = 0; i < o.faces.length; i++) {
        o.normals[i] = [0, 0, 0];

        o.colors[i] = "#000000";
    }

    // prepare centers: calculate max positions
    o.center = [0, 0, 0];
    for (i = 0; i < o.points.length; i++) {
        o.center[0] += o.points[i][0];
        o.center[1] += o.points[i][1];
        o.center[2] += o.points[i][2];
    }

    // prepare distances
    o.distances = [];
    for (i = 1; i < o.points.length; i++) {
        o.distances[i] = 0;
    }

    // calculate average center positions
    o.points_number = o.points.length;
    o.center[0] = o.center[0] / (o.points_number - 1);
    o.center[1] = o.center[1] / (o.points_number - 1);
    o.center[2] = o.center[2] / (o.points_number - 1);

    o.faces_number = o.faces.length;
    o.axis_x = [1, 0, 0];
    o.axis_y = [0, 1, 0];
    o.axis_z = [0, 0, 1];
}

// triangle object
function triangle() {

    // prepare points and faces for triangle
    this.points=[
        [0,0,0],
        [100,0,0],
        [100,100,0],
        [0,100,0],
        [0,0,100],
        [100,0,100],
        [100,100,100],
        [0,100,100],
        [50,50,100],
        [50,50,0],
    ];

    this.faces=[
        [8,5,4],
        [8,6,5],
        [8,7,6],
        [8,4,7],
        [9,5,4],
        [9,6,5],
        [9,7,6],
        [9,4,7],
    ];

    prepareObject(this);
}


function getRotationPar(center, vector, t) {
    var result = [];

    var u_u = vector[0] * vector[0];
    var v_v = vector[1] * vector[1];
    var w_w = vector[2] * vector[2]; 

    var v_v_p_w_w = (v_v + w_w);
    var u_u_p_w_w = (u_u + w_w);
    var u_u_p_v_v = (u_u + v_v);

    var b_v_p_c_w = center[1] * vector[1] + center[2] * vector[2];
    var a_u_p_c_w = center[0] * vector[0] + center[2] * vector[2];
    var a_u_p_b_v = center[0] * vector[0] + center[1] * vector[1];
    var b_w_m_c_v = center[1] * vector[2] - center[2] * vector[1];
    var c_u_m_a_w = center[2] * vector[0] - center[0] * vector[2];
    var a_v_m_b_u = center[0] * vector[1] - center[1] * vector[0];

    var den = v_v+u_u+w_w;

    result[0] = den;

    result[1] = v_v_p_w_w;
    result[2] = u_u_p_w_w;
    result[3] = u_u_p_v_v;

    result[4] = center[0] * v_v_p_w_w;
    result[5] = center[1] * u_u_p_w_w;
    result[6] = center[2] * u_u_p_v_v;

    result[7] = b_v_p_c_w;
    result[8] = a_u_p_c_w;
    result[9] = a_u_p_b_v;

    result[10] = Math.cos(t);

    result[11] = Math.sin(t) * Math.sqrt(den);

    result[12] = b_w_m_c_v;
    result[13] = c_u_m_a_w;
    result[14] = a_v_m_b_u;

    result[15] = center[0];
    result[16] = center[1];
    result[17] = center[2];
    result[18] = vector[0];
    result[19] = vector[1];
    result[20] = vector[2];

    return result;
}

function rotate(p, point) {
    var p_20_p_2 = p[20] * point[2];
    var p_19_p_1 = p[19] * point[1];
    var p_18_p_0 = p[18] * point[0];
    var u_x_p_v_y_p_w_z = p_18_p_0 + p_19_p_1 + p_20_p_2;
    
    var temp0 = point[0];
    var temp1 = point[1];

    point[0] = (p[4]+p[18]*(-p[7]+u_x_p_v_y_p_w_z)+((temp0-p[15])*p[1]+p[18]*(p[7]-p_19_p_1-p_20_p_2))*p[10]+p[11]*(p[12]-p[20]*temp1+p[19]*point[2]))/p[0];
    point[1] = (p[5]+p[19]*(-p[8]+u_x_p_v_y_p_w_z)+((temp1-p[16])*p[2]+p[19]*(p[8]-p_18_p_0-p_20_p_2))*p[10]+p[11]*(p[13]+p[20]*temp0-p[18]*point[2]))/p[0];
    point[2] = (p[6]+p[20]*(-p[9]+u_x_p_v_y_p_w_z)+((point[2]-p[17])*p[3]+p[20]*(p[9]-p_18_p_0-p_19_p_1))*p[10]+p[11]*(p[14]-p[19]*temp0+p[18]*temp1))/p[0];
}

function translate(vector, point) {
    point[0] = point[0] + vector[0];
    point[1] = point[1] + vector[1];
    point[2] = point[2] + vector[2];
}

function scale(vector, point) {
    point[0] = point[0] * vector[0];
    point[1] = point[1] * vector[1];
    point[2] = point[2] * vector[2];
}

function translateObj(vector, obj) {
    translate(vector, obj.center);

    for (var i = 0; i < obj.points_number; i++) {
        translate(vector, obj.points[i]);
    }
}

function scaleObj(vector, obj) {
    var center = obj.center;
    var a = [-obj.center[0], -obj.center[1], -obj.center[2]];
    translateObj(a, obj);
    for (var i = 0; i < obj.points_number; i++) {
        scale(vector, obj.points[i]);
    }
    translateObj(center, obj);
}

function rotateObj(parametri1, parametri2, obj) {
    rotate(parametri1, obj.center);
    rotate(parametri2, obj.axis_x);
    rotate(parametri2, obj.axis_y);
    rotate(parametri2, obj.axis_z);
    for (var i = 0; i < obj.faces_number; i++) {
        rotate(parametri2, obj.normals[i]);
    }

    for (var j = 0; j < obj.points_number; j++) {
        rotate(parametri1, obj.points[j]);
    }
}

function project(distance, point, x, y) {
    var result = [];

    result[0] = point[0] * distance / point[2] + x;
    result[1] = y - point[1] * distance / point[2];
    result[2] = distance;

    return result;
}
// inner variables
var obj = new triangle();
var canvas, ctx;
var vAlpha = 0.5;
var vShiftX = 0;
var vShiftY = 0;
var distance = -700;
// var vMouseSens = 0.05;
var iHalfX, iHalfY;

// initialization
function sceneInit() {
    // prepare canvas and context objects
    canvas = document.getElementById('scene-canvas');
    ctx = canvas.getContext('2d');
    iHalfX = canvas.width / 2;
    iHalfY = canvas.height / 2;

    // initial scale and translate
    scaleObj([3, 3, 3], obj);
    translateObj([-obj.center[0], -obj.center[1], -obj.center[2]],obj);
    translateObj([0, 0, -1000], obj);
    // attach event handler
    
    vShiftX = 0.008;
    vShiftY = 0.003;
    // canvas.addEventListener("mousemove", handleMousemove, false);

    // main scene loop
    setInterval(drawScene, 25);
}


// onMouseMove event handler
// function handleMousemove(e) {
//     var x = e.pageX - canvas.offsetLeft;
//     var y = e.pageY - canvas.offsetTop;
    
//     if ((x > 0) && (x < canvas.width) && (y > 0) && (y < canvas.height)) {
//         vShiftY = vMouseSens * (x - iHalfX) / iHalfX;
//         vShiftX = vMouseSens * (y - iHalfY) / iHalfY;
//     }
// }

// draw main scene function
function drawScene() {
    // clear canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    // set fill color, stroke color, line width and global alpha
    ctx.strokeStyle = 'rgb(0,0,0)';
    ctx.lineWidth = 0.5;
    ctx.globalAlpha= vAlpha;
    
    // vertical and horizontal rotate
    var vP1x = getRotationPar([0, 0, -1000], [1, 0, 0], vShiftX);
    var vP2x = getRotationPar([0, 0, 0], [1, 0, 0], vShiftX);
    var vP1y = getRotationPar([0, 0, -1000], [0, 1, 0], vShiftY);
    var vP2y = getRotationPar([0, 0, 0], [0, 1, 0], 0.5);
    rotateObj(vP1x, vP2x, obj);
    rotateObj(vP1y, vP2y, obj);

    // recalculate distances
    for (var i = 0; i < obj.points_number; i++) {
        obj.distances[i] = Math.pow(obj.points[i][0],2) + Math.pow(obj.points[i][1],2) + Math.pow(obj.points[i][2], 2);
    }

    // prepare array with face triangles (with calculation of max distance for every face)
    var iCnt = 0;
    var aFaceTriangles = [];
    for (i = 0; i < obj.faces_number; i++) {
        var max = obj.distances[obj.faces[i][0]];
        for (var f = 1; f < obj.faces[i].length; f++) {
            if (obj.distances[obj.faces[i][f]] > max)
                max = obj.distances[obj.faces[i][f]]; 
        }
        aFaceTriangles[iCnt++] = {faceVertex:obj.faces[i], faceColor:obj.colors[i], distance:max};
    }
    aFaceTriangles.sort(sortByDistance);

    // prepare array with projected points
    var aPrjPoints = [];
    for (i = 0; i < obj.points.length; i++) {
        aPrjPoints[i] = project(distance, obj.points[i], iHalfX, iHalfY);
    }

    // draw an object (surfaces)
    for (i = 0; i < iCnt; i++) {

        ctx.fillStyle = aFaceTriangles[i].faceColor;

        // begin path
        ctx.beginPath();

        // face vertex index
        var iFaceVertex = aFaceTriangles[i].faceVertex;

        // move to initial position
        ctx.moveTo(aPrjPoints[iFaceVertex[0]][0], aPrjPoints[iFaceVertex[0]][1]);

        // and draw three lines (to build a triangle)
        for (var z = 1; z < aFaceTriangles[i].faceVertex.length; z++) {
            ctx.lineTo(aPrjPoints[iFaceVertex[z]][0], aPrjPoints[iFaceVertex[z]][1]);
        }

        // close path, strole and fill a triangle
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    }
}

// sort function
function sortByDistance(x, y) {
    return (y.distance - x.distance);
}

// initialization
if (window.attachEvent) {
    window.attachEvent('onload', sceneInit);
} else {
    if (window.onload) {
        var curronload = window.onload;
        var newonload = function() {
            curronload();
            sceneInit();
        };
        window.onload = newonload;
    } else {
        window.onload = sceneInit;
    }
}