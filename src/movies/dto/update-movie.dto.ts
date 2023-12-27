import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}

//PartialType을 사용하면 인자별로 업데이트를 할 수 있을지 없을지에대해서 확인할 수 있다.(모든 인자가 들어오지 않아도 된다.)
