import { Model } from "@vuex-orm/core";
import Organization from "./Organization";
import User from "./User";

export default class Ticket extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = "tickets";

  // List of all fields (schema) of the post model. `this.attr` is used
  // for the generic field type. The argument is the default value.
  static fields() {
    return {
      _id: this.attr(null),
      url: this.attr(""),
      external_id: this.attr(""),
      created_at: this.attr(""),
      type: this.attr(""),
      subject: this.attr(""),
      description: this.attr(""),
      priority: this.attr(""),
      status: this.attr(""),
      submitter_id: this.attr(null),
      assignee_id: this.attr(null),
      organization_id: this.attr(null),
      tags: this.attr([]),
      has_incidents: this.boolean(false),
      due_at: this.attr(""),
      via: this.attr(""),
      organization: this.belongsTo(Organization, "organization_id", "_id"),
      assignee: this.belongsTo(User, "assignee_id", "_id"),
      submitter: this.belongsTo(User, "submitter_id", "_id"),
    };
  }
}
