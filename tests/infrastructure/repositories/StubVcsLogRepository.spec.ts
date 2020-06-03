import { StubVcsLogRepository } from "@/src/infrastructure/repositories/StubVcsLogRepository"
import { VcsLogEntryCollection, VcsLogEntry } from "@/src/domain/VcsLogEntry"
import { Version } from "@/src/domain/Version"

describe('StubVcsLogRepository', () => {

  let repository: StubVcsLogRepository

  beforeEach(() => {
    repository = new StubVcsLogRepository()
  })

  it('should fetch VcsLogEntryCollection', async () => {
    const collection = new VcsLogEntryCollection()
    collection.add(new VcsLogEntry('aaa', 'message'))
    collection.add(new VcsLogEntry('aab', 'message2'))

    repository.setCollection(collection)

    const someVersion = new Version(1)
    const logs = await repository.getLogsFromTag(someVersion)
    expect(logs.getCount()).toBe(2)
  })

})
