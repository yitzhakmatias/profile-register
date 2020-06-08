export class candidate {
  public id: bigint;
  public name: string;
  public address: string;
  public phone: string;
  public notes: string;
  public photo: string;

  constructor(id, name, address, phone, notes, photo) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.notes = notes;
    this.photo = photo;

  }

  public static candidateInstance(): candidate {
    return new candidate(0, '', '', '', '', '');
  }
}

export interface User {
  id: bigint;
  name: string;
}
