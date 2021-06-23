import { Model } from "@vuex-orm/core";
import User from "./User";
import Ticket from "./Ticket";

export default class Organization extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = "organizations";

  // List of all fields (schema) of the post model. `this.attr` is used
  // for the generic field type. The argument is the default value.
  static fields() {
    return {
      _id: this.attr(null),
      url: this.attr(""),
      external_id: this.uid(),
      name: this.attr(""),
      domain_names: this.attr([]),
      created_at: this.attr(""),
      details: this.attr(""),
      shared_tickets: this.boolean(false),
      tags: this.attr([]),
      users: this.hasMany(User, "organization_id", "_id"),
      tickets: this.hasMany(Ticket, "organization_id", "_id"),
    };
  }
}
