import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  email: [
    validator('presence', true),
    validator('format', {
      type: 'email'
    })
  ],
  verifiedEmail: validator('confirmation', {
    on: 'email',
    message: 'Email addresses do not match'
  }),
  password: [
    validator('presence', true),
    validator('format', {
      regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/,
      message: 'Password must include at least one upper case letter, one lower case letter, and a number'
    })
  ]
});

export default DS.Model.extend(Validations, {
  email: DS.attr('string'),
  password: DS.attr('string')
});
