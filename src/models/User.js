import { Model } from "@vuex-orm/core";
import Organization from "./Organization";
import Ticket from "./Ticket";

export default class User extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = "users";

  // List of all fields (schema) of the post model. `this.attr` is used
  // for the generic field type. The argument is the default value.
  static fields() {
    return {
      _id: this.attr(null),
      url: this.attr(""),
      external_id: this.uid(),
      name: this.attr(""),
      alias: this.attr(""),
      created_at: this.attr(""),
      active: this.boolean(true),
      verified: this.boolean(true),
      shared: this.boolean(true),
      locale: this.attr(""),
      timezone: this.attr(""),
      last_login_at: this.attr(""),
      email: this.attr(""),
      phone: this.attr(""),
      signature: this.attr(""),
      organization_id: this.attr(null),
      tags: this.attr([]),
      suspended: this.boolean(false),
      role: this.attr("end-user"),
      organization: this.belongsTo(Organization, "organization_id", "_id"),
      assigned: this.hasMany(Ticket, "assignee_id", "_id"),
      submitted: this.hasMany(Ticket, "submitter_id", "_id"),
    };
  }
}
