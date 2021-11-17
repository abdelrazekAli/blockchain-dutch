const chai = require("chai");
const BN = require("bn.js");

// Enable and inject BN dependency
chai.use(require("chai-bn")(BN));

describe("Dutch Unit Test", function () {
  before(async function () {
    dutchContract = await ethers.getContractFactory("DutchContract");
    dutchContractDeploy = await dutchContract.deploy();
    await dutchContractDeploy.deployed();
  });
});
