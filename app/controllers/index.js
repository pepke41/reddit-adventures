import Ember from 'ember';

const { inject, run } = Ember;
const { service } = inject;

export default Ember.Controller.extend({
  reddit: service(),

  userText: "",
  subredditPosts: [],

  getPosts() {
    const reddit = this.get('reddit');
    const userText = this.get('userText');
    reddit.getPosts(userText).then((data) => {
      this.set('subredditPosts', data);
    });
  },

  actions: {
    'get-posts'() {
      run.debounce(this, this.getPosts, 150)
    }
  }
});

