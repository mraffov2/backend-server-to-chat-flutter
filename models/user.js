const {Schema, model} = require('mongoose');


const UsuarioSchema = Schema (
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true
        }, 
        password: {
            type: String,
            required: true
        },
        online: {
            type: Boolean,
            default: false
        },
        registeredAt: {
            type: Date,
            default: Date.now 
        }
    }, { versionKey: false }
)

 UsuarioSchema.method('toJSON', function(){
     const { password, ...object } = this.toObject();
      return object 
 })


module.exports = model('User', UsuarioSchema);