
$(document).on("click", "#bntajax", function(){
    $.ajax({
    	type: "GET",
    	url: "https://jsonplaceholder.typicode.com/posts",
    	dataType: 'json',
    	success: function(data) {
    		$("#tblcurso > tbody").html("");
            $.each(data, function (index, value) {
                $("#tblposts > tbody").append("<tr>" +
                    "<td>" + value.id + "</td>" +
                    "<td>" + value.title + "</td>" +
                    "<td>" + value.body + "</td>" +
                    "</tr>"
                )
            });
    	}
    })
});