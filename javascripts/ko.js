var vm;

$( function(){


	vm = new viewModel();
	ko.applyBindings(vm);

	
	$('[data-toggle="tooltip"]').tooltip({
		trigger: "hover",
		delay: { "show": 500, "hide": 100 }
	});
		 
	
	
});