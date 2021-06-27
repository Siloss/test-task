export default /**
 * Abstract class BaseIterator
 *
 * @class BaseIterator
 */
class BaseIterator {
  constructor() {
    if (this.constructor == BaseIterator) {
      throw new Error("Abstract classes can't be instantiated.");
    }
  }

  next() {
    throw new Error("Method 'next()' must be implemented.");
  }

  prev() {
    throw new Error("Method 'prev()' must be implemented.");
  }

  hasNext() {
    throw new Error("Method 'hasNext()' must be implemented.");
  }

  hasPrev() {
    throw new Error("Method 'hasPrev()' must be implemented.");
  }

  getResults() {
    throw new Error("Method 'getResults()' must be implemented.");
  }
}
