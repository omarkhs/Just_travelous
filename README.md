## Development Environment Setup

1. Install [MySQL Community Server](https://dev.mysql.com/downloads/mysql/)
2. Clone this repository 
3. Run `npm install` while being at the root directory; you may need to go to the `client` folder and run `npm install` if `React` dependencies didn't install correctly in first time.
4. There are two `package.json` files one in root directory and the other in `client` folder. The one in the root folder is for `Express` server dependencies. While the one in `client` folder is for `React` dependencies. Make sure you are in root folder if you are new dependencies to backend, and in `client` folder if you are adding dependencies to `React`.

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

### Troubleshooting

1. If you are getting an error like 'Error: ER_NOT_SUPPORTED_AUTH_MODE' when attempting to connect to mySQL database after npm run dev, go to mySQL command line centre and enter: ALTER USER 'my_username'@'my_host' IDENTIFIED WITH 'mysql_native_password' BY 'my_password';
Refer to [https://o7planning.org/en/11959/connecting-to-mysql-database-using-nodejs]
