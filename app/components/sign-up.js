import Ember from 'ember';

export default Ember.Component.extend({
    firebaseApp: Ember.inject.service(),
    
      actions: {
        signUp() {
          var email = this.controller.get('email');
          var pass = this.controller.get('password');
          const auth = this.get('firebaseApp').auth();
          auth.createUserWithEmailAndPassword(email, pass).then((userResponse) => {
            const user = this.store.createRecord('user', {
              id: userResponse.uid,
              email: userResponse.email
            });
            user.save().then(() => {
              this.transitionTo('welcome');
            }).catch(err => console.warn('was not able to save: ', err));
          });
        }
    }
});