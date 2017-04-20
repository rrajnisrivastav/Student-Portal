var myApp = angular.module('myApp',[]);

myApp.controller('StudentCtrl',function($scope){
	 $scope.students = [
		 { name:'Raja',course:'mca', dob:'12-02-94', fatherName:'Harish Chaudhary',motherName:'Kusum Chaudhary',fees:5000},
	     {name:'Raj',course:'bca',dob:'22-02-93',fatherName:'Kamal Hasan', motherName:'Supriya Hasan', fees:6000},
		 ];
		   
		      $scope.addRow = function() {
				
			   $scope.students.push({'name':$scope.name,'course':$scope.course,'dob':$scope.dob,
			   'fatherName':$scope.fatherName,'motherName':$scope.motherName,'fees':$scope.fees});
			   
			   $scope.name='';
		       $scope.course='';
			   $scope.dob='';
			   $scope.fatherName='';
			   $scope.motherName='';
			   $scope.fees='';
			 } 
}); 