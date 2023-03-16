import { Analytics } from "@segment/analytics-node";

console.log("running test...");

const analytics = new Analytics({
  writeKey: "DjTUVRhleGaZX31JQpj6XIAaprCIb25W",
  maxEventsInBatch: 1,
}).on("error", console.error);

analytics.identify({
  userId: "Demo",
  traits: {
    avatar: "foo",
  },
});

analytics.track({ userId: "foo", event: "Demo" }, (err, ctx) =>
  console.log(ctx)
);
