var localdb = new PouchDB('patientrepo');
//check for the existing DB and fetch from it if possible



function syncDatabase()
{
	var sync = localdb.sync('http://127.0.0.1:5984/patientrepo', {

  live: true,
  retry: true
}).on('change', function (info) {
  // handle change
  console.log('change ');
}).on('paused', function () {
  // replication paused (e.g. user went offline)
  console.log('pause ');
}).on('active', function () {
  // replicate resumed (e.g. user went back online)
  console.log('active ');
}).on('denied', function (info) {
  // a document failed to replicate, e.g. due to permissions
  console.log('deny ');
}).on('complete', function (info) {
  // handle complete
  console.log('success ');
}).on('error', function (err) {
  // handle error
  console.log('error :: ');
});

}


function savePatient(record)
{
	console.log('Object Recieved'+record._id);
	//insert
	if(record._rev == '' || record._rev == null)
	{
			localdb.put(record).then(function (response) {
			
  // success, res is {rev: '1-xxx', updated: true}

		console.log(res.rev);
		clearForm();
		$("#statusMessage").addClass("alert-success"); 
  		$("#statusMessage").removeClass("alert-danger"); 
  		$("#statusMessage").html("Patient Registered Successfully");  
  		$("#statusMessage").show();	
  		if(isOnline())
  		{	
			syncDatabase();
		}
		else
		{
			//offline stuff
		}
  										
	}).catch(function (err) {
  								console.log(err);
							});


	}
	else 
	{
		localdb.put(record, record._id, record._rev);
		if(isOnline())
  		{	
			syncDatabase();
		}
		else
		{
			//do something offline
		}

		
	}
}



function searchPatient(id)
{
	localdb.get(id).then(function(response) {
		
	                $("#patIdTD").html(response._id);	
	                //$("#patName").html(response.fname+' '+response.mname+' '+response.lname);
	                $("#patlName").text(response.lname);
	                $("#patMName").text(response.mname);	                
	                $("#patFName").text(response.fname);
                    $("#patSex").html(response.gender);
                    $("#patAge").html(response.age);
                    $("#patPhone").html(response.phone);
                    $("#patAdd").html(response.address);
                    $("#patMed").html(response.medical);
                    $("#rev").html(response._rev);                    
	
	            $('#regisWell').hide();
                $("#patientDetailPanel").show();
                $("#statusMessage").hide();

 
  console.log('Got '+response.lname);
}).catch(function (err) {
  console.log('search error'+err);
  $("#patientDetailPanel").hide();
  	$("#statusMessage").removeClass("alert-success"); 
  	$("#statusMessage").addClass("alert-danger"); 
  	$("#statusMessage").html("No Patient Records Found");  
  	$("#statusMessage").show();
});


}


