import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xFBE22DB11856ce9960F1B22F2A968aDd907a87FF",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Fork Jembe",
        description: "This NFT will give you access to NarutoDAO!",
        image: readFileSync("scripts/assets/fork-jembe.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()
