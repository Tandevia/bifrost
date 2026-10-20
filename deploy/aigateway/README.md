# aigateway.forscope.eu

Tandevia Gateway on the DigitalOcean droplet `tandevia-gateway` (fra1, project Tandevia).

| what | where |
|---|---|
| checkout | `/opt/tandevia-gateway` (branch `tandevia`) |
| compose | `/opt/tandevia-gateway/deploy/aigateway` |
| data (SQLite config + logs) | `deploy/aigateway/data/`, seeded with `config.json` from this folder |
| secrets | `deploy/aigateway/.env` (mode 600, never committed) |
| HTTPS | Caddy on 80/443, Let's Encrypt certificate in `deploy/aigateway/caddy/` |
| DNS | Cloudflare, zone forscope.eu: `A aigateway → 104.248.43.141`, DNS only (grey cloud) |

The firewall `tandevia-gateway` allows 22, 80 and 443. The gateway port 8080 is bound to
the droplet's loopback only; everything public goes through Caddy.

## Secrets (`.env`)

```
BIFROST_ENCRYPTION_KEY=   # keep stable: losing it makes stored provider keys unreadable
BIFROST_SETUP_TOKEN=      # needed to change admin credentials while auth is off
BIFROST_ADMIN_PASSWORD=   # dashboard login as "admin"
GATEWAY_VERSION=
```

Copies of the three secrets are in the macOS Keychain of whoever deployed it,
service `aigateway.forscope.eu`.

## Deploy / update

```bash
cd /opt/tandevia-gateway && git pull
cd deploy/aigateway && GATEWAY_VERSION=$(cat ../../transports/version)-tandevia docker compose up -d --build
```

The image builds on the droplet (UI + Go, ~15 min on 1 vCPU, uses swap).

## Outbound traffic

On first boot the gateway downloads its pricing datasheet from getbifrost.ai and will
not start if that fails. For air-gapped installs point `framework.pricing.pricing_url`
and `model_parameters_url` at `file://` copies. The "Bifrost Announcements" news feed
is switched off after install (`PUT /api/rss/settings {"enabled": false}`).
