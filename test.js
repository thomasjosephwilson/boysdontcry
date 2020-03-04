$(document).ready(function() {

	$('#someForm').on('submit', function(e) {
		e.preventDefault();
		
		//get the name field value
		var FormText1 = $('#FormText1').val();
		//get the name field value
		var FormText2 = $('#FormText2').val();
		//get the comments
		var FormText3 = $('#FormText3').val();
        var FormText4 = $('#FormText4').val();
        var FormText5 = $('#FormText5').val();

		//pretend we don't need validation
		
		//send to formspree
		$.ajax({
			url:'https://formspree.io/mrgkopyv',
			method:'POST',
			data:{
				FormText1:FormText1,
                FormText2:FormText2,
                FormText3:FormText3,
                FormText4:FormText4,
                FormText5:FormText5,
				_subject:'My Form Submission',
			},
			dataType:"json",
			success:function() {
				console.log('success');	
				$('#formBlock').hide();
				$('#thankyouBlock').show();
			}	

		});		
		
	});

});	