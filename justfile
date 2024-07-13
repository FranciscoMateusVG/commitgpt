compile:
  @echo "Running bun compiler..."
  bun build --compile --target=bun-darwin-arm64 ./src/index.ts --outfile myapp

inject:
  @echo "Injecting sea-config.json..."
  cp $(volta which node) hello
  npx postject hello NODE_SEA_BLOB sea-prep.blob \
    --sentinel-fuse NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2 \
    --macho-segment-name NODE_SEA 