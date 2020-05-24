export default class ShopItemModel {
  constructor(entity) {
    Object.assign(this, {
      brand: 'brand name',
      title: 'item name',
      description: 'short description',
      descriptionFull: 'fill description',
      price: 0,
      currency: 'currency name',
    }, entity);
  }
}
