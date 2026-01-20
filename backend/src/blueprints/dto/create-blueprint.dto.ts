import { IsString, IsArray, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

class BlueprintFieldDto {
  @IsString()
  type: "TEXT" | "DATE" | "SIGNATURE" | "CHECKBOX";

  @IsString()
  label: string;

  positionX: number;
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
