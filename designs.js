// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

var height,width,color;

$('#sizePicker').submit(function(event){
  event.prevent(default);
  height=$('#inputHeight');
  width=$('#inputWidth');
  
  makeGrid(height,width);
  
})

function makeGrid(x,y) {

// Your code goes here!
  
  $("tr").remove();
  
  for (var i=1; i<=x; i++){
    $('#pixelCanvas').append('<tr id = row '+i+'></tr>');
    h
    for(var j=1; j<y;j++){
      $('#row'+i).append('<td></td>');
    } 
                             }

}
