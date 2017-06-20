

 function showAddNew()
      {
          $("#patientDetailPanel").hide();
          $('#regisWell').show(); 
          $("#editPatient").hide();
          $("#newPatient").show();
          $("#patId").hide();
          $("#regDate").hide(); 
          $("#registerbutton").show();
          $("#updatebutton").hide();
          
          $("#statusMessage").hide();
      }
      
      function showEditPatient()
      {
          $("#newPatient").hide();
          $("#editPatient").show();
          $("#patId").show();
          $("#regDate").show(); 
          $("#patientDetailPanel").hide();
          $("#regisWell").show(); 
          $("#registerbutton").hide();
          $("#updatebutton").show();
          $("#patientregisNo").removeAttr( "disabled" );
          $("#registrationDate").removeAttr( "disabled" );
          
          console.log($("#patIdTD").html());
          var x=$("#patIdTD").html();
          $("#patientregisNo").val(x);
          $("#fname").val($("#patFName").text());
          $("#mname").val($("#patMName").text());
          $("#lname").val($("#patlName").text());
          $("#age").val($("#patAge").html());
          $("#phone").val($("#patPhone").html());
          $("#address").val($("#patAdd").html());
          $("#medical").val($("#patMed").html());
          
      }
      
      function clearForm()
      {   
          $("#registrationForm").trigger('reset');
          $('#regisWell').hide();
      }
    
        $(document).ready(function() {

         // $("#statusBox").css({position: 'absolute',bottom: 0,left: 0,color: 'blue'});

          $("#statusBox").css({position: 'absolute',top: 0,left: 10,color: 'blue',lineHeight: 0.5,outline: 0,marginBottom: -1});

            $('#patientSearch').submit(function(event) {
                
                //alert(o._id);
                var idx=$("#patientId").val();
                console.log('idx:' + idx);
                searchPatient(idx);
                event.preventDefault();
            });

            $("#registrationForm").validate({

                rules : {
                    age : "number",
                    phone : {
                        required : true,
                        number : true,
                        minlength : 10

                    },
                    gender : "required"

                },
                messages : {
                    fname : "Please enter firstname.",
                    lname : "Please enter lastname.",

                    age : {
                        required : "Please enter age.",
                        number : "Please enter numbers only."

                    },
                    phone : {
                        required : "Please enter phone #.",
                        number : "Please enter numbers only.",
                        minlength : "Phone # must be 10 digits."

                    },

                    gender : "Please select patient gender.",
                    address : "Please add a valid address."

                },
                submitHandler : function(form) {
                    // do other things for a valid form

                    var record = {};

                    record._id = new Date().getTime() + '';
                    record._rev = $("#rev").val();
                    record.registrationDate = $("#registrationDate").val();
                    record.fname = $("#fname").val();
                    record.mname = $("#mname").val();
                    record.lname = $("#lname").val();
                    record.gender = $("#gender").val();
                    record.age = $("#age").val();
                    record.phone = $("#phone").val();
                    record.address = $("#address").val();
                    record.medical = $("#medical").val();
                    
                    savePatient(record);
                }

            });
        });

 function genDate()
{
  var d = new Date();

  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  var mon = month[d.getMonth()];
  var day = d.getDate();
  var year = d.getFullYear();

  var x= ''+day+'-'+mon+'-'+year;
  console.log(x);

}
setInterval(isOnline,1000);


function isOnline()
{
   var networkState = navigator.connection.type;
   
    if(networkState == Connection.WIFI || networkState == Connection.CELL || networkState == Connection.ETHERNET) 
    {
      //alert('in');
      $('#statusBox').val('Online');
      return true;
    } 
    else 
    {
      $('#statusBox').val('Offline');
       return false;
    }
}


