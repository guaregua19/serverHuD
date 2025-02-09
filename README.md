# serverHuD
Web based heads up display for servers and websites. Designed by a dev for server admins, website admins, or devs
to monitor their services, servers or websites.

![serverHuD image](https://i.ibb.co/8D1Yc7Y/example-serverhud.png)

## Built With

The (primary) technologies used in the development of this project:

- Front End: [React](https://reactjs.org/), [Chakra UI](https://chakra-ui.com/), [Axios](https://axios-http.com/)
- Back End: [Postgres](https://www.postgresql.org/), [sequelize-typescript](https://www.npmjs.com/package/sequelize-typescript), [NodeJS](https://nodejs.org/en/), [KoA](https://koajs.com/)
- Others: [JWT](https://jwt.io/)

## Getting Started

If you'd like to run your own serverHuD instance:

- Set up a postgres db
- Copy the .env_example file to .env, fill in the database information.
- Clone the repo then run:
  - ```cd client && npm i```
  - ```cd server && npm i```
- Finally, run the server and client
  - ```cd client && npm start```
  - ```cd server && npm start```

## TODO

Please see the serverHuD improvement project to see planned changes:

https://github.com/users/Jchase2/projects/1/views/1

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
