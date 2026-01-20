import { Test, TestingModule } from '@nestjs/testing';
import { BlueprintController } from './blueprint.controller';

describe('BlueprintController', () => {
  let controller: BlueprintController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlueprintController],
    }).compile();

    controller = module.get<BlueprintController>(BlueprintController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
