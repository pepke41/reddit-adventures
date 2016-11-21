import Ember from 'ember';

const { RSVP, $ } = Ember;
const { Promise } = RSVP;

export default Ember.Service.extend({
  getPosts(subreddit) {
    return new Promise(function(resolve) {
      $.ajax(`https://api.reddit.com/r/${subreddit}/new`).done(function(data) {
        var posts = data.data.children.map(function(child){
          return child.data;
        })
        resolve(posts);
      })
    });
  }
});
