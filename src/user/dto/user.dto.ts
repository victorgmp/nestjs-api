export class CreateUserDTO {
  readonly rut: string;
  readonly firtsName: string;
  readonly lastName: string;
  readonly phone: string;
  readonly sex: string;
  readonly email: string;
  readonly addresses: Array<{
    address: string;
  }>;
  // tslint:disable-next-line: array-type
  // readonly addresses: {
  //   address: string;
  // }[];
}
