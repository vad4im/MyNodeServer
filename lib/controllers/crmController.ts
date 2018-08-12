import * as mongoose from 'mongoose';
import { ContactSchema, ClausesKitSchema, ClausesSchema } from '../models/crmModel';
import { Request, Response } from 'express';

const ClausesKit = mongoose.model('clauses-kit', ClausesKitSchema);
export class ClausesKitController{
    public addNewClausesKit (req: Request, res: Response) {
        console.log(new mongoose.Types.ObjectId());
        // let newClausesKit = new ClausesKit(this.populateId(req.body));
        // ??????????????????????????????????
        let newClausesKit = new ClausesKit(req.body);
        newClausesKit._id =  new mongoose.Types.ObjectId();
        newClausesKit.save((err, clausesKit) => {
            if(err){
                res.send(err);
            }
            res.json(clausesKit);
        });
    }
    public populateId(inRecBody){
        inRecBody._id =  new mongoose.Types.ObjectId()
    }
    public getClausesKit (req: Request, res: Response) {
        ClausesKit.find({}, (err, clausesKit) => {
            if(err){
                res.send(err);
            }
            res.json(clausesKit);
        });
    }
}
const Clauses = mongoose.model('Clauses', ClausesSchema);
export class ClausesController{
    public addNewPhrase (req: Request, res: Response) {
 // for (var key in req.body) {
 //     console.log( "Ключ: " + key + " значение: " + req[key] );
 // }
        let newClauses = new Clauses( req.body );
        newClauses._id =  new mongoose.Types.ObjectId()
        newClauses.save((err, clauses) => {
            if(err){
console.log('ClausesController.addNewPhrase err' + err);
                res.send(err);
            }
console.log('ClausesController.addNewPhrase json' + res.json(clauses));
            res.json(clauses);
        });
    }
    public getClauses (req: Request, res: Response) {
        Clauses.find({}, (err, clauses) => {
            if(err){
                res.send(err);
            }
            res.json(clauses);
        });
    }
    public deletePhrase (req: Request, res: Response) {
        Clauses.remove({ _id: req.params.phraseId }, (err, phrase) => {
            // console.log('Try to delete Phrase '+req.params.phraseId +' !!');
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted phrase!'});
        });
    }
    public updatePhrase (req: Request, res: Response) {
        Clauses.findOneAndUpdate({ _id: req.params.phraseId }, req.body, { new: true }, (err, phrase) => {
            if(err){
                res.send(err);
            }
            res.json(phrase);
        });
    }
    public getPhraseWithID (req: Request, res: Response) {
        console.log(req.params.phraseId);
        Clauses.findById(req.params.phraseId, (err, phrase) => {
            if(err){
                res.send(err);
            }
            res.json(phrase);
        });
    }

}


const Contact = mongoose.model('Contact', ContactSchema);
export class ContactController{
    public addNewContact (req: Request, res: Response) {
        let newContact = new Contact(req.body);

        newContact.save((err, contact) => {
            if(err){
                res.send(err);
            }    
            res.json(contact);
        });
    }
    public getContacts (req: Request, res: Response) {
        Contact.find({}, (err, contact) => {
            if(err){
                res.send(err);
            }
            res.json(contact);
        });
    }
    public getContactWithID (req: Request, res: Response) {
        Contact.findById(req.params.contactId, (err, contact) => {
            if(err){
                res.send(err);
            }
            res.json(contact);
        });
    }
    public updateContact (req: Request, res: Response) {
        Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, (err, contact) => {
            if(err){
                res.send(err);
            }
            res.json(contact);
        });
    }
    public deleteContact (req: Request, res: Response) {
        Contact.remove({ _id: req.params.contactId }, (err, contact) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted contact!'});
        });
    }
    
}