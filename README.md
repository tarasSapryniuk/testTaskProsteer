## How to develop the app

#### Initialize the environment

1\. Clone the repository:

```
git clone https://github.com/tarasSapryniuk/testTaskProsteer.git
```

2\. Install the dependencies:

```bash
npm install
```

3\. Generate a GitHub access token: run

```
npm run dev:build
```

and follow the instructions.

**Launch the app**

1\. Run the development server:

```bash
npm run server
```

2\. Open [localhost:8080](http://localhost:8080) to see the live app.

**Optimize!**

To apply an optimization in the production mode, do something like this:

```js
// webpack.config.js

module.exports = {
  /* ... */
  mode: "production"
  /* ... */
};
```

2\. Run the production build to see if this change affects the size:

```bash
npm run prod:build
```

3\. Run the development server:

```bash
npm run server
```

## What’s in the repo

This repo includes the source code of _TestTaskProsteer_. The app has the following structure:

```
dist           // Results of the webpack build
|
src
|- assets      // Different image files (.png, .jpg), etc.
|- js          // The business logic of this project
   |- ...
   |- index.js // The entry point. Renders the application
   |- ...
|- styles      // Static (CSS or SASS) files
|- views       // Templates of HTML or Handlebars pages
|- index.handlebars
               // ↑ The basic template which contains html, head and body

.gitignore
package.json
package-lock.json
README.md
webpack.config.js
              // ↑ The webpack config file
```

## How to render Black Friday

_TestTaskProsteer_ is built using handlebars templates, where each template is responsible for its part and placement on the screen.

```js

const draw_array_with_timer = [
   /* ... */
  { selector: /** querySelector */, template: /** Object */, object: /** Object */ },
   /* ... */
];

const draw_array_without_timer = [
  /* ... */
  { selector: /** querySelector */, template: /** Object */, object: /** Object */ },
   /* ... */
];

```

Template rendering logic is guided by whether the user sets a timer.

```js
const myTimer = new MyTimer(
  /** Amount days */ 0,
  /** Object */ timerTemplate,
  /** Object */ draw_array_with_timer,    // The timer accepts two objects with templates,
  /** Object */ draw_array_without_timer, // one of which will be provided depending on the situation.
  /* querySelector * "#timer"
);
```

To test the switching of templates

```js
// cookieHelper.js
set cookie(amount_days) {
  const end_date = new Date();
  end_date.setDate(end_date.getDate() + amount_days);
  end_date.setHours(23, 59, 59, 999); // comment
  // end_date.setSeconds(59);         // uncomment
  document.cookie =
    "date=" +
    encodeURIComponent(end_date.getTime()) +
    "; expires=" +
    end_date;
}
```
