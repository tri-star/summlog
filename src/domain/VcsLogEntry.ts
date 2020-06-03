/**
 * An object represents certain VCS Log.
 * (e.g. Git commit log / GitHub PR message body)
 */
export class VcsLogEntry {
  _commitHash: string
  _message: string

  constructor(commitHash: string, message: string) {
    this._commitHash = commitHash
    this._message = message
  }

  public get commitHash(): string {
    return this._commitHash
  }

  public get message(): string {
    return this._message
  }
}
