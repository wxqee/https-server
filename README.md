# Generate SSL crt/key

```
mkdir ssl/ && cd /ssl
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout server.key -out server.crt
```

# Run http/https server

```
node install
PORT=3000 node index.js
```

HTTP PORT 3000
HTTPS PORT 443
 
