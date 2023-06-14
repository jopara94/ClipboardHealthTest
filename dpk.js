const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  let candidate =
    event?.partitionKey ||
    crypto
      .createHash("sha3-512")
      .update(JSON.stringify(event) || TRIVIAL_PARTITION_KEY)
      .digest("hex");

  candidate =
    typeof candidate !== "string" ? JSON.stringify(candidate) : candidate;

  return candidate.length > MAX_PARTITION_KEY_LENGTH
    ? crypto.createHash("sha3-512").update(candidate).digest("hex")
    : candidate;
};
