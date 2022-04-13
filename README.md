# DNA

[![codecov](https://codecov.io/gh/cesarsalesgomes/dna/branch/main/graph/badge.svg?token=YH13U4UY6V)](https://codecov.io/gh/cesarsalesgomes/dna)

[![GitHub Super-Linter](https://github.com/cesarsalesgomes/dna/workflows/Lint%20Code%20Base/badge.svg)](https://github.com/marketplace/actions/super-linter)

Fullstack project in Typescript, with the objective of joining three well-regarded tools in the community (`back-end` **[NestJS](https://nestjs.com/)** / **[Directus](https://docs.directus.io)**, `front-end` **[React](https://reactjs.org/)**) in order to create an initial environment with the main necessary settings that a project commonly requires during its lifetime.

<br />

## **Development** ⚡️

### Local development environment

1. Clone this repository with git.

2. Run `npm start` under the root folder. It will start the docker images needed for development, import the most current **migration** of the application and generate the **GraphQL Sdk** used as a mirror of the Directus data models for use in the business layer (Nestjs) and frontend.

3. Open Directus configuration site by going to [`http://localhost:8055`](http://localhost:8055) in your browser.

<br />

## **Migration** 🚚

`Directus` added a **[PR](https://github.com/directus/directus/pull/7939)**, thus being possible to easily generate and save snapshots of the development enviroment and export/import the data model from/to various Directus instances.

Below are the steps to export the schema generated by your docker Directus instance, to use on to your cloud directus instance:

1. Start the development enviroment.

2. Go to the folder `migration` and run **npm run export** (It will generate the schema inside the docker instance, that will be moved to the current migration directory and the Directus migrations folder, used as a volume on docker compose to be imported on development initialization).

3. For import into development environment and production environment, use:

   1. `Development`: access the docker Directus instance terminal, go to the **migration** folder, and run **npx directus schema apply schema.yaml**

   2. `Production`: on the cloud enviroment, copy the schema generated to your cloud Directus folder and run **npx directus schema apply /path/to/schema.yaml**.

<br />

## **GraphQL SDK** 🚀

### Steps to generate the database models and operations in TypeScript for equalized use on Nestjs/React with Directus

1. Install the dependencies under the `graphql` folder with `npm install`.

2. With development docker environment running, run `npm start` to execute the codegen script.

3. The script will look for all folders containing a `codegen.yml` configuration file, and then generate the 3 files below based on the queries/mutations within each feature:

   1. `folder_name.sdk.ts`: operations of the queries/mutations to be used in the React/Nest environments.

   2. `folder_name.mock.ts`: mocks of the queries/mutations to be used in the spec tests of the Nest environment.

   3. `folder_name.hooks.ts`: hooks of the queries/mutations to be used in the React enviroment.

4. The files will be automatically copied and moved by the script to their usage directories on the Nest/React enviroments according to their folder names.

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

## **Tests** ✅

For the testing stage, all the well-known and recommended structure of the **[NestJS Testing Module](https://docs.nestjs.com/fundamentals/testing)** was used, leaving it responsible for `UNIT TESTING` and `INTEGRATED TESTING`, applying them according to what the system needs during its development.

For the `END-TO-END`, **[Cypress](https://github.com/cypress-io/cypress)** will be used, a framework already well recognized and recommended by the community, due to its ease and great integration with React.

### Examples

> **[UNIT TESTING](https://github.com/cesarsalesgomes/dna/blob/main/nestjs/src/system/system.spec.ts)**

_Test example in which were concerned with covering a portion of the business layer of the system module, without integration with other layers, such as the data layer._

> **[INTEGRATION TESTING](https://github.com/cesarsalesgomes/dna/blob/main/nestjs/src/cat/cat.spec.ts)**

_Example of test in call of a system route, in which the call to the data layer was abstracted, trying to cover as much as possible the Directus service._

_The automatic generation of false data, generated from the **[graphql-codegen-typescript-mock-data plugin](https://github.com/ardeois/graphql-codegen-typescript-mock-data#readme)**, was also provided in the `generate` script, so as to take advantage of `GraphQL` and thus obtain agility in the development of the tests._

> **E2E TEST**

_Will be documented when starting React development ..._

<br />

## **Authentication** 🔒

### To obtain an authentication token and gain access to the routes developed in the application, perform the steps below

1. Generate access token using Directus authentication login: <br />

   > **[[Directus] Authentication reference](https://docs.directus.io/reference/api/system/authentication/)**

2. Pass the token in the Authorization header (`Authorization: Bearer <token>`):

   > **`Authorization: Bearer eyJh...KmUk`**

<br />

## **Deployment** ☁️

After research and attempts to deploy the application via docker compose in the `Azure` environment, it was noticed that the ease of execution and configuration of the development environment is not the same in cloud environments with docker.

In this way, it was decided to deploy each system layer in parts, researching the environment where its configuration was simpler and more intuitive, less costly and with better support.

<br />

> **Directus / Database**

_It was chosen to deploy the `Directus` on the **[AWS](https://aws.com)** enviroment. It has a basic unpaid plan of 1 year to its EC2 basic instance (Thus being more attractive to customers and creation of POC's) and greater freedom for machine configuration._

_Even having more steps of installation and manual configuration, the environment was chosen due to the idea of ​​integrating it with **[Nginx](https://www.nginx.com/)**, thus obtaining only one IP in production (with reverse proxy), and to take advantage of the good and free server monitoring tool **[Amplify](https://amplify.nginx.com)**, explained in the next topic._

_**IMPORTANT**: The idea behind the configuration of the reverse proxy, is to redirect all calls that contain `nestjs` in their route for the NestJS server configured in the Heroku environment created in the next section; and redirect all other calls to the Directus enviroment, thus obtaining the environment configuration with only one ip._

_For that, then, **ALL** controllers created in the NestJS environment will need to have `nestjs` in their configuration (Ex: /nestjs/cats)._

_Also remembering that continuous integration with Git will not be necessary, as there will be no code development in this environment, being only necessary to update the environment when necessary through the steps in **[Directus update guide](https://docs.directus.io/configuration/upgrades-migrations/)**._

_Below are the steps to create the environment:_

1. Have in hand the credentials of the chosen cloud database (Recommended: `AWS RDS Mysql Database`, due to gratuity).

2. Follow the steps of the **[Link](https://www.youtube.com/watch?v=adQDNRZ59r0)** to install Nginx, SSL and Node.js on an AWS EC2 FreeTier instance.

3. Create the project following the steps on **[Directus Quickstart Guide](https://docs.directus.io/getting-started/quickstart/)** using the database production credentials. The recommend directory is `/home/ec2-user` (The command `sudo su` will be necessary).

4. Start the project using the **[Directus Linux tutorial](https://docs.directus.io/getting-started/installation/ubuntu/)** with `pm2`, to keep the application alive.

5. Copy the file `dna.conf` on the nginx folder, to the directory `etc/nginx/conf.d` on the EC2 instance folder.

6. Replace the three variables **{{HEROKU_NESTJS_API_URL}}** on the `dna.conf` file with the Heroku app Public IP created in the next section.

7. Replace the variable **{{NESTJS_PUBLIC_DNS}}** with the DNS acquired necessary in the step 2.

8. Restart the Nginx server with the command `systemctl restart nginx`.

**Issues:**

1. **[Configuration to connect to AWS RDS MySql Database](https://www.youtube.com/watch?v=Ng_zi11N4_c&t=445s)**

<br />

> **NestJS**

_The `NestJS` layer was configured on the Heroku enviroment. Due to being the business layer, and needing more code deployment, Heroku was chosen due to the simplicity of connecting to GitHub and performing continuous integration, still being free. To deploy it, it is necessary to:_

1. Init a git repository on the **nestjs** folder (**Note:** As it is not recommended to create nested git projects, copy and paste the `nestjs` folder outside of the dna environment, and start a git repository alone).

2. Connect it to a Heroku application.

3. Set the enviroment variable **DIRECTUS_IP** to the Directus domain previously created on Aws (Ex: www.dna-directus.com)

<br />

## **Monitoring** 🛡️

Monitoring a Node.js application is a very important step in the system, so that it is possible to monitor the performance of the system in a fast, simple, efficient and intuitive way.

As the idea of the environment is to look for tools with the highest cost-benefit, and motivated by the 4 question on the Rocketseat **[video](https://www.youtube.com/watch?v=HrkECIzaQvE)** recommendation on which tools to use for monitoring Node.js applications, **[Nginx Amplify](https://amplify.nginx.com)** monitoring Linux was chosen.

Much because it was developed by the `Nginx` developers themselves, because of the excellent documentation, easy instalation, free plan for knowledge of the tool, and many other motivations.

To install the tool on an AWS EC2 instance (Amazon Linux), use the steps below:

1. After installing Nginx in the previous section on an AWS EC2 instance, follow the steps in this **[link](https://amplify.nginx.com/docs/guide-installing-and-managing-nginx-amplify-agent.html#installing-on-centos-red-hat-linux-or-amazon-linux)** to install Amplify on Amazon Linux

2. To log only user interaction requests (disregard robot calls, Directus Admin interactions, etc.), replace the **access_log** line in **etc/nginx/nginx.conf** file with the condition below:

```bash
map $uri $loggable {
  ~^/graphql 1;
  ~^/nestjs/ 1;
  default 0;
}

access_log  /var/log/nginx/access.log main_ext if=$loggable;
```

**Issues:**

1. Many dependency errors with `Python` occurred while trying to install Amplify. To fix the dependencies, use the **[Python dependency errors link](https://stackoverflow.com/questions/8087184/installing-python-3-on-rhel)**, to install the necessary versions informed in the attempts to install the package `nginx-amplify-agent package`.

<br />

## **File Storage** 📁

Directus offers a complete **[solution](https://docs.directus.io/app/file-library/#file-library)** for file storage, with integration to the main cloud solutions available, like Aws S3, Azure, etc.

Because most of the architecture already built is on Aws, `S3` was chosen due to its ease, practicality, security and to centralize the solution layers. Follow the **[link](https://docs.directus.io/configuration/config-options/#s3-s3)** to configure the Directus environment for Aws S3.

**Issues:**

1. After creating a Bucket on S3, to avoid permission errors, it's necessary to add the `AmazonS3FullAccess` permission to the Aws admin user.

<br />

## **Cache** 🧠

Directus offers a built-in data cache **[solution](https://docs.directus.io/configuration/config-options/#cache)**, with the options of `local memory`, **[Redis](https://redis.io/)** and **[Memcache](https://memcached.org/)**.

Redis was chosen because is the most popular distributed caching engine today. It is production-proven and provides a host of capabilities that make it the ideal distributed caching layer for applications. **[Redis Cloud](https://redis.com/redis-enterprise-cloud/overview/)** was used to the cache cloud solution, due to its ease configuration, monitoring and better cost benefit.

For monitoring and visualization of the Redis health, **[RedisInsight](https://redis.com/redis-enterprise/redis-insight/)** was chosen because provides an intuitive and efficient GUI, allowing the interaction, monitor, and management of the data. For development use, follow the steps of the **[link](https://docs.redis.com/latest/ri/installing/install-docker/)**.

<br />

## **Logging** 🔎

The idea behind using the Directus platform, because it's a live system, will have it's most critical errors reported and corrected by the community in new updates, and so be necessary to always keep it updated in production/development environments to be less likely to have unwanted problems.

On the other hand, errors found in the business platform (the NestJS layer), must be minimized as much as possible through unit and integrated tests.

However, unexpected errors can occur, and a good error logging strategy will be helpful to resolve them as quickly and efficiently as possible.

For this, the combination of **[NestJS Error Filter](https://docs.nestjs.com/exception-filters)** (making it possible to centralize and capture all business exceptions), together with the **[winston-cloudwatch](https://www.npmjs.com/package/winston-cloudwatch)** package, made it possible to store the error logs found during the system's production runtime in the **[AWS CloudWatch](https://aws.amazon.com/pt/cloudwatch/)**.

This quickly find the possible errors through the filters provided by the tool, and solve them efficiently for having been reported with the necessary details.

**Observation:** It's necessary to configure the environment variables according to the **[winston-cloudwatch configuration GitHub link](https://github.com/lazywithclass/winston-cloudwatch#configuring)**

**Issues:**

1. After creating a Group/Stream Logs on CloudWatch, to avoid permission errors, it's necessary to add the `CloudWatchLogsFullAccess` permission to the Aws admin user.
2. Due to the NestJS configuration peculiarities, the steps reported in this **[Stack Overflow link](https://stackoverflow.com/questions/69433044/winston-with-aws-cloudwatch-on-nestjs)** were followed.

<br />

## **Continuous Integration** 🤖

`Continuous Integration` is a way to increase code quality, removing the responsibility from the developers some manual steps that must be performed before merging to the main code. Tests and checks of the code are handled on a server and automatically reported back.

For this, **[GitHub Actions](https://docs.github.com/actions)** were used, due to the easy configuration with the repository already hosted on `GitHub`, and the many ready-made actions already shared by the community.

Below is the list of configured actions:

> **[TEST](https://github.com/cesarsalesgomes/dna/blob/main/.github/workflows/test.yml)**

_Battery of tests performed in the business layer when performing a pull request to the main branch. If any of the tests fail, merge will be canceled._

> **[BUILD](https://github.com/cesarsalesgomes/dna/blob/main/.github/workflows/build.yml)**

_Checks if the business layer build was performed normally, avoiding data typing errors and possible execution errors. If an error occurs, the merge will be canceled._

> **[COVERAGE](https://github.com/cesarsalesgomes/dna/blob/main/.github/workflows/coverage.yml)**

_Uploads generated coverage to **[Codecov](https://about.codecov.io/)**, highlighting and keeping history on which portions of the code that have not been properly tested or may require additional testing._

> **[DEPENDABOT](https://github.com/cesarsalesgomes/dna/blob/main/.github/dependabot.yml)**

_**[Dependabot](https://docs.github.com/en/enterprise-server@3.3/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/automating-dependabot-with-github-actions)** creates pull requests to keep your dependencies up to date, and uses GitHub Actions to perform automated tasks when these pull requests are created._

> **[LINTER](https://github.com/cesarsalesgomes/dna/blob/main/.github/workflows/linter.yml)**

_**[Super-linter](https://github.com/marketplace/actions/super-linter)** automate the process establishing coding best practices and prevent broken code from being uploaded to the main branch._

<br />

## **React** ⚛️

`React` is a great tool for building frontend applications. It has a very diverse ecosystem with hundreds of great libraries for literally anything you might need.

The goal of the React repository is to serve as a ready-to-start collection of resources and good practices when starting a new project.

The application has been bootstrapped using **[Vite](https://vitejs.dev/)**, a pre-configured dev server + bundler combo, but leaner and faster, recommended nowadays instead of the traditional `create-react-app`.

`Eslint` + `Prettier` were used for formatting code and receiving alerts to maintain the good practices of React codding.

For server communication, **[React Query](https://react-query.tanstack.com/)** was used, a library that effectively helps manage and keep track of server state, providing a consistent and straightforward way of managing server state as all of this have been abstracted into the library.

The project structure was inspired by the great article about the **[Screaming Architecture](https://dev.to/profydev/screaming-architecture-evolution-of-a-react-folder-structure-4g25)**, that motivates the developer to focus on what the system needs to the tell about code, not the framework used. Below is the explanation of the structure:

```sh
src
|
+-- assets            # assets folder can contain all the static files such as images, fonts, etc.
|
+-- components        # shared components used across the entire application
|
+-- config            # all the global configuration, env variables etc. get exported from here and used in the app
|
+-- features          # feature based modules
|
+-- hooks             # shared hooks used across the entire application
|
+-- lib               # re-exporting different libraries preconfigured for the application
|
+-- providers         # all of the application providers
|
+-- routes            # routes configuration
|
+-- stores            # global state stores
|
+-- test              # test utilities and mock server
|
+-- types             # base types used accross the application
|
+-- utils             # shared utility functions
```
