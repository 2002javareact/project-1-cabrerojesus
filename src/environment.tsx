const devEnvironment = {
    project1BaseUrl:'http://localhost:2020'
}

const prodEnvironment = {
    project1BaseUrl:'http://ec2-3-135-226-41.us-east-2.compute.amazonaws.com:2020'
}

export let environment = devEnvironment

if(process.env.REACT_APP_ENV === 'production'){
    environment = prodEnvironment
}