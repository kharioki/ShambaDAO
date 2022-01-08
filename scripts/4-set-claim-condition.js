import sdk from "./1-initialize-sdk.js";

const bundleDrop = sdk.getBundleDropModule(
  "0xFBE22DB11856ce9960F1B22F2A968aDd907a87FF",
);

(async () => {
  try {
    const claimConditionFactory = bundleDrop.getClaimConditionFactory();
    // Specify conditions.
    claimConditionFactory.newClaimPhase({
      startTime: new Date(),
      maxQuantity: 500_000,
      maxQuantityPerTransaction: 1,
    });


    await bundleDrop.setClaimCondition(0, claimConditionFactory);
    console.log("✅ Successfully set claim condition on bundle drop:", bundleDrop.address);
  } catch (error) {
    console.error("Failed to set claim condition", error);
  }
})()
