import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { resolve } from 'path';
import * as templates from './../PretendItsS3/templates.json';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getImages(name: string): string {
    const path = resolve('PretendItsS3/large/', name);
    const bufferHolder = fs.readFileSync(path);
    const dataImagePrefix = `data:image/jpg;base64,`;
    const imageBase64 = Buffer.from(bufferHolder).toString('base64');

    return dataImagePrefix + imageBase64;
  }

  // getThumbnails(name: string): string {
  //   const bufferHolder = fs.readFileSync('./PretendItsS3/thumbnails/' + name);
  //   const dataImagePrefix = `data:image/jpg;base64,`;
  //   const imageBase64 = Buffer.from(bufferHolder).toString('base64');

  //   return dataImagePrefix + imageBase64;
  // }

  getTemplates() {
    const loadedTemplates = templates;

    for (const temp of loadedTemplates) {
      const bufferHolder = fs.readFileSync(
        './PretendItsS3/thumbnails/' + temp.thumbnail,
      );
      const dataImagePrefix = `data:image/jpg;base64,`;
      const imageBase64 = Buffer.from(bufferHolder).toString('base64');

      temp['base64'] = dataImagePrefix + imageBase64;
    }

    // const bufferHolder = fs.readFileSync('./PretendItsS3/thumbnails/' + name);
    // const dataImagePrefix = `data:image/jpg;base64,`;
    // const imageBase64 = Buffer.from(bufferHolder).toString('base64');

    return loadedTemplates;
  }
}
