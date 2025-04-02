const { expect } = require("chai");
const { ethers } = require("hardhat");

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

    const JMACreativeNFTFactory = await ethers.getContractFactory("JMACreativeNFTContract");
    hardhatToken = await JMACreativeNFTFactory.deploy(
      mintPrice,
      maxTokens,
      baseURI,
      royaltyArtist,
      royaltyBasis
    );

    await hardhatToken.deployed(); // Ensure deployment is complete before running tests
  });

  it("Should set the correct max supply", async function () {
    const totalSupply = await hardhatToken.getMaxSupply();
    expect(totalSupply).to.equal(1000);
  });

  it("Should check if the contract owner is correctly set", async function () {
    const contractOwner = await hardhatToken.owner();
    expect(contractOwner).to.equal(owner.address);
  });

  it("Should allow minting and verify the owner's balance", async function () {
    await hardhatToken.connect(owner).mint({ value: ethers.utils.parseEther("0.1") });
    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    expect(ownerBalance).to.equal(1);
  });
});
