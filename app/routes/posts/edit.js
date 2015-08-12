import Ember from 'ember';

export default Ember.Route.extend({
        model: function (params) {
                console.log(params.post_id);
                return this.store.findAll('post', {post_id: params.post_id});
        },
       actions: {
               editPost: function (title, author, content) {
                       //var date = new Date();
                       //$.ajax({
                       //        data: "{'post':{'name':'Test','creator':'Connor Brewster','date':'01/17/2015','content':'Some post content'}}", 
                       //        method: 'POST', 
                       //        url: 'http://127.0.0.1:3000/api/posts/',
                       //        crossDomain: true
                       //});
                       var new_date = new Date();
                       console.log(this.get('model'));
                       var post = this.get('model');
                       post.set('name', title);
                       post.set('creator', author);
                       post.set('content', content);
               }
       }
});

