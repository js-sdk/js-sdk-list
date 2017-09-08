import * as L from '../src/index';

describe("List", () => {
  describe("chunk", () => {
    it("empty list", () => {
      L.chunk([], 2).should.be.eql([]);
    });

    it("one element", () => {
      L.chunk([1], 1).should.be.eql([[1]]);
    });

    it("many elements", () => {
      L.chunk([1, 2, 3, 4], 2).should.be.eql([[1, 2], [3, 4]]);
    });
  });
});
