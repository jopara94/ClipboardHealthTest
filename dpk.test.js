const { deterministicPartitionKey } = require("./dpk");

test("If the deterministicPartitionKey function returns the value of partitionKey when the partitionKey is provided", () => {
  const event = { partitionKey: "myKey" };
  const result = deterministicPartitionKey(event);
  expect(result).toBe("myKey");
});

test("If the deterministicPartitionKey function returns the hash using the SHA3-512 algorithm when no partitionKey is provided", () => {
  const event = { someData: "example" };
  const expectedHash = crypto
    .createHash("sha3-512")
    .update(JSON.stringify(event))
    .digest("hex");
  const result = deterministicPartitionKey(event);
  expect(result).toBe(expectedHash);
});

test("Testing to ensure that the partitionKey should not be greater than 256 characters", () => {
  const event = { partitionKey: "a".repeat(300) };
  const result = deterministicPartitionKey(event);
  expect(result.length).toBeLessThanOrEqual(256);
});

test("Testing to ensure the return of the hash of the stringified partitionKey when provided with a non-string partitionKey", () => {
  const event = { partitionKey: 123 };
  const expectedHash = crypto
    .createHash("sha3-512")
    .update(JSON.stringify(event.partitionKey))
    .digest("hex");
  const result = deterministicPartitionKey(event);
  expect(result).toBe(expectedHash);
});
