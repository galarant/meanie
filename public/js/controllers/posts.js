/*global angular */

//main controller to handle all front-end functionality atm
function MainController(posts) {
  var self = this;
  self.posts = posts.posts;
  self.addPost = function () {
    console.log('A');
    if (!self.title || self.title === '') { return; }
    console.log('B');
    self.posts.push({
        title: self.title,
        link: self.link,
        upvotes: 0
    });
    self.title = '';
    self.link = '';
  };
  self.incrementUpvotes = function (post) {
      post.upvotes += 1;
  };
}

angular.module('flapperNews').controller('MainController', ['posts', MainController]);
