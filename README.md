# BrightHR Senior task - Dan Mahony

## Setup

In order to access the project, navigate to your preferred folder and run 

```
git@github.com:djmahony/brightHrSenior.git
```

Followed by:

```
cd brightHrSenior
```

The next stage will be to install the dependances using:

```
npm install
```

Once this is finished you can run the unit tests with the following command:

```
npm test
```

To run the project run:

```
npm start
```

## Improvements

In order to implement the opening of the employees absences, I would add another component to display this in a modal. I would pass in a "handleClick" function that would filter the array by a passed in id for the employee. This array would then be passed into the component to be displayed. 

I would also add styles to the site and include additional tests. The one that is there also needs to be fixed, as it is checking what is rendered matches the mock data, but it would need the table that is displayed to be converted to json. 