angular.module('contactApp', [])
.controller('ContactController', function($scope) {
    $scope.formData = {};

    $scope.submitForm = function() {
     
        console.log('Form submitted with data:', $scope.formData);
        alert('Your form has been submitted!');
        $scope.formData = {};
        $scope.contactForm.$setPristine(); // Reset form validation state 
        $scope.contactForm.$setUntouched(); // Reset form interaction state once the form is successfully submitted then it back to its initial state.
    };
});

/*this is js function for navigating over the pagees and make it a current page */
document.addEventListener("DOMContentLoaded", function() {
  var currentUrl = window.location.pathname; // Get the current page URL
  var navLinks = document.querySelectorAll("#list1 ul li a"); // Select all navigation links

  navLinks.forEach(function(link) {
    if (link.getAttribute("href") === currentUrl) {
      link.parentNode.classList.add("active"); // Add "active" class to parent <li> element
    }
  });
});
