# DNA

Fullstack prototipe project in Typescript, with the objective of joining three well-regarded tools in the community (`back-end` **[NestJS](https://nestjs.com/)** / **[Directus](https://docs.directus.io/getting-started/introduction/)**, `front-end` **[Angular](https://angular.io/)**) in order to create an initial environment with the main necessary settings that a project commonly requires during its lifetime, so during its development try to focus as much as possible only on the code development required by the application.

<br />

## **Development** ⚡️

### Local development environment:

1. Clone this repo with git.

2. Install back-end and front-end dependencies by running `npm install` within both directories (`dna-backend` and `dna-frontend`).

3. Start the back-end development server with `docker-compose up`.

4. Start the front-end development server with `ng serve`.

5. Open development site by going to [`http://localhost:4200`](http://localhost:4200) in your browser.
6. Open Directus configuration site by going to [`http://localhost:8055`](http://localhost:8055) in your browser.

<br />

## **GraphQL SDK** 🚀

### Steps to generate the database models and operations in typescript for equalized use on back-end between NestJS & Directus:

1. Generate admin access token using Directus authentication login: <br />

   > **[[Directus] Authentication reference](https://docs.directus.io/reference/api/system/authentication/)**

2. Store access token in the DOCKER_DNA_DIRECTUS_ACCESS_TOKEN enviroment variable.

3. With development docker environment running, run `npm run generate`.

4. The sdk will be available in the **`dna-backend/graphql`**
   folder, under the **`sdk`** file.

<br />

## **Response format** 👋

The response pattern followed the Directus return response. Thus, it was necessary to adjust the NestJS return pattern to fit and return in the same format.

For this, it was used the interface already provided by the [graphql-request](https://www.npmjs.com/package/graphql-request) library already installed and used in the GraphQL SDK, which returns the responses in the same standard as Directus.

<br />

```typescript
interface GraphQLResponse<T = any> {
  data?: T;
  errors?: GraphQLError[];
  extensions?: any;
  status: number;
  [key: string]: any;
}
```

<br />

## **Migration** 🚚

`Directus` added a **[PR](https://github.com/directus/directus/pull/7939)**, thus being possible to easily generate and save snapshots of the development enviroment and export/import the data model from/to various Directus instances.

Below are the steps to export the schema generated by your docker directus instance to your cloud directus instance:

1. Start the development enviroment.

2. Go to the folder `dna-migration` and run **npm start** (It will generate the schema inside the docker instance, and move the generated schema to the current migration directory).

3. Copy the schema generated to your cloud enviroment (In this example, under the directory **/dna-heroku/directus/migration**).

4. Add the import migration script to run before your starting script enviroment.

<br />

## **Tests** ✅

For the testing stage, all the well-known and recommended structure of the **[NestJS Testing Module](https://docs.nestjs.com/fundamentals/testing)** was used, leaving it responsible for `UNIT TESTING` and `INTEGRATED TESTING`, applying them according to what the system needs during its development.

For the `END-TO-END`, **[Cypress](https://github.com/cypress-io/cypress)** will be used, a framework already well recognized and recommended by the community, due to its ease and great integration with Angular.

### Examples:

> **[UNIT TESTING](https://github.com/cesarsalesgomes/dna/blob/main/dna-backend/src/system/system.spec.ts)**

_Test example in which were concerned with covering a portion of the business layer of the system module, without integration with other layers, such as the data layer._

> **[INTEGRATION TESTING](https://github.com/cesarsalesgomes/dna/blob/main/dna-backend/src/cat/cat.spec.ts)**

_Example of test in call of a system route, in which the call to the data layer was abstracted, trying to cover as much as possible the Directus service._

_The automatic generation of false data, generated from the **[graphql-codegen-typescript-mock-data plugin](https://github.com/ardeois/graphql-codegen-typescript-mock-data#readme)**, was also provided in the `generate` script, so as to take advantage of `GraphQL` and thus obtain agility in the development of the tests._

> **[E2E TEST]()**

_Will be documented when starting Angular development ..._

<br />

## **Authentication** 🔒

### To obtain an authentication token and gain access to the routes developed in the application, perform the steps below:

1. Generate access token using Directus authentication login: <br />

   > **[[Directus] Authentication reference](https://docs.directus.io/reference/api/system/authentication/)**

2. Pass the token in the Authorization header (`Authorization: Bearer <token>`):

   > **`Authorization: Bearer eyJh...KmUk`**

<br />

## **Deployment** ☁️

After research and attempts to deploy the application via docker compose in the `Azure` environment, it was noticed that the ease of execution and configuration of the development environment is not the same in cloud environments with docker.

In this way, it was decided to deploy each system layer in parts, researching the environment where its configuration was simpler and more intuitive, less costly and with better support.

> **Directus / Postgres**

_It was chosen to deploy the `Directus` on the **[Heroku](https://heroku.com)** enviroment. It provides a **[Template](https://github.com/directus-community/heroku-template)** for deploying all the main technologies involved, has basic unpaid plans, its simple and intuitive to configure and check the system logs and health._

_After a first attempt to create the environment via template, some errors appeared. To fix them, the template was left aside, and the environments were created in stages._

_First, it was necessary to create a separate `Postgres` database, and migrate the tables from a `Directus` application bootstrapped, using the script explained above in the migration session._

_An example of an initial `Directus` application can be found in the folder **dna-heroku**, that was deployed on Github, integrated to a Node.js app on Heroku, and connected to the previously created database via the enviroment variable **DB_CONNECTION_STRING**, with the query string `sslmode` set to the value `no-verify`, if the plan of the database is the free-tier¹._

**Issues:**

1. **[Heroku + PostgreSQL issue](https://github.com/directus/directus/discussions/5047)**

2. As described on the **[Admin Account](https://docs.directus.io/configuration/config-options/#admin-account)**, it is necessary to start the `Directus` enviroment with Docker or via CLI command to configure the first Admin User. To overcome this, run the scripts **admin_role** and **admin_user** found in the folder **dna-heroku/scripts**. (**OBS**: the password must be encoded with the **KEY/SECRET** defined on the `Directus` enviroment variables. One way to accomplish this step is to create a `Directus` application locally via Docker or CLI using the environment variable **ADMIN_PASSWORD**, and copy the generated password into the **directus_users** table on the Heroku enviroment).

> **NestJS**

_The `NestJS` layer was also configured on the Heroku enviroment. To deploy it, it is necessary to:_

1. Init a git repository on the **dna-backend** folder.

2. Connect it to a Heroku application.

3. Set the enviroment variable **DIRECTUS_IP** to the Directus domain previously created on Heroku (Ex: https://dna-directus.herokuapp.com)
