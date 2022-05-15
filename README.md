# Install SSL crt/key

> Important: `https-serve` will look for the files `server.crt` and `server.key` in `~/.https-serve/` to create an https server.

**option 1: use a self-signed certificate**

```bash
(mkdir -p $HOME/.https-serve/ && cd $HOME/.https-serve/ && sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout server.key -out server.crt)
```
**option 2: use cerbot with a linked domain**

```bash
sudo certbot certonly --standalone --preferred-challenges http -d yourdomain.com 
sudo cp /etc/letsencrypt/live/bijlesconnect.nl/fullchain.pem ~/.https-serve/server.crt
sudo cp /etc/letsencrypt/live/bijlesconnect.nl/privkey.pem ~/.https-serve/server.key
```


# Install

```bash
npm install -g https-serve
```

# Run

find and entry your assets folder

```bash
sudo https-serve
```

# Browser

```bash
open https://localhost/
open http://localhost/
```

# Different PORTs

```bash
PORT=1080 HTTPS_PORT=1443 https-serve
```
