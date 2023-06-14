# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

I wrote 4 unit tests to cover existing functionality.

- Test 1 was to determine if the partitionKey value would be returned if a partitionKey property was provided.
- Test 2 was to determine if the hash using the SHA3-512 algorithm would be displayed when the partitionKey property was not provided.
- Test 3 was to ensure the length of the provided partitionKey did not exceed 256 characters.
- Test 4 was to ensure the return of the hash of the stringified partitionKey when provided with a non-string partitionKey.

For my refactoring exercise, I utilized optional chaining to simplify the check for the 'event.partitionKey'. I chained the methods for 'crypto.createHash()' to make my code more consice. I used a ternary operator to simplify the process of assiging the candidate. Finally, I reduced the number of unnecessary variables to make the code more easily readable and reduce repetition.
