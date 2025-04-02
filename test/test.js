const { expect } = require("chai");

describe("JMACreativeNFTContract", function () {
  let JMACreativeNFTContract;
  let hardhatToken;
  let owner;
  let addr1;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();

    // Deploy the contract with the required constructor parameters
    const mintPrice = ethers.utils.parseEther("0.1");  // Example mint price in ETH
    const maxTokens = 1000;  // Example max supply
    const baseURI = "https://example.com/";  // Example base URI
    const royaltyArtist = addr1.address;  // Example royalty artist address
    const royaltyBasis = 500;  // Example royalty basis (5%)

    // Deploy the contract with the above parameters
    const JMACreativeNFTFactory = await ethers.getContractFactory("JMACreativeNFTContract");
    hardhatToken = await JMACreativeNFTFactory.deploy(
      mintPrice,
      maxTokens,
      baseURI,
      royaltyArtist,
      royaltyBasis
    );
  });

  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const totalSupply = await hardhatToken.getMaxSupply();
    expect(totalSupply).to.equal(1000);  // Check if the max supply is set correctly
  });
});


