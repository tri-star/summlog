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


export class VcsLogEntryCollection {
  _collection: Map<string, VcsLogEntry>

  constructor() {
    this._collection = new Map<string, VcsLogEntry>()
  }

  public add(entry: VcsLogEntry): void {
    this._collection.set(entry.commitHash, entry)
  }

  public get(hash: string): VcsLogEntry|undefined {
    return this._collection.get(hash)
  }

  public getCount(): Number {
    return this._collection.size
  }

  public getList(): Array<VcsLogEntry> {
    const list = new Array<VcsLogEntry>()
    this._collection.forEach((entry) => {
      list.push(entry)
    })
    return list
  }
}
