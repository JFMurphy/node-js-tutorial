Notes - Express Route Parameters

In the previous tutorials express was responding to static requests (ie. hardcoded urls). This tutorial covers how to handle dynamic requests which would be used in a social networking site for example.

1. Create a new get method that will respond to a request:
    > app.get('/profile/:id')
    1.1 The colon ':' character make it so that whatever follows it will act like a variable that will change depending on the request. In this case it could be an id of a profile of a person in a database.
2. Fire a callback function in the same get method that will respond with the id that was sent in the request.
3. This is done by accessing the id param from the parameter object on the request object like so.
    > req.params.id
    3.1 This will look for parameters on the request that have been specified with the colon ':' character and store them to the params object which is then accessed using the name of the param.
4. Return a message that contains the id the client requested to the client when it requests any id of a profile.
    > res.send('You requested a profile with id ' + req.params.id);