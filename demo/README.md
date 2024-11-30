# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Purpose

This project is really a POC / demo to simulate React application that reads a stream of data (this has been largely scaled back)
so as not provide any proprietary data structures) and is able to display that data in a clean UI.  Overall, this is designed to be 
extremely simple, and really is being used as a part of my portfolio to demonstrate development skills with Node and React (albeit this
example is still limited).

## Items to Address

- I still want to address a better streaming simulation.  In the real-world, this stream would be coming from an external source such as Kafka.
  I'll be putting in some additional work to effectively get the streaming closer to a real example.
- While I have put basic filtering in place (on all fields), I'm going to evaluate other options for more
  flexible and robust filtering.  I'm also working on improving the sorting options for this.
- I put the data into a table for the time being; I had thought about leveraging a card model, but that might not prove to be
  the optimal user experience for this application.
- I altered the "mock" generator to reset the data each time that the API is called; this was intentional, though it doesn't truly
  represent how actual stream processing would work (I did this to allow for ease of testing without having the state being incremented by a specific amount).
  I will revert this back to how I had this setup originally once I'm satisfied with localized testing with a single data stream.
- Yes, I will work on my .css design as well... I had 3-5 hours to get this completed, so it is very much in a rudimentary stage.

## Next Steps

I intend to containerize this and deploy this in a full integration environment, either GCP (Cloud Run) or AWS (ECS).
The purpose would then be to wire up an actual streaming source beyond the local API, and build some automations around it
to better perform functional testing.  More to come on that.

## Components

This project consists of 2 components:  
- The core React App [demo](./)
- A mock [generator](../sensor-stream-generator) application is a basic NodeJS application to randomly generate data for the React application. 

## Running the Generator

To run this entire package locally, first go to the [generator](../sensor-stream-generator) and execute `npm start`.  This will start the generator 
application locally listening at [http://localhost:4000](http://localhost:4000).  You can verify this through Postman with a GET request to [localhost:4000/sensors](http://localhost:4000/sensors).
**Note**: this application does not have any UI component associated with it.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)
