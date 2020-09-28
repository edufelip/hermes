import { IStockRepository } from '@repos/IStockRepository'

export class AddSizeToProductUseCase {
  private stockRepository: IStockRepository

  constructor(stockRepository: IStockRepository) {
    this.stockRepository = stockRepository
  }

  async execute(productId: string, sizeId: string): Promise<void> {
    await this.stockRepository.save(productId, sizeId)
  }
}
