class Partner {
  constructor(
    id,
    categoryId,
    imageUrl,
    firstName,
    lastName,
    area,
    rating,
    ingredients,
    steps
  ) {
    this.id = id;
    this.categoryId = categoryId;
    this.firstName = firstName;
    this.imageUrl = imageUrl;
    this.lastName = lastName;
    this.area = area;
    this.rating = rating;
    this.ingredients = ingredients;
    this.steps = steps;
  }
}

export default Partner;
