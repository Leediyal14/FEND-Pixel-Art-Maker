// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

        // Your code goes here!
        let rows, cols, Height, Width;
        
        const pixel = $('#pixelCanvas');
        Height = $('#inputHeight').val();
        Width = $('#inputWidth').val();
        
        
        pixel.children().remove();
        
        for(var r=0; r<Height; r++) {
                pixel.append('<tr> </tr>');
        }
        rows = $('tr');
        
        for(var c=0; c<Width; c++) {
                rows.append('<td> </td>');
        }
        cols = pixel.find('td');
        
        cols.click(function() {
             let color = $('#colorPicker').val();
             if ($(this).attr('style')) {
                $(this).removeAttr('style');
             } else {
                $(this).attr('style', 'background-color:' + color);
             }
        });
          
        }
        
        $('input[type="submit"]').click(function(evt) {
                evt.preventDefault();
                makeGrid();
        });