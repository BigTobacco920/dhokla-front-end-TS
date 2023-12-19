import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface FileObject {
  dir: boolean;
  size: number;
  // Add other properties as needed
}

interface data {
  files: any[];
}

const backendUrl = 'https://nl1.dhokla.net';

@Injectable({
  providedIn: 'root',
})
export class FMServiceService {
  constructor(private http: HttpClient) {}

  async getDir(id: string): Promise<any> {
    const endpoint = id ? `/api/d/${id}` : '/api/d';
    const {
      data: { data: dir },
    } = await this.http.get<any>(backendUrl + endpoint).toPromise();

    dir.files = dir.files.map((f: FileObject) => ({
      ...f,
      size: f.dir ? 'folder' : this.humanReadableSize(f.size),
      selected: false,
    }));

    return dir;
  }

  async search(name: string, $http: any): Promise<any[]> {
    const endpoint = `/api/s/` + encodeURI(name);
    let {
      data: { data: files },
    } = await $http.get(backendUrl + endpoint);

    files = files.map((f: any) => {
      return {
        ...f,
        size: f.dir ? 'folder' : this.humanReadableSize(f.size),
        selected: false,
      };
    });
    return files;
  }

  private humanReadableSize(bytes: number, si = false, dp = 1): string {
    const thresh = si ? 1000 : 1024;

    if (Math.abs(bytes) < thresh) {
      return `${bytes} B`;
    }

    const units = si
      ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
      : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
    let u = -1;
    const r = 10 ** dp;

    do {
      bytes /= thresh;
      u += 1;
    } while (
      Math.round(Math.abs(bytes) * r) / r >= thresh &&
      u < units.length - 1
    );

    return `${bytes.toFixed(dp)} ${units[u]}`;
  }
}

