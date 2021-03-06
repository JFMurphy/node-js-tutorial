# Notes - Clients and servers

Client requests from server
Server handles request and responds to client

Asking for data from a website, for example, is a request.

**Protocols**  
Set of communication rules that two sides agree on to use when communicating.

Each client and server has its own ip address.  
If a client needs to communicate with a server it will first need to connect to the IP address of the server. This opens a socket between the two computers which is just a channel through which information can be sent.  
The information is structured with different protocols eg. HTTP or FTP.  
FTP is for file transfer. HTTP is used for websites.
Once the structure of the information has been decided on eg. HTTP this info is then sent down the socket using a protocol called TCP. The data is split into smaller packets and then sent to the server.  
NodeJS gives us access to this functionality. We can tell Node to open a server and how to handle requests from a client.

**Ports**  
When a request is received to a server on which NodeJS is running how do we know the request is meant for NodeJS and not for some other program? How do we know that we want NodeJS to handle the request.
NodeJS listens to a particular port number on the IP address. If a request is sent to an IP address on a particular port number then Node will respond if it is listening to the same port number.
Example port number: 72.24.12.84:3000
