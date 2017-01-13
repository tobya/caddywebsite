$(function() {
	$('form').submit(function(event) {
		$('.submit').prop('disabled', true).html("Saving...");

		var pluginID = $('input[name=plugin_id]').val();

		$.post($(this).prop("action"), $(this).serialize()).done(function(data, status, jqxhr) {
			swal({
				type: "success",
				title: "Updated",
				text: "Thank you. Your plugin information has been saved."
			}).then(function() {
				window.location = "/account/plugin/"+pluginID;
			});
		}).fail(function(jqxhr, msg, error) {
			alert(error);
			// TODO
			// if (jqxhr.status == 404)
			// 	$('#password').notify("Incorrect email/password combination. Please try again!");
			// else
			// 	$.notify("Error: " + jqxhr.status + " " + error + ".");
		}).always(function() {
			$('.submit').prop('disabled', false).html("Save Changes");
		});

		return suppress(event);
	});
});