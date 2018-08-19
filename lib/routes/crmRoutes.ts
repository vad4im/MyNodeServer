import {Request, Response, NextFunction} from "express";
import { ContactController, ClausesKitController, ClausesController } from "../controllers/crmController";

export class Routes { 
    
    public contactController: ContactController = new ContactController()
    public clausesKitController: ClausesKitController = new ClausesKitController()
    public clausesController: ClausesController = new ClausesController()

    public routes(app): void {   
        
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })
        //Clauses-kit
        app.route('/clauses-kit')
            .get(this.clausesKitController.getClausesKitList)
            .post(this.clausesKitController.addNewClausesKit);
        app.route('/clauses-kit/:kitId')
            // .get(this.clausesKitController.getClausesKitWithID)
            // .put(this.clausesKitController.updateClausesKit)
            .delete(this.clausesKitController.deleteClausesKit);

        //Clauses
        app.route('/clausesRef/:kitId')
            .get(this.clausesController.getClausesWithKitID);
        app.route('/clauses')
            .get(this.clausesController.getClauses)
            .post(this.clausesController.addNewPhrase);
        app.route('/clauses/:phraseId')
            .get(this.clausesController.getPhraseWithID)
            .put(this.clausesController.updatePhrase)
            .delete(this.clausesController.deletePhrase);

        // Contact 
        app.route('/contact')
        .get(
            // (req: Request, res: Response, next: NextFunction) => {
            // // middleware
            // console.log(`Request from: ${req.originalUrl} Request type: ${req.method}`);
            // if(req.query.key !== '78942ef2c1c98bf10fca09c808d718fa3734703e'){
            //     res.status(401).send('You shall not pass!');
            // } else {
            //     next();
            // }
            // },
            this.contactController.getContacts)
        // POST endpoint
        .post(this.contactController.addNewContact);

        // Contact detail
        app.route('/contact/:contactId')
        // get specific contact
        .get(this.contactController.getContactWithID)
        .put(this.contactController.updateContact)
        .delete(this.contactController.deleteContact)

    }
}