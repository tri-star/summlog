

export class Version {
  _major: Number
  _minor?: Number
  _patch?: Number
  _build?: Number
  _formatFunction: Function

  constructor(major: Number, minor?: Number, patch?: Number, build?: Number){
    this._major = major
    this._minor = minor
    this._patch = patch
    this._build = build
    this._formatFunction = Version.formatDefault
  }

  public get major(): Number {
    return this._major
  }

  public get minor(): Number|undefined {
    return this._minor
  }

  public get patch(): Number|undefined {
    return this._patch
  }

  public get build(): Number|undefined {
    return this._build
  }

  public static formatDefault(version: Version): string {
    let parts: Array<string> = [version.major.toString()]

    if(version.minor !== undefined) {
      parts.push(version.minor.toString())
    }

    if(version.patch !== undefined) {
      parts.push(version.patch.toString())
    }

    return parts.join('.')
  }


  public toString(): string {
    return this._formatFunction(this)
  }
}
