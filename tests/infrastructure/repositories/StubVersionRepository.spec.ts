import { StubVersionRepository } from "@/src/infrastructure/repositories/StubVersionRepository"
import { Version } from "@/src/domain/Version";

describe('StubVersionRepository', () => {

  it('should return Version when version was set', () => {
    const repository = new StubVersionRepository();
    const expectedVersion = new Version(1, 0, 0)
    repository.saveVersion(expectedVersion)
    const version = repository.fetchVersion()

    expect(version?.toString()).toBe(expectedVersion.toString())
  })

  it('should return undefined when version was not set', () => {
    const repository = new StubVersionRepository();
    const version = repository.fetchVersion()

    expect(version).toBe(undefined)

  })
})
