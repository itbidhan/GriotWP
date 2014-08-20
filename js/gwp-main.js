/**
 * Main application module
 */
angular.module( 'griot', [] );

	
jQuery( document ).ready( function() { 


	// Prepare WP environment
	jQuery( '#poststuff' )

		// Define Angular app and controller
		.attr({
			'ng-app':'griot',
			'ng-controller':'griotCtrl'
		})

		// Create main application container and hidden content field
		.find( '#post-body-content' ).append( "<div id='griot'>" +
					"<div media-drawer></div>" +
					"<textarea name='content' id='griot-data'>{{ data | json }}</textarea>" +
					"<fieldset>" +
						"<field type='text' name='objectid' label='Object ID' />" +
					"</fieldset>" +
				"</div>" 
		)

		// Link title field to model
		.find( '#title' ).attr({
			'ng-model':'data.title'
		});


	/**
	 * Manually initialize Angular after environment is set up
	 */
	angular.bootstrap( document, ['griot'] );

});