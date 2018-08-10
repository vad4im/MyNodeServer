import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
    firstName: { type: String,
                 required: 'Enter a first name' },
    lastName:  { type: String,
                 required: 'Enter a first name'    },
    email: {        type: String    },
    company: {        type: String    },
    phone: {        type: Number    },
    created_date: { type: Date,
        default: Date.now    }
});

export const ClausesKitSchema = new Schema({
     _id: mongoose.Schema.Types.ObjectId,
    id: Number,
    clausesName: String,
    desc: String,
    origLang: String,
    translLang: String,
    sourceUrl: String,
    // __v:String
});

export const ClausesSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    clausesKitId:{type: mongoose.Schema.Types.ObjectId,
                ref: 'clauses-kit'
    },
    id: Number,
    orig: String,
    origTr: String,
    translTr: String,
    origSound: String,
    translSound: String,
    // __v:String
});

// phrase: [{
//     id: {type: Number},
//     orig: {type: String, required: 'Enter a Phrase'},
//     origTr: {type: String},
//     transl: {type: String},
//     translTr: {type: String},
//     origSound: {type: String},
//     translSound: {type: String}
// }]


//
// module.exports.ContactSchema = ContactSchema;
// module.exports.PhraseSchema = PhraseSchema;