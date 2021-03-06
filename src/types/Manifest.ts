export default interface Manifest {
  name: string;
  homepage: string;
  manifestURL: string;
  checkver?: Checkver;
  version: string;
  bucket: string;
  description: string;
  license: string;
}

interface Checkver {
  github: string;
}
