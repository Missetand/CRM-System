import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  firmName: validator('presence', true),
  email: [
    validator('presence', false),
    validator('format', {type: 'email'})
   ],
  phoneNumber: [
    validator('presence', true),
    validator('length', { min: 8 }),
    validator('number', {
      allowString: true,
      integer: true
    })
  ],
  cvr: [
    validator('length', { min: 0, max: 8 }),
    validator('number', {
      allowString: true,
      integer: true,
      allowBlank: true
    })
  ],
  address: validator('presence', true),

  zipCode: [
    validator('presence', true),
    validator('length', { is: 4 }),
    validator('number', {
      allowString: true,
      integer: true
    })
  ],

  priority: [
     validator('presence', true),
     validator('number', {
      allowString: true,
      integer: true,
      gte: -1,
      lte: 5,
      message: 'Priority has to be a number between -1 and 5, where is 0 the least amout of interest and 5 is the highest.'
    })
  ],
  comment: validator('format', {
    allowBlank: true
  })

});

export default DS.Model.extend(
  Validations, {
  firmName: DS.attr('string'),
  email: DS.attr('string'),
  phoneNumber: DS.attr('number'),
  cvr: DS.attr('number'),
  address: DS.attr('string'),
  zipCode: DS.attr('number'),
  comment: DS.attr('string'),
  priority: DS.attr('number')
});
