import * as organizations from "../database/organizations";
import * as users from "../database/users";
import * as tickets from "../database/tickets";
import User from "../models/User";
import Ticket from "../models/Ticket";
import Organization from "../models/Organization";

export class SearchService {
  initDataStore = () => {
    if (organizations.default && organizations.default.length) {
      organizations.default.forEach(function (item) {
        Organization.insert({ data: item });
      });
    }
    if (users.default && users.default.length) {
      users.default.forEach(function (item) {
        User.insert({ data: item });
      });
    }
    if (tickets.default && tickets.default.length) {
      tickets.default.forEach(function (item) {
        Ticket.insert({ data: item });
      });
    }
  };

  getSearchFields = () => {
    return new Promise((resolve) => {
      resolve(User.fields());
    });
  };

  filterUsers = (searchKey, searchValues) => {
    return new Promise((resolve) => {
      let query = User.query()
        .where((query) => {
          if (searchKey?.length && searchValues?.length)
            return query[searchKey].includes(searchValues);
        })
        .with(["organization", "assignee", "submitter"]);

      if (searchKey?.length <= 0 || searchValues?.length <= 0)
        resolve(query.limit(30).get());

      resolve(query.get());
    });
  };
}
