import { ethers } from "hardhat";

const CREATE2ANY_ADDRESS = "0x49088917Be000E083963312b50866fDf52798A8b";
describe("AutoDeployContract", function () {
  it("Should be deployed", async function () {
    const factory = await ethers.getContractAt(
      [
        "function findCreate2Address(bytes32 salt, bytes calldata initCode) view returns (address deploymentAddress)",
      ],
      CREATE2ANY_ADDRESS
    );
    const salt =
      "0x0000000000000000000000000000000000000000000000000000000000000888";
    const address = await factory.findCreate2Address(salt, "0x00");
    console.log(`address is ${address}`);
  });
});
