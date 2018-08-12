https://itnext.io/building-restful-web-apis-with-node-js-express-mongodb-and-typescript-part-1-2-195bdaf129cf
https://github.com/dalenguyen/rest-api-node-typescript

autentification
It’s sad that by default, there is no security for MongoDB like at all. 
If you want to check your current configuration. Go to your mongo installation directory and type mongo.
As you can see, there is no Access control for the database and anyone can do anything with the database. So we will enable authentication feature for MongoDB.

d:\mongodb\bin>mongo
MongoDB shell version v3.4.16-28-ge86b089be2
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.4.16-28-ge86b089be2
Server has startup warnings:
2018-08-11T18:09:36.323+0300 I CONTROL  [initandlisten]
2018-08-11T18:09:36.323+0300 I CONTROL  [initandlisten] ** WARNING: Access control is not enabled for the database.
2018-08-11T18:09:36.323+0300 I CONTROL  [initandlisten] **          Read and write access to data and configuration is unrestricted.
2018-08-11T18:09:36.323+0300 I CONTROL  [initandlisten]

First, we need to create an account in order to authenticate with Mongodb.

2018-08-11T19:04:20.363+0300 I CONTROL  [initandlisten]
> use clausesDB
switched to db clausesDB
> db.createUser(
... {
... user: 'clausesuser2',
... pwd: 'clauses2user2',
... roles: [ {role: 'readWrite', db: 'clausesDB'}]
... }
... )
Successfully added user: {
        "user" : "clausesuser2",
        "roles" : [
                {
                        "role" : "readWrite",
                        "db" : "clausesDB"
                }
        ]
}
    
After that, we will stop and restart MongoDB with authentication. Remember to check your dbpath.

// Stop MongoDB (Windows)
net stop MongoDB
// Start mongodb with authentication
mongod --auth --port 27017 --dbpath C:\your-data\path

Now, if we login to the mongo shell, there is no warning about access control.
D:\mongodb\bin>mongo
MongoDB shell version v3.4.16-28-ge86b089be2
connecting to: mongodb://127.0.0.1:27017

Or you can connect to the mongo shell with username and password you just created.

mongo --port 27017 -u dalenguyen -p 123123  --authenticationDatabase CRMdb
Now, if we try to access the database even with the key, we are not able to.



mongod.exe --auth --port 27017 --dbpath D:\mongodb\data\clausesDB --logpath D:\mongodb\log\mongod.log --install
net start MongoDB



# Building RESTful Web APIs with Node.js, Express, MongoDB and TypeScript

This is a simple API that saves contact information of people. 

There are two versions of this project. 

- [V1.0.0](https://github.com/dalenguyen/rest-api-node-typescript/tree/v1.0.0): you can run the server directly after cloning this version. It will create a simple RESTful API over HTTP. 
- [V2.0.0](https://github.com/dalenguyen/rest-api-node-typescript/tree/v2.0.0): this is a more secure and control API project. You need to read the post on [how to secure RESTful API application](https://itnext.io/building-restful-web-apis-with-node-js-express-mongodb-and-typescript-part-5-a80e5a7f03db) first. After that, you can run the project.

## Requirements

[NodeJS](https://nodejs.org/en/)

Install global TypeScript and TypeScript Node

```
npm install -g typescript ts-node
```

## Getting Started

You should install [MongoDB](https://docs.mongodb.com/manual/administration/install-community/) on your local machine, or use other services such as [mLab](https://mlab.com/) or [Compose](https://www.compose.com/compare/mongodb)

After that, you will have to replace the mongoURL with your MongoDB address in *lib/app.ts*

## Clone this repository

```
git clone git@github.com:dalenguyen/rest-api-node-typescript.git .
```

Then install the dependencies

```
npm install
```

## Start the server

Run in development mode

```
npm run dev
```

Run in production mode 

```
npm run prod
```

## Testing over HTTP (tag [v1.0.0](https://github.com/dalenguyen/rest-api-node-typescript/tree/v1.0.0))

The default URL is: *http://localhost:3000*

+ GET all contacts

```
Send GET request to http://localhost:3000/contact/
```

## Testing over HTTPs (tag [v2.0.0](https://github.com/dalenguyen/rest-api-node-typescript/tree/v1.0.0))

The default URL is: *https://localhost:3000*

The key and cert in the config folder is for testing purpose only. You should generate your own.

*Reference from [Lynda.com](https://www.lynda.com/Node-js-tutorials/Next-steps/633869/671263-4.html)*