import {model, models, Schema} from "mongoose";

const UserSchema = new Schema({
    id: {
        type: 'String',
        id: true,
        default: 'uuid()'
      },
      createdAt: {
        type: 'DateTime',
        default: 'now()'
      },
      updatedAt: {
        type: 'DateTime',
        updatedAt: true
      },
      email: {
        type: 'String',
        unique: true
      },
      firstName: 'String',
      lastName: 'String',
      password: 'String'
      

}, {
  timestamps: true,
});

export const User = models?.User || model('User', UserSchema);