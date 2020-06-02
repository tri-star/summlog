import { Version } from "@/src/domain/Version"

describe('Version', () => {

  describe('Major version', () => {
    it('should reeturn major version', () => {
      const version = new Version(1)
      expect(version.major).toEqual(1)
    })
  })

  describe('Minor version', () => {
    it('should return minor version', () => {
      const version = new Version(1, 2)
      expect(version.minor).toEqual(2)
    })

    it('should return undefined when minor version not specified', () => {
      const version = new Version(1)
      expect(version.minor).toEqual(undefined)
    })
  })

  describe('Patch version', () => {
    it('should return patch version', () => {
      const version = new Version(1, 2, 3)
      expect(version.patch).toEqual(3)
    })

    it('should return undefined when patch version is not specified', () => {
      const version = new Version(1, 2)
      expect(version.patch).toEqual(undefined)
    })
  })

  describe('Build number', () => {
    it('should return build number', () => {
      const version = new Version(1, 2, 3, 10)
      expect(version.build).toEqual(10)
    })

    it('should return undefined when build number is not specified', () => {
      const version = new Version(1, 2, 3)
      expect(version.build).toEqual(undefined)
    })
  })


  describe('Version string', () => {

    const patterns: Map<string, any> = new Map<string, any>([
      ['1.0.0', { version: new Version(1, 0, 0), expected: '1.0.0' }],
      ['1.2.0', { version: new Version(1, 2, 0), expected: '1.2.0' }],
      ['1.2.3', { version: new Version(1, 2, 3), expected: '1.2.3' }],
      ['1.2', { version: new Version(1, 2), expected: '1.2' }],
      ['1', { version: new Version(1), expected: '1' }],
      ['1.0.2', { version: new Version(1, 0, 2), expected: '1.0.2' }],
      ['0.1.0', { version: new Version(0,1, 0), expected: '0.1.0' }],
    ])

    patterns.forEach((pattern, name) => {
      it('should return ' + name, () => {
        const version: Version = pattern.version
        expect(version.toString()).toEqual(pattern.expected)
      })
    })

  })

})
