# Generate SSL crt/key

```
(mkdir -p $HOME/.https-serve/ && cd $HOME/.https-serve/ && sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout server.key -out server.crt)
```

> Important: Find your crt/key files in `$HOME/.https-serve/`.

# Install

```
npm install -g https-serve
```

# Run

find and entry your assets folder

```
sudo https-serve
```

# Browser

```
open https://localhost/
open http://localhost/
```

# Different PORTs

```
PORT=1080 HTTPS_PORT=1443 https-serve
```
