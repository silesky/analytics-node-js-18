import { Analytics } from "@segment/analytics-node";

console.log("running test...");

const analytics = new Analytics({
  writeKey: "DjTUVRhleGaZX31JQpj6XIAaprCIb25W",
  maxEventsInBatch: 1,
}).on("error", console.error);


analytics.track({ userId: "foo", event: `Hello from ${process.version}` }, (err, ctx) =>
  console.log(ctx, "Test Success!")
);
