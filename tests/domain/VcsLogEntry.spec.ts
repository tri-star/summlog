import { VcsLogEntryCollection, VcsLogEntry } from "@/src/domain/VcsLogEntry"

describe('VcsLogEntryCollection', () => {

  let collection: VcsLogEntryCollection

  beforeEach(() => {
    collection = new VcsLogEntryCollection()
  })

  it('should store an entry', () => {
    const entry = new VcsLogEntry('aaa', 'message')
    collection.add(entry)

    const registeredEntry = collection.get(entry.commitHash)
    expect(registeredEntry?.commitHash).toBe(entry.commitHash)
  })

  it('should store multiple entries', () => {
    const entry1 = new VcsLogEntry('aaa', 'message')
    const entry2 = new VcsLogEntry('aab', 'message')
    collection.add(entry1)
    collection.add(entry2)

    const registeredEntry = collection.get(entry1.commitHash)
    expect(registeredEntry?.commitHash).toBe(entry1.commitHash)
    const registeredEntry2 = collection.get(entry2.commitHash)
    expect(registeredEntry2?.commitHash).toBe(entry2.commitHash)
    expect(collection.getCount()).toBe(2)
  })

  it('should return list of entries', () => {
    const entry1 = new VcsLogEntry('aaa', 'message')
    const entry2 = new VcsLogEntry('aab', 'message')
    collection.add(entry1)
    collection.add(entry2)

    const list: Array<VcsLogEntry> = collection.getList()
    expect(list.length).toBe(2)
  })

})
