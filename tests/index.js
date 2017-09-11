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

  describe("reserve", () => {
    it("creates an Array with two elements equals to null", () => {
      L.reserve(2).should.be.eql([null, null]);
    });
  });

  describe("repeat", () => {
    it("creates an Array with two elements equals to 10", () => {
      L.repeat(2, 10).should.be.eql([10, 10]);
    });
  });
});
