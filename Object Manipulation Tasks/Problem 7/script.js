// Write an “assertObjectsEqual” function from scratch.
var expected = { foo: 5, bar: 6 };
var actual = { foo: 6, bar: 6 };

function assertObjectEqual(actual, expected, testName) {
  for (let key in actual) {
    if (!(key in expected)) {
      // If a key is present in one object but not the other one
      return false;
    }
    if (expected[key] !== actual[key]) {
      //Values mismatch case
      return false;
    }
  }
  return true;
}

const isEqual = assertObjectEqual(
  actual,
  expected,
  "detects if both objects are equal"
);
if (isEqual) {
  console.log("PASSED");
} else {
  console.log(
    `FAILED, Expected ${JSON.stringify(expected)} but got ${JSON.stringify(
      actual
    )}`
  );
}
