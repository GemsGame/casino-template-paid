const { validationResult } = require('express-validator');
const ethers = require("ethers");
const abi = require("../config/dice-abi.json");

const provider = new ethers.JsonRpcProvider(
  "https://polygon-bor-rpc.publicnode.com"
);
const signer = provider.getSigner();
const address = "0x54d738defaA0152D83508ac4346880F180F8cF2B";
const contract = new ethers.Contract(address, abi, signer);

exports.getVRFFee = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { gasAmount } = req.body;

  try {
    return await contract.getVRFFee(gasAmount);
  } catch (error) {
    return res.status(500).json({ msg: "The Contract Error" });
  }
};
