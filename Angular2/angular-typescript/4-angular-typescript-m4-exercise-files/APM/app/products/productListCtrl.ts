module app.productList {
	interface IProductListModel {
		title: string;
		showImage: boolean;
		products: any[];
		toggleImage(): void;
	}

	class ProductListCtrl implements IProductListModel {
		title: string;
		showImage: boolean;
		products: any[];

		constructor() {
			this.title = "Product List";
			this.showImage = false;
			this.products = [
				{
					"productId": 1,
					"productName": "Leaf Rake",
					"productCode": "GDN-0011",
					"releaseDate": new Date(2009, 2, 19),
					"description": "Leaf rake with 48-inch wooden handle.",
					"price": 19.95,
					"imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
				},
				{
					"productId": 2,
					"productName": "Garden Cart",
					"productCode": "GDN-0023",
					"releaseDate": new Date(2010, 2, 18),
					"description": "15 gallon capacity rolling garden cart",
					"price": 32.99,
					"imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
				},
				{
					"productId": 5,
					"productName": "Hammer",
					"productCode": "TBX-0048",
					"releaseDate": new Date(2013, 4, 21),
					"description": "Curved claw steel hammer",
					"price": 8.99,
					"imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
				}
			]
		}

		toggleImage(): void {
			this.showImage = !this.showImage;
		}
	}
	angular
		.module("productManagement")
		.controller("ProductListCtrl",
			ProductListCtrl);
}