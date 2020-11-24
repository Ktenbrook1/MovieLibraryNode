$(document).ready(function() {

    // all custom jQuery will go here
    $(function(){
        $.get("http://localhost:3000/api/movies/", function(data){    

            data.map(function(el){

                
                $("#tbody").append(`
                <tr>
                <td><p>${el.title}</p></td> 
                <td><p>${el.director}</p></td>
                <td><p>${el.genre}</p></td>
                <td><button class= "btn-primary" id="add_image" onclick="addingAImage(movie)">ADD IMAGE</button></td>
                <td><button class= "btn-primary id="edit_image">EDIT IMAGE</button></td>
                <td><button class= "btn-primary id="view_image">VIEW IMAGE</button></td>

                </tr>`);

            })
        })      
    });
 
    function addingAImage(movie){
        let imageToAdd = prompt("Please enter the .jpeg image you would like to display: ");
        let addedImage;

            formData.append("Filedata", file);
            var t = file.type.split('/').pop().toLowerCase();
            if (t != "jpeg" && t != "jpg") {
                alert('Please select a valid image file');
                document.getElementById("img").value = '';
                return false;
            }
            if (file.size > 1024000) {
                alert('Max Upload size is 1MB only');
                document.getElementById("img").value = '';
                return false;
            }
            return true;
        }
    

    (function($){
        function processForm( e ){
            var dict = {
                Title : this["title"].value,
                Director: this["director"].value,
                Genre: this["genre"].value
            };
    
            $.ajax({
                url: 'http://localhost:3000/api/movies',
                dataType: 'json',
                type: 'post',
                contentType: 'application/json',
                data: JSON.stringify(dict),
                success: function( data, textStatus, jQxhr ){
                    $('#response pre').html( data );
                },
                error: function( jqXhr, textStatus, errorThrown ){
                    console.log( errorThrown );
                }
            });
    
            e.preventDefault();
        }
    
        $('#my-form').submit( processForm );
        
    })(jQuery);
    
         $("#myInput").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $("#tbody tr").filter(function() {
              $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
         });
    })

});

       






