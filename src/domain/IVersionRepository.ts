import { Version } from "./Version";


export interface IVersionRepository {
  fetchVersion(): Version|undefined

  saveVersion(newVersion: Version): void
}
