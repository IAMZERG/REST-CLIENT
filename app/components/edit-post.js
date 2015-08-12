import Ember from 'ember';

export default Ember.Component.extend({
        actions: {
            save: function () {
                    this.sendAction('action', this.get('author'), this.get('title'), this.get('content'));
            }
        }
});
