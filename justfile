compile:
  @echo "Running bun compiler..."
  bun build --compile --target=bun-darwin-arm64 ./src/index.ts --outfile myapp
