import Ember from 'ember';

export default Ember.Route.extend({
        actions: {
                newPost: function (author, title, content) {
                        //var date = new Date();
                        //$.ajax({
                        //        data: "{'post':{'name':'Test','creator':'Connor Brewster','date':'01/17/2015','content':'Some post content'}}", 
                        //        method: 'POST', 
                        //        url: 'http://127.0.0.1:3000/api/posts/',
                        //        crossDomain: true
                        //});
                        var new_date = new Date();
                        console.log("hello from inside new post action");
                        var post = this.store.createRecord('post', {name: title, creator: author, content: content, date: new_date});
                        post.save();
                        console.log(post);
                }

        }
});
