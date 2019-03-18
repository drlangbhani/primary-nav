var drivers = (function(){


	var columns = [
		{
			title: "Name",
			key: "name",
			visible: true,
			primary: true
		},
		{
			title: "Username",
			key: "username",
			visible: true
		},
		{
			title: "Email",
			key: "email",
			visible: true
		},
		{
			title: "Teams",
			key: "teams",
			visible: true
		},
		{
			title: "Hierarchy",
			key: "hierarchy",
			visible: true
		}
	];


	var items = [
		  {
		    "name": "Sam Langley",
				"username": "samlangley",
				"email": "sam.langley@verizonconnect.com",
				"hierarchy": "Christchurch",
		    "teams": "All"
			},
			{
				name: "Alicja Marcinek",
				email: "alicja.marcinek@telogis.com",
				username: "amarcinek",
				teams: "All",
				hierarchy: "uxdemo2"
		},
		{
				name: "Amelia Diggle",
				email: "amelia.diggle@verizonconnect.com",
				username: "adiggle",
				teams: "All",
				hierarchy: "uxdemo2"
		},
		{
				name: "Brian Malone",
				email: "brian.malone@fleetmatics.com",
				username: "bmalone",
				teams: "Ireland",
				hierarchy: "uxdemo2"
		},
		{
				name: "Em Scott",
				email: "em.scott@telogis.com",
				username: "escott",
				teams: "All",
				hierarchy: "uxdemo2"
		},
		{
				name: "Johanna Read",
				email: "johanna.read@telogis.com",
				username: "jread",
				teams: "All",
				hierarchy: "uxdemo2"
		},
		{
				name: "Johnny Lineham",
				email: "jonathan.lineham@verizonconnect.com",
				username: "jlineham",
				teams: "All",
				hierarchy: "&nbsp;"
		},
		{
				name: "Joseph Darrer",
				email: "joseph.darrer@fleetmatics.com",
				username: "jdarrer",
				teams: "All",
				hierarchy: "uxdemo2"
		},
		{
				name: "Kurt Schramer",
				email: "kurt.schramer@verizonconnect.com",
				username: "kurts",
				teams: "&nbsp;",
				hierarchy: "uxdemo2"
		},
		{
				name: "Marcus Robertson",
				email: "marcus.robertson@telogis.com",
				username: "mrobertson",
				teams: "All",
				hierarchy: "uxdemo2"
		},
		{
				name: "Nick Butcher",
				email: "nick.butcher@verizonconnect.com",
				username: "nick",
				teams: "&nbsp;",
				hierarchy: "uxdemo2"
		},
		{
				name: "Rob Gordy",
				email: "johanna.read@verizonconnect.com",
				username: "robgordy",
				teams: "All",
				hierarchy: "USA"
		},
		{
				name: "Sam Langley",
				email: "sam.langley@telogis.com",
				username: "slangley",
				teams: "All",
				hierarchy: "uxdemo2"},
		{
				name: "Sasha Tsevina",
				email: "oleksandra.tsevina@verizonconnect.com",
				username: "stsevina",
				teams: "All",
				hierarchy: "uxdemo2"
		},
		{
				name: "Steve",
				email: "stephen.arnold@verizonconnect.com",
				username: "steve",
				teams: "&nbsp;",
				hierarchy: "uxdemo2"
		},
		{
				name: "Thierry Meier",
				email: "thierry.meier@verizonconnect.com",
				username: "tmeier",
				teams: "All",
				hierarchy: "uxdemo2"
		}
		]



	var getData = function(callback){

		// _.each( items, function(item) {
		// 	item.address = (item.Street ? item.Street + ", " : "") + (item.Suburb ? item.Suburb + ", " : "") + (item.City ? item.City + ", ":"") + item.Country;

		// 	item.status = _.sample(["Verified", "Access Paths Need Review", "Location Needs Review", "Location Unverified"]);
		//  })


		return {			
			items: items,
			columns: columns
		};
	}


	return {
		getData: getData
	}


})();
