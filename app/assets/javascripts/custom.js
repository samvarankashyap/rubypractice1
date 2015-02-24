function refreshImage(imageId, url) {
    		var $img = $('#' + imageId);
        		        $img.attr('src',url);   
    			 	return true;
  			}
  			function showLocation(person_id) {
                                // Function is responsible for showing the location in iframe 
                                $("#locationHeading").show();
  				//console.log("person id is "+person_id);
  				$.get("/api/persondetails/"+person_id, function(data, status){
  				//	console.log(data);
        			//	console.log("logitude:"+data.longitude);
        			//	console.log("latitude:"+data.latitude);
                                        var image_src = "https://maps.googleapis.com/maps/api/staticmap?center="+data.latitude+","+data.longitude+"&zoom=16&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C"+data.latitude+","+data.longitude;
        			//	console.log(image_src);
        				refreshImage("locationMap",image_src);
        				$('#locationMap').show();
        			});
  			}
                        function showGrades(person_id){
                                $("#grades").show();
                                 $.get("/api/persongrades/"+person_id, function(apiData, status){
				  //  console.log(apiData);

			
                                var data = new google.visualization.DataTable();
      				data.addColumn('number', 'Grades');
      				data.addColumn('number', 'Time');

      				data.addRows(apiData);

           		 var options = {
        			width: 900,
        			height: 500,
        			hAxis: {
          			title: 'Time'
       				 },
        			vAxis: {
          			title: 'Popularity'
        			}
      			};



                                console.log("person id = "+person_id);
                                 var chart = new google.visualization.LineChart(
                                     document.getElementById('grades'));

                                     chart.draw(data, options);
                        });}
  			$(document).ready(function(){
                                $("#grades").hide()
                                $("#locationHeading").hide();
  				$('#locationMap').hide();
  				$("#personDetails").hide();
  				$("#personDetails").empty();
  				var initialHeader = "<tr><td>ID</td><td>First Name</td><td>Last Name</td><td>Date Of Birth</td><td>Email</td><td>Location</td><td>About Me</td><td>location</td><td>Graph</td></tr>";
  				$("#getDetails").click(function(){
        				$.get("/api/persondetails", function(data, status){
        					$("#personDetails").empty();
            					$("#personDetails").html(initialHeader);
            				//	console.log("Data: " + data + "\nStatus: " + status);
            					for (var item in data){
                 				//	console.log(data[item]);
                 					$('#personDetails tr:last').after('<tr><td>'+data[item].id+'</td><td>'+data[item].first_name+'</td><td>'+data[item].last_name+'</td><td>'+data[item].dob+'</td><td>'+data[item].email+'</td><td>'+data[item].location+'</td><td>'+data[item].about_me+'</td><td><button onclick="showLocation(\''+data[item].id+'\')">Show Location</button></td>'+'</td><td><button onclick="showGrades(\''+data[item].id+'\')">Show Grades</button></td>'+'</tr>');
               					}				
             					$("#personDetails").show();
        				});
    
    				});
    
   			});

     google.load('visualization', '1', {packages: ['corechart']});
    google.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Marks');
      data.addColumn('number', 'Grades');

      data.addRows([
      ]);

      var options = {
        width: 900,
        height: 500,
        hAxis: {
          title: 'Time'
        },
        vAxis: {
          title: 'Marks'
        }
      };

      var chart = new google.visualization.LineChart(
        document.getElementById('grades'));
      chart.draw(data, options);

}
