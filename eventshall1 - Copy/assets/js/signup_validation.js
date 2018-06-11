$(document).ready(function(){

		$("#guest_house_name_check").hide();
		$("#owner_name_check").hide();
		$("#city_name_check").hide();
		$("#password_check").hide();
		$("#cpassword_check").hide();
		$("#mobile_number_check").hide()

		// guest house name validation//

		$("#gname").keyup(function(){
			guest_name_check();
		});

		function guest_name_check(){
			var guest_house_name = $("#gname").val();

			if(guest_house_name.length == ''){ 
				var id = "guest_house_name_check";
				check_validation(id);
			 	$("#guest_house_name_check").html('**Please fill the guest house name');
				return false;
			}else
			{ $("#guest_house_name_check").hide()
				return true;}
	
		}

		function check_validation(id){ 
			var ids = "#".concat(id)
			$(ids).show();
			$(ids).focus();
			$(ids).css("color","white");
			
		}

		// manager name validation//
		   

		$("#mname").keyup(function(){
			owner_name_check();
		});

		function owner_name_check(){
			var owner_name = $("#mname").val();

			if(owner_name.length == ''){ 
				var id = "owner_name_check";
				check_validation(id)
				$("#owner_name_check").html('**Please fill the owner name');
				return false;
			}
			else{ $("#owner_name_check").hide();
			return true;}
		 }

		 // city name validation//

		$("#city").keyup(function(){
			city_name_check();
		});

		function city_name_check(){
			var city_name = $("#city").val();

			if(city_name.length == ''){ 
				var id = "city_name_check";
				check_validation(id)
				$("#city_name_check").html('**Please fill the city name');
				return false;
			}else{
				$("#city_name_check").hide(); 
				return true;}
			
		}

		//mobile number validation //

		$("#mnumber").keyup(function(){
			mobile_number_check();
		});

		function mobile_number_check(){
			var mobile_number = $("#mnumber").val();

			if(mobile_number.length == ''){ 
				var id = "mobile_number_check";
				check_validation(id)
				$("#mobile_number_check").html("**Mobile Number Can't be Empty");
				return false;
			}
			if(mobile_number.length != 10 ){ 
				var id = "mobile_number_check";
				check_validation(id)
				$("#mobile_number_check").html("** Mobile number should be 10 digit");
				return false;
			}
			else{ $("#mobile_number_check").hide();
			return true;}
		 }

		//password validation//

		$("#pwd").keyup(function(){
			password_check();
		});

		function password_check(){
			var password = $("#pwd").val();

			if(password == ''){ 
				var id="password_check";
				check_validation(id)
				$("#password_check").html("**Password Can't be empty");
				return false;
			}
			if((password.length <5) || (password.length >15)){
				var id="password_check";
				check_validation(id)
				$("#password_check").html("**Password must be between 5 to 15");
				return false;
			}else{
				$("#password_check").hide();
				return true;}
		
		}

		// re-password validation//

		$("#cpwd").keyup(function(){
			cpassword_check();
		});

		function cpassword_check(){
			var cpassword = $("#cpwd").val();
			var password = $("#pwd").val();
			if((password != cpassword)){
				var id="cpassword_check";
				check_validation(id);
				$("#cpassword_check").html("**password are not matching");
				return false;
			}else{
				$("#cpassword_check").hide();
				return true;
			}
		
		}

		// submit button validation //

		$("#submit").click(function(){ 
			if((guest_name_check()==true) && (owner_name_check()==true) && (city_name_check()==true) && (password_check()==true) && (mobile_number_check()==true)){
				return true;
			}else{
				return false;
			}

		})

		
	
});