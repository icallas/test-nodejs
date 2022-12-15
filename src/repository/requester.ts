import axios from 'axios';

export class Requester {
  private path: string;

  constructor(path: string) {
    this.path = path;
  }

  async post(data: { [name: string]: string }) {
    const req = await axios.post(this.path, data);
    return req.data;
  }

  async get(id?: string) {
    return (await axios.get(`${this.path}${id ? `/${id}` : ''}`))?.data;
  }
}
