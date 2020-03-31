## Development Environment Setup

1. Install [MySQL Community Server](https://dev.mysql.com/downloads/mysql/)
2. Clone this repository 
3. Run `npm install` while being at the root directory; you may need to go to the `client` folder and run `npm install` if `React` dependencies didn't install correctly in first time.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs both `Express` server and `React` development server in one command.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.<br />
You should see EXPRESS BACKEND IS CONNECTED TO REACT<br />
You can also open [http://localhost:5000](http://localhost:5000) it will show the server main page.<br />
Basically `npm run dev` runs two concurrent `npm start` commands, one for `Express` and one for `React`

### Useful resources

1. Documentation for the [mysql](https://github.com/mysqljs/mysql#preparing-queries) package. This package allows us to send SQL queries to the database.

2. [Postman](https://www.postman.com) is a useful tool to send server API requests to test your queries. Make sure to test it with [http://localhost:5000](http://localhost:5000).
