# fizzbuzz-cloud

## this repository holds codebase for both the gcp functions and nextjs application for the frontend.


## frontend

---


- App is a next.js app written in Typescript and it uses Tailwind, React Context, Formik, Yup, Jest/ React testing library and the Fetch API
- useFormik is a hook to handle form state, event and error handler that can also allow for validation and for that I created a Yup schema to handle the form validation and connected it the useFormik.
- I used React Context API to handle the FizzBuzz APIs state and handler functions. The state is managed by a reducer that can update the fields isMounted, result, loading, and errorMSG. The useGlobalContext is a hook that I wrote to make it easier to call state and dispatch from the context store. With that I wrote a function called handleResultChange that will run a dispatch to set the state to isMounted and loading and then will run a fetch and once the fetch resolved another dispatch is ran so to set the result, errorMSG and loading to false. the isMount will display the component ResultDisplay and loading will show a loading ui and when it is false it will show the result or errorMSG. 
 
To Run Locally 

```bash
cd frontend
yarn install
yarn dev
```
## Backend

---
- Backend was written using Typescript and @google-cloud/functions-framework library to handle utilizing GCP Functions. Project has functions handle the CORS permissions along with to meet the project requirements of being 1 <= n <= 10000 and only take number. Index.ts was just a base implementation of fizzbuzz to make sure I had that working proplery. Then I broke that up to Fizz.ts and Buzz.ts for the Workflow.yaml. For a local simulation a recreated an endpoint called SimulationWorkflow as that would be a local instance of calling both functions processing it and returning it to the endpoint to simulate how workflow would work with my fizz and buzz functions. 



To Run Locally

```bash
    cd functions
    yarn install
    yarn start
```
