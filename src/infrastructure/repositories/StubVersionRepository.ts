import { IVersionRepository } from "@/src/domain/IVersionRepository";
import { Version } from "@/src/domain/Version";


export class StubVersionRepository implements IVersionRepository {

  _version?: Version

  constructor() {
    this._version = undefined
  }

  fetchVersion(): Version | undefined {
    return this._version
  }
  saveVersion(newVersion: Version): void {
    this._version = newVersion
  }

}
