# Tandevia Gateway

The control point between your applications and AI providers: one OpenAI-compatible
API in front of OpenAI, Anthropic, AWS Bedrock, Google Vertex, Azure, Mistral, Ollama
and many more, with failover, load balancing, semantic caching, virtual keys,
budgets, rate limits and an MCP gateway.

## Run it

```bash
docker build -f transports/Dockerfile -t tandevia/gateway .
docker run -p 8080:8080 -v $(pwd)/data:/app/data tandevia/gateway
```

Then open http://localhost:8080. The production deployment on
aigateway.forscope.eu is described in [deploy/aigateway](deploy/aigateway/README.md).

## Branches

- `tandevia` (default): Tandevia Gateway, rebranded.
- `dev`: mirrors upstream Bifrost. Sync it from `maximhq/bifrost` and merge into `tandevia`.

The rebrand touches user-facing text, logos and links only. Code identifiers, Go
module paths, configuration keys and the `X-Bifrost-*` / `x-bf-*` API headers are
unchanged, so existing SDK integrations and configuration files keep working and
upstream merges stay small.

## License and origin

Tandevia Gateway is a modified version of [Bifrost](https://github.com/maximhq/bifrost)
by H3 Labs Inc., used under the [Apache License 2.0](LICENSE). See [NOTICE](NOTICE).
The original upstream README is kept as [README.upstream.md](README.upstream.md).
