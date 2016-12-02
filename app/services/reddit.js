import Ember from 'ember';

const { RSVP, $ } = Ember;
const { Promise, resolve } = RSVP;

export default Ember.Service.extend({
  getPosts(subreddit) {
    if(!subreddit) {
      return resolve([]);
    }
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
