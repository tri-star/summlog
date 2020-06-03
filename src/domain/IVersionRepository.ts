import { Version } from "./Version";

/**
 * An interface for store/save version information
 * from package.json / dedicated json file etc.
 */
export interface IVersionRepository {
  fetchVersion(): Version|undefined

  saveVersion(newVersion: Version): void
}
