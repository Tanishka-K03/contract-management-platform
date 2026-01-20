import { IsArray, IsIn, IsInt, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class BlueprintFieldDto {
  @IsIn(['TEXT', 'DATE', 'SIGNATURE', 'CHECKBOX'])
  type: string;

  @IsString()
  label: string;

  @IsInt()
  positionX: number;

  @IsInt()
  positionY: number;
}

export class CreateBlueprintDto {
  @IsString()
  name: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BlueprintFieldDto)
  fields: BlueprintFieldDto[];
}
