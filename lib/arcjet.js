import arcjet, { tokenBucket } from "@arcjet/next";

const aj = arcjet({
  key: process.env.ARCJET_KEY,
  characteristics: ["userId"], 
  rules: [
    tokenBucket({
      mode: "LIVE",
      refillRate: 15, // 10 collections
      interval: 3600, // per hour
      capacity: 15, // maximum burst capacity
    }),
  ],
});

export default aj;