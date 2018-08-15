# Front-end app
Front-end application written in [Node.js](https://nodejs.org/en/) that puts together all of the microservices under [microservices-demo](https://github.com/microservices-demo/microservices-demo).


## Original Documentation

[Link to Original Repo](https://github.com/microservices-demo/front-end)

## Build 
with Modification for Masterfachstudie:

```
./buildImage.sh
```

## Check
```
docker ps
```

Should show the newly created image `weaveworksdemos/front-end:MasterFachstudie`


## Start
Change to demo application: 
[Link to Repo](https://github.com/microservices-demo/microservices-demo)

and start it.

**Hint:** This will only work, if you built the image `weaveworksdemos/front-end:MasterFachstudie` locally on your pc. (See chapter Build)

