function ApplicationWindow() {
	//declare module dependencies
	var MasterView = require('ui/common/MasterView'),
		DetailView = require('ui/common/DetailView');
		
	//create object instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff'
	});

	//create master view container
	var masterContainerWindow = Ti.UI.createWindow({
		title:'Genres'
	});
	var masterView = new MasterView(masterContainerWindow)
	masterContainerWindow.add(masterView);
	
	//create detail view container
	var detailContainerWindow = Ti.UI.createWindow({
		title:'Titles'
	});
    var detailView = new DetailView();
	detailContainerWindow.add(detailView);
	
	//create iOS specific NavGroup UI
	var navGroup = Ti.UI.iPhone.createNavigationGroup({
		window:masterContainerWindow
	});
	self.add(navGroup);
	
	//add behavior for master view
	masterView.addEventListener('app:genreSelected', function(e) {
		detailView.fireEvent('app:genreSelected', e);
		navGroup.open(detailContainerWindow);
	});
	
	return self;
};

module.exports = ApplicationWindow;
