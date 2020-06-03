import { IVcsLogRepository } from "@/src/domain/IVcsLogRepository";
import { Version } from "@/src/domain/Version";
import { VcsLogEntryCollection } from "@/src/domain/VcsLogEntry";

export class StubVcsLogRepository implements IVcsLogRepository {

  private _collection: VcsLogEntryCollection

  constructor() {
    this._collection = new VcsLogEntryCollection()
  }

  public setCollection(collection: VcsLogEntryCollection) {
    collection.getList().forEach((entry) => {
      this._collection.add(entry)
    })
  }

  async getLogsFromTag(fromVersion?: Version): Promise<VcsLogEntryCollection> {
    return Promise.resolve(this._collection)
  }

}
