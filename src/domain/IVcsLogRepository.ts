import { VcsLogEntryCollection } from "./VcsLogEntry";
import { Version } from "./Version";

/**
 * An interface for
 */
export interface IVcsLogRepository {
  getLogsFromTag(fromVersion?: Version): Promise<VcsLogEntryCollection>
}
