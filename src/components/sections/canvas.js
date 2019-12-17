// import React, { Component } from 'react'
// import {CanvasSpace, Form, Point, Circle, Line} from 'ptjs'
// import './canvas.css'

// class Canvas extends React.Component {
//     componentDidMount() {
//         this.updateCanvas();
//     }
//     componentDidUpdate() {
//         this.updateCanvas();
//     }
//     updateCanvas() {
        
//         var space = new CanvasSpace().setup( {bgcolor: "#f1f5f7"} );
//         space._autoResize = false;
//         var form = new Form(space);
//         var dot = new Circle( 200 , 200 ).setRadius( 50 );
//         var bot = {
//             animate: function( time, fs, context ) {
//                 form.fill( "#999" );

//                 form.fill( "#5AF" ).stroke( false );
//                 dot.setRadius( 50 ); // dynamic radius that pulsates based on time
//                 form.circle( dot );
//             }
//         };
//         space.add( bot ); // adding the bot object into space
//         space.play();

//         var another = new Circle( 100, 100 ).setRadius( 50 ); // another circle
//         bot = {

//             animate: function ( time, fs, context ) {
//                 // previous code omitted...
//                 form.fill( false ).stroke( "#fc0", 5 ); // another circle has orange stroke and no fill
//                 form.circle( another );
//                 var hits = another.intersectCircle( dot );
//                 if (hits.length > 0) {
//                     form.stroke( "#fff" ).fill( "#0C9" );
//                     form.line( new Line( hits[0] ).to( hits[1] ) );
//                     form.points( hits, 50, true );
//                 }
//             },

//             onMouseAction: function ( type, x, y, evt ) {
//                 if (type == "move") {
//                     another.set( x, y ); // set another circle's position
//                 }
//             }
//         };

//         space.add( bot );
//         space.bindMouse();
//         space.play();
        
//     }
//     render() {
//          return (
//              <canvas ref="canvas" id="pt" />
//          );
//     }
// }
//   export default Canvas