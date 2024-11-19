/*eslint-disable */
export default function createInt8TypedArray(length, position, value) {
    const typedArray = new Int8Array(length);
  
    if (position >= length || position < 0) {
      throw new Error('Position outside range');
    }
  
    typedArray[position] = value;
    return typedArray;
  }
  