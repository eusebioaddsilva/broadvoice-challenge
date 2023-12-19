# broadvoice-challenge

## Setup
- clone the project
- create a <b>.env</b> file in the root of the project with a variable called `BASE_URL = 'https://www.leyaonline.com/pt/'`
- run command `npm install` in the root of the project
- run command `npm run cy:run` to run every spec that is present in e2e folder 📁 

## Run status 🟢
![image](https://github.com/eusebioaddsilva/broadvoice-challenge/assets/50211028/ee9a7271-7ba7-4590-94bb-83510e8c8019)

### Nice to know

- I tried to keep what could be "repetitive code" in cy.commands
- I also added a github action that runs the tests whenever a PR is created and whenever code is added to master
