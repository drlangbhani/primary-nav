//Create View Model
function viewModel() {

	var self = this;

	self.primarynav =  	ko.observableArray();
	self.favorites = 	ko.observableArray();
	self.tabs = 		ko.observableArray();
	self.activeTab = 	ko.observable();
	self.hideSidebar =	ko.observable(false);
	
	self.findFieldHasFocus = 	ko.observable(false);
	self.findFieldValue = 		ko.observable();

	self.highlightedItem = 		ko.observable();

	self.sidebarWidth = ko.observable(200);

	self._showFind = ko.observable(false);

	self.showFind = 	ko.computed({
		read: function(){
			self._showFind( self._showFind() || self.findFieldHasFocus() );
			return self._showFind();
		},
		write: function(val){
			self._showFind(val);
		}
	})
	
	self.showFind.subscribe( function(val){
		self.highlightedItem(self.navitems()[0]);		
	})

	self.findKeyDown = function(data, event){
		switch(event.key){
			case 'Escape':
				self.hideFind();
				break;
			case 'ArrowDown':				
				var index = _.indexOf( self.navitems(), self.highlightedItem() );				
				if(index <= self.navitems().length - 2){			
					self.highlightedItem(self.navitems()[++index]);
				};
				break;
			case 'ArrowUp':
				var index = _.indexOf( self.navitems(), self.highlightedItem() );				
				if(index > 0){
					self.highlightedItem(self.navitems()[--index]);
				};
				break;
			case 'Enter':
				self.setActiveTab(self.highlightedItem());
				break;
		}
		return true;
	}

	self.bodyKeyDown = function(data, event){
		if(event.key == 'k' && (event.ctrlKey || event.metaKey)){
			self.findFieldHasFocus(true);
		}else{
			return true;
		}
	}

	self.navitems = 	ko.computed(function(){
		var items = [];
		return _.chain(self.primarynav())
				.reduce( function(items, item){					
					return _.union(items, item.items());
					}, items)
				.sortBy(function (i) { return i.title.toLowerCase();})
				.filter(function(item){
					if( !!self.findFieldValue() ){
						return item.title.toLowerCase().indexOf( self.findFieldValue().toLowerCase())>=0;
					}else{
						return true;
					}
				})
				.value();
		
	});

	self.navitems.subscribe(function(val){
		self.highlightedItem(self.navitems()[0]);
	})


	var navgroup = function(options){
		var self = this,
			defaults = {
				title: "Title",
				open: false
			}

		options = _.extend(defaults, options);
		self.title = options.title;
		self.open = ko.observable(options.open);
		self.items = ko.observableArray();

		self.items( _.map(options.items, function(item){
			return new navitem(item);
		} ));
	}

	var navitem = function(options){
		var self = this,
			defaults = {
				text: "Title",
				icon: "ico_detail",
				image: null		
			}

		options = _.extend(defaults, options);

		self.title = options.text;
		self.icon = options.icon;
		self.key = options.icon;
		self.image = options.image;
	}


	self.setActiveTab = function(data){
		self.activeTab(data);

		if(self.tabs.indexOf(data) < 0){
			self.tabs.push(data);
		}

		self.hideFind();
		
	}

	self.mainImage = ko.computed(function(){

		if( self.activeTab() ){
			return "url(/images/pages/" + self.activeTab().image + ")";
		}else{
			return "";
		}
		
	});

	self.closeTab = function(data){

		self.tabs.remove(data);

		if( data == self.activeTab() && self.tabs().length > 0 ){
			self.setActiveTab( _.last(self.tabs()) );
		};
	}


	self.toggleSideBar = function(){
		self.hideSidebar( !self.hideSidebar() );
	}

	self.gripperdown = function(data, event){
		var xStart = event.screenX;
		var wStart = self.sidebarWidth();

		$("body").mousemove( function(event){
			var delta = event.screenX - xStart;
			var w = Math.max( Math.min( wStart + delta, 400 ), 100);
			self.sidebarWidth( w );
		})

		$("body").one("mouseup", function(event){
			$("body").off("mousemove");
		})
	}

	self.hideFind = function(data, event){

		console.log(event);

		self.findFieldValue(undefined);
		self.findFieldHasFocus(false);
		self.showFind(false);
	}

	

	$.getJSON("javascripts/ko/data/uxdemo2.json", function(data) { 
		// Now use this data to update your view models, 
		// and Knockout will update your UI automatically 
		
		//Parse data into KO structure

		// _.each(data, function(data){
		// 	var group = new navgroup(data);
		// 	self.primarynav.push( group );
		// });

		self.primarynav( _.map(data, function(item){
			return new navgroup(item);
		}));

		//By default open the first group, and open the first tab
		self.primarynav()[0].open(true);
		self.setActiveTab( self.primarynav()[0].items()[0] );

	})


}

