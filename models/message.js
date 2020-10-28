const {Schema, model} = require('mongoose');


const MessageSchema = Schema (
    {
        to: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        from: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }, 
        message: {
            type: String,
            required: true
        },
    }, { versionKey: false, timestamps: true }
)

//  MessageSchema.method('toJSON', function(){
//      const { password, ...object } = this.toObject();
//       return object 
//  })


module.exports = model('Message', MessageSchema);