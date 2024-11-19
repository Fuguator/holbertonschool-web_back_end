/*eslint-disable */
export default function createInt8TypedArray(length, position, value) {
  const ArrayBuffer = new Int8Array(length);

  if (position >= length || position < 0)
    throw Error('Position outside range');

  ArrayBuffer[position] = value;
  return ArrayBuffer;
}