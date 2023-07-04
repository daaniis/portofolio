/* eslint-disable prettier/prettier */
import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('upload')
export class UploadController {
  @Post()
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
        destination: './uploads',
        // filename: (req, file, callback) => {
        //     const randomName = Array(32)
        //     .fill(null)
        //     .map(() => Math.round(Math.random() * 16).toString(16))
        //     .join('');
        //     return callback(null, `${randomName}${extname(file.originalname)}`);
        // }
        filename: (req, file, callback) => {
            callback(null, file.originalname);
        }
    })
  })
  )
  uploadImage(@UploadedFile() image: Express.Multer.File) {
    console.log(image);
    return{
        namaGambar: image.originalname,
        ukuran: image.size,
    }
  }
}
