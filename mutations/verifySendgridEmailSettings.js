import SimpleSchema from "simpl-schema";
import ReactionError from "@reactioncommerce/reaction-error";
import { SendgridConfig } from "../config.js";

const inputSchema = new SimpleSchema({
  shopId: String
});

/**
 * @name verifySendgridEmailSettings
 * @summary Verify the current email configuration
 * @param {Object} context - an object containing the per-request state
 * @param {Object} input - an object of all mutation arguments that were sent by the client
 * @param {String} input.shopId - ShopID this setting belongs to.
 * @returns {Boolean} - returns true if Sendgrid connection succeeds
 */
export default async function verifySendgridEmailSettings(context, input) {
  inputSchema.validate(input);

  const { shopId } = input;

  await context.validatePermissions("reaction:legacy:emails", "read", { shopId });

  return isVerified;
}
