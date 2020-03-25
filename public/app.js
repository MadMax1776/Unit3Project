const app = angular.module('WonderApp', []);

app.controller('MyController', ['$http', function($http) {
	this.title = null;

	const controller = this;

	this.createWonder = function() {
		$http({
			method: 'POST',
			url:'/wonder',
			data: {
				title: this.title
			}
		}).then(
			function(response) {
				controller.getWonder();
			},
			function(error) {
				console.log(error);
			}
		)
	};

	this.getWonder = function(){
		$http({
		method: 'GET',
		url: '/wonder'
		}).then(
			function(response){
				console.log(response.data);
				controller.wonder = response.data;
			},
			function (error) {
				console.log(error);
			}
		)
	};

	this.editWonder = function(wonder){
		$http({
			method:'PUT',
			url: '/wonder/' + wonder._id,
			data: {
				title: this.updatedTitle || wonder.title
			}
		}).then(
			function(response){
				controller.updatedTitle = null;
				controller.getWonder();
			},
			function(error){
				console.log(error);
			}
		);
	};
	
	this.wonderSelect = () => {
		this.wonder = wonder;
	}
		

	this.getWonder();

}]);
