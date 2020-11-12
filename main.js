(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "//Sm":
/*!*********************************!*\
  !*** ./src/store/products.json ***!
  \*********************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"name\":\"Circle\",\"description\":\"Perfect choice when you don't need any corners.\",\"price\":999,\"image\":\"assets/circle.svg\"},{\"id\":2,\"name\":\"Rectangle\",\"description\":\"For once, it’s a great idea to think inside the box.\",\"price\":899,\"image\":\"assets/rectangle.svg\"},{\"id\":3,\"name\":\"Triangle\",\"description\":\"A true classic with three elegant corners.\",\"price\":1009,\"image\":\"assets/triangle.svg\"}]");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Kami\Desktop\Projects\whee\src\main.ts */"zUnb");


/***/ }),

/***/ "2SFI":
/*!*********************************************************!*\
  !*** ./src/app/components/product/product.component.ts ***!
  \*********************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/cart.service */ "c14U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ProductComponent_div_0_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 7);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.product.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r1.product.name);
} }
function ProductComponent_div_0_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Image not found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.product.description);
} }
function ProductComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_div_0_div_5_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.addToCart(ctx_r5.product); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " ADD TO CART ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.product.price, " \u20AC");
} }
function ProductComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductComponent_div_0_img_2_Template, 1, 2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductComponent_div_0_span_3_Template, 2, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductComponent_div_0_div_4_Template, 5, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProductComponent_div_0_div_5_Template, 5, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.product.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.product.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.product.name && ctx_r0.product.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.product.price);
} }
class ProductComponent {
    constructor(cartService) {
        this.cartService = cartService;
    }
    ngOnInit() { }
    addToCart(product) {
        this.cartService.addProduct(product);
    }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"])); };
ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["app-product"]], inputs: { product: "product" }, decls: 1, vars: 1, consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "image-container"], ["class", "image", 3, "src", "alt", 4, "ngIf"], [4, "ngIf"], ["class", "info-container", 4, "ngIf"], ["class", "price-container", 4, "ngIf"], [1, "image", 3, "src", "alt"], [1, "info-container"], [1, "item-name"], [1, "item-description"], [1, "price-container"], [1, "price"], [1, "add-cart-button", 3, "click"]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductComponent_div_0_Template, 6, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Pacifico&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap\");\n\n\n\n\n.image[_ngcontent-%COMP%] {\n  height: 125px;\n  width: 125px;\n}\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n@media (min-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    flex-direction: row;\n    padding: 0 40px;\n  }\n}\n.info-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-width: 300px;\n}\n@media (min-width: 768px) {\n  .info-container[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    margin: 0 170px 0 30px;\n  }\n}\n.item-name[_ngcontent-%COMP%] {\n  font-family: \"Playfair Display\", sans-serif;\n  font-style: italic;\n  font-size: 1rem;\n  font-size: 2.25rem;\n  margin: 15px 0;\n}\n.item-description[_ngcontent-%COMP%] {\n  font-family: \"Playfair Display\", sans-serif;\n  font-style: italic;\n  font-size: 1rem;\n  font-style: normal;\n  font-size: 0.875rem;\n  margin: 0;\n  width: 70%;\n  text-align: center;\n}\n@media (min-width: 768px) {\n  .item-description[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: start;\n  }\n}\n.price-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 200px;\n}\n@media (min-width: 768px) {\n  .price-container[_ngcontent-%COMP%] {\n    align-items: flex-end;\n  }\n}\n.price[_ngcontent-%COMP%] {\n  font-family: \"Playfair Display\", sans-serif;\n  font-style: italic;\n  font-size: 1rem;\n  font-size: 2.25rem;\n  font-style: normal;\n  margin: 15px 0;\n}\n.add-cart-button[_ngcontent-%COMP%] {\n  font-family: \"Playfair Display\", sans-serif;\n  font-style: italic;\n  font-size: 1rem;\n  display: flex;\n  justify-content: center;\n  white-space: nowrap;\n  font-size: 1.125rem;\n  font-style: normal;\n  cursor: pointer;\n  background-color: #fff;\n  border: 1px solid #000;\n  padding: 10px 30px;\n}\n@media (min-width: 768px) {\n  .add-cart-button[_ngcontent-%COMP%] {\n    background-color: #fff;\n    color: #000;\n    transition: all 0.25s ease;\n  }\n  .add-cart-button[_ngcontent-%COMP%]:hover {\n    background-color: #000;\n    color: #fff;\n    transition: all 0.25s ease;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvX2ZvbnRzLnNjc3MiLCJzcmMvc3R5bGVzL19icmVha3BvaW50cy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsZXMvX21peGlucy5zY3NzIiwic3JjL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsNkVBQUE7QUFDQSx1SEFBQTtBQ0RSLHdEQUFBO0FBOEJBLHFCQUFBO0FBOUJBLHdEQUFBO0FBOEJBLHFCQUFBO0FDM0JBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFJRjtBQURBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUlGO0FEVEk7RUNDSjtJQU9JLG1CQUFBO0lBQ0EsZUFBQTtFQUtGO0FBQ0Y7QUFGQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUtGO0FEdkJJO0VDYUo7SUFRSSx1QkFBQTtJQUNBLHNCQUFBO0VBTUY7QUFDRjtBQUhBO0VDWEUsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFhQSxrQkFBQTtFRERBLGNBQUE7QUFRRjtBQUxBO0VDakJFLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBTUEsa0JBQUE7RUFDQSxtQkFBQTtFRFdBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFXRjtBRGhESTtFQ2dDSjtJQVFJLFdBQUE7SUFDQSxpQkFBQTtFQVlGO0FBQ0Y7QUFUQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBWUY7QUQ5REk7RUM2Q0o7SUFRSSxxQkFBQTtFQWFGO0FBQ0Y7QUFWQTtFQzFDRSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQWFBLGtCQUFBO0VENkJBLGtCQUFBO0VBRUEsY0FBQTtBQWVGO0FBWkE7RUNqREUsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUE2QkEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQzVETTtFRDZETixzQkFBQTtFQUNBLGtCQUFBO0FEb0NGO0FEM0ZJO0VDZ0VKO0lDTkksc0JDakVJO0lEa0VKLFdDakVJO0lEa0VKLDBCQUFBO0VEcUNGO0VDbkNFO0lBQ0Usc0JDckVFO0lEc0VGLFdDdkVFO0lEd0VGLDBCQUFBO0VEcUNKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QYWNpZmljbyZkaXNwbGF5PXN3YXBcIik7XHJcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbGF5ZmFpcitEaXNwbGF5Oml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDQwMDsxLDcwMCZkaXNwbGF5PXN3YXBcIik7XHJcbiIsIi8qIHN0eWxlbGludC1kaXNhYmxlIGJsb2NrLWNsb3NpbmctYnJhY2UtbmV3bGluZS1hZnRlciAqL1xyXG5AbWl4aW4gYnJlYWtwb2ludCgkY2xhc3MpIHtcclxuICBAaWYgJGNsYXNzID09IG1vYmlsZSB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkY2xhc3MgPT0gdGFibGV0IHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRjbGFzcyA9PSBsYXB0b3Age1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJGNsYXNzID09IG5hdmlnYXRpb24ge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDEwODJweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRjbGFzcyA9PSBkZXNrdG9wIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkY2xhc3MgPT0geGwge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDEzMDBweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIEB3YXJuICdCcmVha3BvaW50IG1peGluIHN1cHBvcnRzOiBtb2JpbGUsIHRhYmxldCwgbGFwdG9wLCBuYXZpZ2F0aW9uLCBkZXNrdG9wLCB4bCc7XHJcbiAgfVxyXG59XHJcbi8qIHN0eWxlbGludC1lbmFibGUgKi9cclxuIiwiQGltcG9ydCBcIm1peGluc1wiO1xyXG5AaW1wb3J0IFwiYnJlYWtwb2ludHNcIjtcclxuXHJcbi5pbWFnZSB7XHJcbiAgaGVpZ2h0OiAxMjVweDtcclxuICB3aWR0aDogMTI1cHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KHRhYmxldCkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHBhZGRpbmc6IDAgNDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5pbmZvLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludCh0YWJsZXQpIHtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgbWFyZ2luOiAwIDE3MHB4IDAgMzBweDtcclxuICB9XHJcbn1cclxuXHJcbi5pdGVtLW5hbWUge1xyXG4gIEBpbmNsdWRlIGhlYWRlci1tZWRpdW07XHJcblxyXG4gIG1hcmdpbjogMTVweCAwO1xyXG59XHJcblxyXG4uaXRlbS1kZXNjcmlwdGlvbiB7XHJcbiAgQGluY2x1ZGUgcGFyYWdyYXBoLXNtYWxsO1xyXG5cclxuICBtYXJnaW46IDA7XHJcbiAgd2lkdGg6IDcwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQodGFibGV0KSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIH1cclxufVxyXG5cclxuLnByaWNlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KHRhYmxldCkge1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIH1cclxufVxyXG5cclxuLnByaWNlIHtcclxuICBAaW5jbHVkZSBoZWFkZXItbWVkaXVtO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuXHJcbiAgbWFyZ2luOiAxNXB4IDA7XHJcbn1cclxuXHJcbi5hZGQtY2FydC1idXR0b24ge1xyXG4gIEBpbmNsdWRlIGJ1dHRvbjtcclxufVxyXG4iLCJAaW1wb3J0IFwiZm9udHNcIjtcclxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xyXG5AaW1wb3J0IFwiYnJlYWtwb2ludHNcIjtcclxuXHJcbkBtaXhpbiBuYXZpZ2F0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyYXk7XHJcbiAgcGFkZGluZzogMCAzMHB4O1xyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQodGFibGV0KSB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gbmF2LWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5AbWl4aW4gcGFyYWdyYXBoIHtcclxuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuQG1peGluIHBhcmFncmFwaC1zbWFsbCB7XHJcbiAgQGluY2x1ZGUgcGFyYWdyYXBoO1xyXG5cclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxufVxyXG5cclxuQG1peGluIGhlYWRlci1tZWRpdW0ge1xyXG4gIEBpbmNsdWRlIHBhcmFncmFwaDtcclxuXHJcbiAgZm9udC1zaXplOiAyLjI1cmVtO1xyXG59XHJcblxyXG5AbWl4aW4gdHJpYW5nbGUtYm9yZGVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAkd2hpdGUgMjVweCwgdHJhbnNwYXJlbnQgMCksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICR3aGl0ZSAyNXB4LCB0cmFuc3BhcmVudCAwKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiA1MHB4IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG59XHJcblxyXG5AbWl4aW4gYnV0dG9uIHtcclxuICBAaW5jbHVkZSBwYXJhZ3JhcGg7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHJcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYmxhY2s7XHJcbiAgcGFkZGluZzogMTBweCAzMHB4O1xyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KHRhYmxldCkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4gICAgY29sb3I6ICRibGFjaztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2s7XHJcbiAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIkd2hpdGU6ICNmZmY7XHJcbiRibGFjazogIzAwMDtcclxuJGxpZ2h0LWdyYXk6ICNlYWVhZWE7XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product',
                templateUrl: './product.component.html',
                styleUrls: ['./product.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"] }]; }, { product: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BlY0":
/*!***********************************************************************************!*\
  !*** ./src/app/components/shopping-cart-button/shopping-cart-button.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ShoppingCartButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartButtonComponent", function() { return ShoppingCartButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/cart.service */ "c14U");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");




class ShoppingCartButtonComponent {
    constructor(cartService) {
        this.cartService = cartService;
    }
    ngOnInit() { }
    openNav() {
        document.getElementById('mySidenav').style.width = '100%';
    }
}
ShoppingCartButtonComponent.ɵfac = function ShoppingCartButtonComponent_Factory(t) { return new (t || ShoppingCartButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"])); };
ShoppingCartButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShoppingCartButtonComponent, selectors: [["app-shopping-cart-button"]], decls: 8, vars: 2, consts: [[1, "shopping-cart-container"], [1, "item-amount"], [1, "cart-empty"], [1, "cart-link", 3, "click"], [1, "material-icons", "cart-logo"]], template: function ShoppingCartButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShoppingCartButtonComponent_Template_a_click_5_listener() { return ctx.openNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " shopping_cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cartService.getCartTotalAmount());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.cartService.getCartTotalAmount() <= 0 ? "No items in cart" : ctx.cartService.getCartTotalAmount(), " ");
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Pacifico&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap\");\n\n\n\n\n.shopping-cart-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  position: fixed;\n  bottom: 5vw;\n  left: 3vh;\n}\n@media (min-width: 768px) {\n  .shopping-cart-container[_ngcontent-%COMP%] {\n    position: unset;\n    flex-direction: row;\n  }\n}\n.item-amount[_ngcontent-%COMP%] {\n  font-family: \"Playfair Display\", sans-serif;\n  font-style: italic;\n  font-size: 1rem;\n  font-size: 2rem;\n  font-weight: bold;\n  margin-bottom: 5px;\n}\n@media (min-width: 768px) {\n  .item-amount[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.cart-empty[_ngcontent-%COMP%] {\n  font-family: \"Playfair Display\", sans-serif;\n  font-style: italic;\n  font-size: 1rem;\n  margin-right: 30px;\n  display: none;\n}\n@media (min-width: 768px) {\n  .cart-empty[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.cart-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  text-decoration: none;\n  text-align: center;\n  background-color: #000;\n  color: #fff;\n  cursor: pointer;\n}\n@media (min-width: 768px) {\n  .cart-link[_ngcontent-%COMP%] {\n    transition: all 0.25s ease;\n    width: 51px;\n    height: 51px;\n  }\n  .cart-link[_ngcontent-%COMP%]:hover {\n    background-color: #fff;\n    color: #000;\n    transition: all 0.25s ease;\n  }\n}\n.cart-logo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 2rem;\n}\n@media (min-width: 768px) {\n  .cart-logo[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvX2ZvbnRzLnNjc3MiLCJzcmMvc3R5bGVzL19icmVha3BvaW50cy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Nob3BwaW5nLWNhcnQtYnV0dG9uL3Nob3BwaW5nLWNhcnQtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic3JjL3N0eWxlcy9fbWl4aW5zLnNjc3MiLCJzcmMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSw2RUFBQTtBQUNBLHVIQUFBO0FDRFIsd0RBQUE7QUE4QkEscUJBQUE7QUE5QkEsd0RBQUE7QUE4QkEscUJBQUE7QUMzQkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBSUY7QURQSTtFQ0pKO0lBVUksZUFBQTtJQUNBLG1CQUFBO0VBS0Y7QUFDRjtBQUZBO0VDSUUsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RURKQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQU9GO0FEdEJJO0VDV0o7SUFPSSxhQUFBO0VBUUY7QUFDRjtBQUxBO0VDUEUsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RURPQSxrQkFBQTtFQUNBLGFBQUE7QUFVRjtBRG5DSTtFQ3NCSjtJQU1JLGNBQUE7RUFXRjtBQUNGO0FBUkE7RUFDRSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCRS9DTTtFRmdETixXRWpETTtFRmtETixlQUFBO0FBV0Y7QUR0REk7RUNnQ0o7SUFjSSwwQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VBWUY7RUFWRTtJQUNFLHNCRTFERTtJRjJERixXRTFERTtJRjJERiwwQkFBQTtFQVlKO0FBQ0Y7QUFSQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQVdGO0FEekVJO0VDMERKO0lBT0ksZUFBQTtFQVlGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Nob3BwaW5nLWNhcnQtYnV0dG9uL3Nob3BwaW5nLWNhcnQtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBhY2lmaWNvJmRpc3BsYXk9c3dhcFwiKTtcclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBsYXlmYWlyK0Rpc3BsYXk6aXRhbCx3Z2h0QDAsNDAwOzAsNzAwOzEsNDAwOzEsNzAwJmRpc3BsYXk9c3dhcFwiKTtcclxuIiwiLyogc3R5bGVsaW50LWRpc2FibGUgYmxvY2stY2xvc2luZy1icmFjZS1uZXdsaW5lLWFmdGVyICovXHJcbkBtaXhpbiBicmVha3BvaW50KCRjbGFzcykge1xyXG4gIEBpZiAkY2xhc3MgPT0gbW9iaWxlIHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRjbGFzcyA9PSB0YWJsZXQge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJGNsYXNzID09IGxhcHRvcCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkY2xhc3MgPT0gbmF2aWdhdGlvbiB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTA4MnB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJGNsYXNzID09IGRlc2t0b3Age1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRjbGFzcyA9PSB4bCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTMwMHB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgQHdhcm4gJ0JyZWFrcG9pbnQgbWl4aW4gc3VwcG9ydHM6IG1vYmlsZSwgdGFibGV0LCBsYXB0b3AsIG5hdmlnYXRpb24sIGRlc2t0b3AsIHhsJztcclxuICB9XHJcbn1cclxuLyogc3R5bGVsaW50LWVuYWJsZSAqL1xyXG4iLCJAaW1wb3J0IFwibWl4aW5zXCI7XHJcbkBpbXBvcnQgXCJicmVha3BvaW50c1wiO1xyXG5cclxuLnNob3BwaW5nLWNhcnQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiA1dnc7XHJcbiAgbGVmdDogM3ZoO1xyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KHRhYmxldCkge1xyXG4gICAgcG9zaXRpb246IHVuc2V0O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcbn1cclxuXHJcbi5pdGVtLWFtb3VudCB7XHJcbiAgQGluY2x1ZGUgcGFyYWdyYXBoO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQodGFibGV0KSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLmNhcnQtZW1wdHkge1xyXG4gIEBpbmNsdWRlIHBhcmFncmFwaDtcclxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludCh0YWJsZXQpIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuLmNhcnQtbGluayB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrO1xyXG4gIGNvbG9yOiAkd2hpdGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KHRhYmxldCkge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XHJcbiAgICB3aWR0aDogNTFweDtcclxuICAgIGhlaWdodDogNTFweDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4gICAgICBjb2xvcjogJGJsYWNrO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jYXJ0LWxvZ28ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDJyZW07XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQodGFibGV0KSB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgXCJmb250c1wiO1xyXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCJicmVha3BvaW50c1wiO1xyXG5cclxuQG1peGluIG5hdmlnYXRpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtZ3JheTtcclxuICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludCh0YWJsZXQpIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBuYXYtaXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtaXhpbiBwYXJhZ3JhcGgge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXlcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG5AbWl4aW4gcGFyYWdyYXBoLXNtYWxsIHtcclxuICBAaW5jbHVkZSBwYXJhZ3JhcGg7XHJcblxyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG59XHJcblxyXG5AbWl4aW4gaGVhZGVyLW1lZGl1bSB7XHJcbiAgQGluY2x1ZGUgcGFyYWdyYXBoO1xyXG5cclxuICBmb250LXNpemU6IDIuMjVyZW07XHJcbn1cclxuXHJcbkBtaXhpbiB0cmlhbmdsZS1ib3JkZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICR3aGl0ZSAyNXB4LCB0cmFuc3BhcmVudCAwKSxcclxuICAgIGxpbmVhci1ncmFkaWVudCg0NWRlZywgJHdoaXRlIDI1cHgsIHRyYW5zcGFyZW50IDApO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDUwcHggNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29udGVudDogXCIgXCI7XHJcbn1cclxuXHJcbkBtaXhpbiBidXR0b24ge1xyXG4gIEBpbmNsdWRlIHBhcmFncmFwaDtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cclxuICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRibGFjaztcclxuICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQodGFibGV0KSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiAgICBjb2xvcjogJGJsYWNrO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjaztcclxuICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiR3aGl0ZTogI2ZmZjtcclxuJGJsYWNrOiAjMDAwO1xyXG4kbGlnaHQtZ3JheTogI2VhZWFlYTtcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShoppingCartButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shopping-cart-button',
                templateUrl: './shopping-cart-button.component.html',
                styleUrls: ['./shopping-cart-button.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"] }]; }, null); })();


/***/ }),

/***/ "QWKc":
/*!***************************************************!*\
  !*** ./src/app/components/cart/cart.component.ts ***!
  \***************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/cart.service */ "c14U");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _cart_product_cart_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cart-product/cart-product.component */ "mBnA");






function CartComponent_app_cart_product_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-cart-product", 11);
} if (rf & 2) {
    const product_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r2);
} }
function CartComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No items in cart...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CartComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.cartList = [];
    }
    ngOnInit() {
        this.subscription = this.cartService.getCartState().subscribe((state) => {
            this.cartList = state.products;
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    closeNav() {
        document.getElementById('mySidenav').style.width = '0';
    }
    calcTotal() {
        let total = 0;
        for (let product of this.cartList) {
            total += product.qty * product.price;
        }
        return total;
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 15, vars: 3, consts: [["id", "mySidenav", 1, "sidenav"], [1, "header"], [1, "title"], [1, "divider"], [1, "close-btn", 3, "click"], [1, "material-icons", "close"], [3, "product", 4, "ngFor", "ngForOf"], ["class", "empty-cart-text", 4, "ngIf"], [1, "checkout-container"], [1, "total-price"], [1, "checkout-button"], [3, "product"], [1, "empty-cart-text"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Shopping Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_Template_span_click_5_listener() { return ctx.closeNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CartComponent_app_cart_product_8_Template, 1, 1, "app-cart-product", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CartComponent_span_9_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "CHECKOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cartList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartList.length <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total price: ", ctx.calcTotal(), " \u20AC ");
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _cart_product_cart_product_component__WEBPACK_IMPORTED_MODULE_4__["CartProductComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Pacifico&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap\");\n\n\n\n\n.sidenav[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  background-color: #fff;\n  overflow-x: hidden;\n  transition: 0.5s;\n}\n.close-btn[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #000;\n  cursor: pointer;\n}\n.header[_ngcontent-%COMP%] {\n  background-color: #eaeaea;\n}\n.title[_ngcontent-%COMP%] {\n  font-family: \"Playfair Display\", sans-serif;\n  font-style: italic;\n  font-size: 1rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 2rem;\n  font-style: normal;\n  margin: 0;\n  height: 115px;\n}\n.close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 40px;\n  right: 40px;\n  font-size: 2rem;\n}\n.divider[_ngcontent-%COMP%] {\n  background: linear-gradient(-45deg, #fff 25px, transparent 0), linear-gradient(45deg, #fff 25px, transparent 0);\n  background-repeat: repeat-x;\n  background-size: 50px 50px;\n  height: 50px;\n  width: 100%;\n  content: \" \";\n}\n.checkout-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 35px;\n}\n.total-price[_ngcontent-%COMP%] {\n  font-family: \"Playfair Display\", sans-serif;\n  font-style: italic;\n  font-size: 1rem;\n  font-size: 1.2rem;\n  font-style: normal;\n  font-weight: bold;\n}\n.checkout-button[_ngcontent-%COMP%] {\n  font-family: \"Playfair Display\", sans-serif;\n  font-style: italic;\n  font-size: 1rem;\n  display: flex;\n  justify-content: center;\n  white-space: nowrap;\n  font-size: 1.125rem;\n  font-style: normal;\n  cursor: pointer;\n  background-color: #fff;\n  border: 1px solid #000;\n  padding: 10px 30px;\n  margin-top: 10px;\n}\n@media (min-width: 768px) {\n  .checkout-button[_ngcontent-%COMP%] {\n    background-color: #fff;\n    color: #000;\n    transition: all 0.25s ease;\n  }\n  .checkout-button[_ngcontent-%COMP%]:hover {\n    background-color: #000;\n    color: #fff;\n    transition: all 0.25s ease;\n  }\n}\n.empty-cart-text[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding-top: 40px;\n  padding-bottom: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvX2ZvbnRzLnNjc3MiLCJzcmMvc3R5bGVzL19icmVha3BvaW50cy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NhcnQvY2FydC5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwic3JjL3N0eWxlcy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsNkVBQUE7QUFDQSx1SEFBQTtBQ0RSLHdEQUFBO0FBOEJBLHFCQUFBO0FBOUJBLHdEQUFBO0FBOEJBLHFCQUFBO0FDM0JBO0VBQ0UsWUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0Esc0JDVk07RURXTixrQkFBQTtFQUNBLGdCQUFBO0FBSUY7QUFEQTtFQUNFLHFCQUFBO0VBQ0EsV0NoQk07RURpQk4sZUFBQTtBQUlGO0FBREE7RUFDRSx5QkNwQlc7QUR3QmI7QUFEQTtFRUhFLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VGSUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQUtGO0FBRkE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUtGO0FBRkE7RUVIRSwrR0FBQTtFQUVBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUZRRjtBQVBBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBVUY7QUFQQTtFRWxDRSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFRm1DQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFXRjtBQVJBO0VFMUNFLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBNkJBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkQ1RE07RUM2RE4sc0JBQUE7RUFDQSxrQkFBQTtFRktBLGdCQUFBO0FBcUJGO0FEakZJO0VDeURKO0lFQ0ksc0JEakVJO0lDa0VKLFdEakVJO0lDa0VKLDBCQUFBO0VGMkJGO0VFekJFO0lBQ0Usc0JEckVFO0lDc0VGLFdEdkVFO0lDd0VGLDBCQUFBO0VGMkJKO0FBQ0Y7QUE5QkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBaUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJ0L2NhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGFjaWZpY28mZGlzcGxheT1zd2FwXCIpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGxheWZhaXIrRGlzcGxheTppdGFsLHdnaHRAMCw0MDA7MCw3MDA7MSw0MDA7MSw3MDAmZGlzcGxheT1zd2FwXCIpO1xyXG4iLCIvKiBzdHlsZWxpbnQtZGlzYWJsZSBibG9jay1jbG9zaW5nLWJyYWNlLW5ld2xpbmUtYWZ0ZXIgKi9cclxuQG1peGluIGJyZWFrcG9pbnQoJGNsYXNzKSB7XHJcbiAgQGlmICRjbGFzcyA9PSBtb2JpbGUge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJGNsYXNzID09IHRhYmxldCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkY2xhc3MgPT0gbGFwdG9wIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRjbGFzcyA9PSBuYXZpZ2F0aW9uIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDgycHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkY2xhc3MgPT0gZGVza3RvcCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJGNsYXNzID09IHhsIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMzAwcHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAd2FybiAnQnJlYWtwb2ludCBtaXhpbiBzdXBwb3J0czogbW9iaWxlLCB0YWJsZXQsIGxhcHRvcCwgbmF2aWdhdGlvbiwgZGVza3RvcCwgeGwnO1xyXG4gIH1cclxufVxyXG4vKiBzdHlsZWxpbnQtZW5hYmxlICovXHJcbiIsIkBpbXBvcnQgXCJtaXhpbnNcIjtcclxuQGltcG9ydCBcImJyZWFrcG9pbnRzXCI7XHJcblxyXG4uc2lkZW5hdiB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbi5jbG9zZS1idG4ge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogJGJsYWNrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyYXk7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgQGluY2x1ZGUgcGFyYWdyYXBoO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBtYXJnaW46IDA7XHJcbiAgaGVpZ2h0OiAxMTVweDtcclxufVxyXG5cclxuLmNsb3NlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0MHB4O1xyXG4gIHJpZ2h0OiA0MHB4O1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuLmRpdmlkZXIge1xyXG4gIEBpbmNsdWRlIHRyaWFuZ2xlLWJvcmRlcjtcclxufVxyXG5cclxuLmNoZWNrb3V0LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcclxufVxyXG5cclxuLnRvdGFsLXByaWNlIHtcclxuICBAaW5jbHVkZSBwYXJhZ3JhcGg7XHJcblxyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNoZWNrb3V0LWJ1dHRvbiB7XHJcbiAgQGluY2x1ZGUgYnV0dG9uO1xyXG5cclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uZW1wdHktY2FydC10ZXh0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG59XHJcbiIsIiR3aGl0ZTogI2ZmZjtcclxuJGJsYWNrOiAjMDAwO1xyXG4kbGlnaHQtZ3JheTogI2VhZWFlYTtcclxuIiwiQGltcG9ydCBcImZvbnRzXCI7XHJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcImJyZWFrcG9pbnRzXCI7XHJcblxyXG5AbWl4aW4gbmF2aWdhdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ncmF5O1xyXG4gIHBhZGRpbmc6IDAgMzBweDtcclxuICBAaW5jbHVkZSBicmVha3BvaW50KHRhYmxldCkge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIG5hdi1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuQG1peGluIHBhcmFncmFwaCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbkBtaXhpbiBwYXJhZ3JhcGgtc21hbGwge1xyXG4gIEBpbmNsdWRlIHBhcmFncmFwaDtcclxuXHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbn1cclxuXHJcbkBtaXhpbiBoZWFkZXItbWVkaXVtIHtcclxuICBAaW5jbHVkZSBwYXJhZ3JhcGg7XHJcblxyXG4gIGZvbnQtc2l6ZTogMi4yNXJlbTtcclxufVxyXG5cclxuQG1peGluIHRyaWFuZ2xlLWJvcmRlciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00NWRlZywgJHdoaXRlIDI1cHgsIHRyYW5zcGFyZW50IDApLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAkd2hpdGUgMjVweCwgdHJhbnNwYXJlbnQgMCk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogNTBweCA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBjb250ZW50OiBcIiBcIjtcclxufVxyXG5cclxuQG1peGluIGJ1dHRvbiB7XHJcbiAgQGluY2x1ZGUgcGFyYWdyYXBoO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblxyXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGJsYWNrO1xyXG4gIHBhZGRpbmc6IDEwcHggMzBweDtcclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludCh0YWJsZXQpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuICAgIGNvbG9yOiAkYmxhY2s7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrO1xyXG4gICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cart',
                templateUrl: './cart.component.html',
                styleUrls: ['./cart.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"] }]; }, null); })();


/***/ }),

/***/ "S3Px":
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _store_products_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/products.json */ "//Sm");
var _store_products_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../store/products.json */ "//Sm", 1);



class ProductsService {
    constructor() {
        this.products = _store_products_json__WEBPACK_IMPORTED_MODULE_1__;
    }
    getProductById(id) {
        for (let product of this.products) {
            if (product.id === id) {
                return product;
            }
        }
    }
    getProductByName(name) {
        for (let product of this.products) {
            if (product.name === name) {
                return product;
            }
        }
    }
    getProducts() {
        return this.products;
    }
}
ProductsService.ɵfac = function ProductsService_Factory(t) { return new (t || ProductsService)(); };
ProductsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductsService, factory: ProductsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/cart/cart.component */ "QWKc");
/* harmony import */ var _pages_products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/products/products.component */ "fdtU");





class AppComponent {
    constructor() {
        this.title = 'whee';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-products");
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"], _pages_products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/cart/cart.component */ "QWKc");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _pages_products_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/products/products.component */ "fdtU");
/* harmony import */ var _components_shopping_cart_button_shopping_cart_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/shopping-cart-button/shopping-cart-button.component */ "BlY0");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/product/product.component */ "2SFI");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _components_cart_product_cart_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/cart-product/cart-product.component */ "mBnA");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_3__["CartComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
        _pages_products_products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"],
        _components_shopping_cart_button_shopping_cart_button_component__WEBPACK_IMPORTED_MODULE_6__["ShoppingCartButtonComponent"],
        _components_product_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"],
        _components_cart_product_cart_product_component__WEBPACK_IMPORTED_MODULE_9__["CartProductComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_3__["CartComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                    _pages_products_products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"],
                    _components_shopping_cart_button_shopping_cart_button_component__WEBPACK_IMPORTED_MODULE_6__["ShoppingCartButtonComponent"],
                    _components_product_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"],
                    _components_cart_product_cart_product_component__WEBPACK_IMPORTED_MODULE_9__["CartProductComponent"],
                ],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "c14U":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class CartService {
    constructor() {
        this.cartList = [];
        this.cartListQty = 0;
        this.cartSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.$cartState = this.cartSubject.asObservable();
    }
    addProduct(product) {
        for (let existing of this.cartList) {
            if (existing.id === product.id) {
                existing.qty++;
                this.cartListQty++;
                return;
            }
        }
        this.cartListQty++;
        this.cartList.push(Object.assign(Object.assign({}, product), { qty: 1 }));
        this.cartSubject.next({ products: this.cartList });
    }
    removeProduct(product) {
        for (let existing of this.cartList) {
            if (existing.id === product.id) {
                existing.qty--;
                this.cartListQty--;
            }
            this.cartList = this.cartList.filter((item) => item.qty > 0);
            this.cartSubject.next({ products: this.cartList });
        }
    }
    getCartState() {
        return this.$cartState;
    }
    getCartTotalAmount() {
        return this.cartListQty;
    }
}
CartService.ɵfac = function CartService_Factory(t) { return new (t || CartService)(); };
CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fdtU":
/*!******************************************************!*\
  !*** ./src/app/pages/products/products.component.ts ***!
  \******************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/products.service */ "S3Px");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/product/product.component */ "2SFI");





function ProductsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-product", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r1);
} }
class ProductsComponent {
    constructor(productsService) {
        this.productsService = productsService;
    }
    ngOnInit() {
        this.products = this.productsService.getProducts();
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"])); };
ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], decls: 2, vars: 1, consts: [[1, "container"], ["class", "product", 4, "ngFor", "ngForOf"], [1, "product"], [3, "product"]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductsComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _components_product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-content: center;\n}\n.product[_ngcontent-%COMP%] {\n  padding: 30px 0 40px 0;\n  border-bottom: 1px solid #eaeaea;\n}\n@media (min-width: 768px) {\n  .product[_ngcontent-%COMP%] {\n    padding: 40px 0;\n    border: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvX2JyZWFrcG9pbnRzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdEQUFBO0FBOEJBLHFCQUFBO0FDM0JBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQUFGO0FBR0E7RUFDRSxzQkFBQTtFQUNBLGdDQUFBO0FBQUY7QURMSTtFQ0dKO0lBS0ksZUFBQTtJQUNBLFlBQUE7RUFDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZWxpbnQtZGlzYWJsZSBibG9jay1jbG9zaW5nLWJyYWNlLW5ld2xpbmUtYWZ0ZXIgKi9cclxuQG1peGluIGJyZWFrcG9pbnQoJGNsYXNzKSB7XHJcbiAgQGlmICRjbGFzcyA9PSBtb2JpbGUge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJGNsYXNzID09IHRhYmxldCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkY2xhc3MgPT0gbGFwdG9wIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRjbGFzcyA9PSBuYXZpZ2F0aW9uIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDgycHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkY2xhc3MgPT0gZGVza3RvcCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJGNsYXNzID09IHhsIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMzAwcHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAd2FybiAnQnJlYWtwb2ludCBtaXhpbiBzdXBwb3J0czogbW9iaWxlLCB0YWJsZXQsIGxhcHRvcCwgbmF2aWdhdGlvbiwgZGVza3RvcCwgeGwnO1xyXG4gIH1cclxufVxyXG4vKiBzdHlsZWxpbnQtZW5hYmxlICovXHJcbiIsIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcImJyZWFrcG9pbnRzXCI7XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ucHJvZHVjdCB7XHJcbiAgcGFkZGluZzogMzBweCAwIDQwcHggMDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGxpZ2h0LWdyYXk7XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQodGFibGV0KSB7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-products',
                templateUrl: './products.component.html',
                styleUrls: ['./products.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"] }]; }, null); })();


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shopping_cart_button_shopping_cart_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shopping-cart-button/shopping-cart-button.component */ "BlY0");



class NavbarComponent {
    constructor() { }
    ngOnInit() { }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], inputs: { cartList: "cartList" }, decls: 9, vars: 0, consts: [[1, "container"], [1, "navbar"], [1, "content"], [1, "title"], [1, "subtitle"], [1, "divider"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "whee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "The most definitive shape store in the world");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-shopping-cart-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shopping_cart_button_shopping_cart_button_component__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartButtonComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Pacifico&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap\");\n\n\n\n\n.container[_ngcontent-%COMP%] {\n  background-color: #eaeaea;\n}\n.navbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #eaeaea;\n  padding: 0 30px;\n}\n@media (min-width: 768px) {\n  .navbar[_ngcontent-%COMP%] {\n    justify-content: space-between;\n  }\n}\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n@media (min-width: 768px) {\n  .content[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n}\n.title[_ngcontent-%COMP%] {\n  font-family: \"Pacifico\", cursive, sans-serif;\n  font-size: 4.125rem;\n  font-weight: 400;\n  color: black;\n  text-decoration: none;\n}\n.subtitle[_ngcontent-%COMP%] {\n  font-family: \"Playfair Display\", sans-serif;\n  font-style: italic;\n  font-size: 1rem;\n}\n@media (min-width: 768px) {\n  .subtitle[_ngcontent-%COMP%] {\n    margin-left: 30px;\n  }\n}\n.divider[_ngcontent-%COMP%] {\n  background: linear-gradient(-45deg, #fff 25px, transparent 0), linear-gradient(45deg, #fff 25px, transparent 0);\n  background-repeat: repeat-x;\n  background-size: 50px 50px;\n  height: 50px;\n  width: 100%;\n  content: \" \";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvX2ZvbnRzLnNjc3MiLCJzcmMvc3R5bGVzL19icmVha3BvaW50cy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsInNyYy9zdHlsZXMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDZFQUFBO0FBQ0EsdUhBQUE7QUNEUix3REFBQTtBQThCQSxxQkFBQTtBQTlCQSx3REFBQTtBQThCQSxxQkFBQTtBQzNCQTtFQUNFLHlCQ0ZXO0FETWI7QUFEQTtFRUZFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJETlc7RUNPWCxlQUFBO0FGT0Y7QURUSTtFQ0FKO0lFSUksOEJBQUE7RUZTRjtBQUNGO0FBVkE7RUVLRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBRlNGO0FEcEJJO0VDSUo7SUFJSSxtQkFBQTtFQWdCRjtBQUNGO0FBYkE7RUFDRSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFnQkY7QUFiQTtFRUxFLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FGc0JGO0FEdkNJO0VDb0JKO0lBSUksaUJBQUE7RUFtQkY7QUFDRjtBQWhCQTtFRU1FLCtHQUFBO0VBRUEsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBRmFGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBhY2lmaWNvJmRpc3BsYXk9c3dhcFwiKTtcclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBsYXlmYWlyK0Rpc3BsYXk6aXRhbCx3Z2h0QDAsNDAwOzAsNzAwOzEsNDAwOzEsNzAwJmRpc3BsYXk9c3dhcFwiKTtcclxuIiwiLyogc3R5bGVsaW50LWRpc2FibGUgYmxvY2stY2xvc2luZy1icmFjZS1uZXdsaW5lLWFmdGVyICovXHJcbkBtaXhpbiBicmVha3BvaW50KCRjbGFzcykge1xyXG4gIEBpZiAkY2xhc3MgPT0gbW9iaWxlIHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRjbGFzcyA9PSB0YWJsZXQge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJGNsYXNzID09IGxhcHRvcCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkY2xhc3MgPT0gbmF2aWdhdGlvbiB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTA4MnB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJGNsYXNzID09IGRlc2t0b3Age1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRjbGFzcyA9PSB4bCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTMwMHB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgQHdhcm4gJ0JyZWFrcG9pbnQgbWl4aW4gc3VwcG9ydHM6IG1vYmlsZSwgdGFibGV0LCBsYXB0b3AsIG5hdmlnYXRpb24sIGRlc2t0b3AsIHhsJztcclxuICB9XHJcbn1cclxuLyogc3R5bGVsaW50LWVuYWJsZSAqL1xyXG4iLCJAaW1wb3J0IFwibWl4aW5zXCI7XHJcbkBpbXBvcnQgXCJicmVha3BvaW50c1wiO1xyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyYXk7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIEBpbmNsdWRlIG5hdmlnYXRpb247XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBAaW5jbHVkZSBuYXYtaXRlbTtcclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludCh0YWJsZXQpIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgfVxyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBhY2lmaWNvXCIsIGN1cnNpdmUsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiA0LjEyNXJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5zdWJ0aXRsZSB7XHJcbiAgQGluY2x1ZGUgcGFyYWdyYXBoO1xyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KHRhYmxldCkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZGl2aWRlciB7XHJcbiAgQGluY2x1ZGUgdHJpYW5nbGUtYm9yZGVyO1xyXG59XHJcbiIsIiR3aGl0ZTogI2ZmZjtcclxuJGJsYWNrOiAjMDAwO1xyXG4kbGlnaHQtZ3JheTogI2VhZWFlYTtcclxuIiwiQGltcG9ydCBcImZvbnRzXCI7XHJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcImJyZWFrcG9pbnRzXCI7XHJcblxyXG5AbWl4aW4gbmF2aWdhdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ncmF5O1xyXG4gIHBhZGRpbmc6IDAgMzBweDtcclxuICBAaW5jbHVkZSBicmVha3BvaW50KHRhYmxldCkge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIG5hdi1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuQG1peGluIHBhcmFncmFwaCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbkBtaXhpbiBwYXJhZ3JhcGgtc21hbGwge1xyXG4gIEBpbmNsdWRlIHBhcmFncmFwaDtcclxuXHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbn1cclxuXHJcbkBtaXhpbiBoZWFkZXItbWVkaXVtIHtcclxuICBAaW5jbHVkZSBwYXJhZ3JhcGg7XHJcblxyXG4gIGZvbnQtc2l6ZTogMi4yNXJlbTtcclxufVxyXG5cclxuQG1peGluIHRyaWFuZ2xlLWJvcmRlciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00NWRlZywgJHdoaXRlIDI1cHgsIHRyYW5zcGFyZW50IDApLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAkd2hpdGUgMjVweCwgdHJhbnNwYXJlbnQgMCk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogNTBweCA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBjb250ZW50OiBcIiBcIjtcclxufVxyXG5cclxuQG1peGluIGJ1dHRvbiB7XHJcbiAgQGluY2x1ZGUgcGFyYWdyYXBoO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblxyXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGJsYWNrO1xyXG4gIHBhZGRpbmc6IDEwcHggMzBweDtcclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludCh0YWJsZXQpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuICAgIGNvbG9yOiAkYmxhY2s7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrO1xyXG4gICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss'],
            }]
    }], function () { return []; }, { cartList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "mBnA":
/*!*******************************************************************!*\
  !*** ./src/app/components/cart-product/cart-product.component.ts ***!
  \*******************************************************************/
/*! exports provided: CartProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartProductComponent", function() { return CartProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/cart.service */ "c14U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function CartProductComponent_ng_container_0_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 8);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.product.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r1.product.name);
} }
function CartProductComponent_ng_container_0_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Image not found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartProductComponent_ng_container_0_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartProductComponent_ng_container_0_div_10_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.reduceProduct(ctx_r4.product); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " REDUCE BY x1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r3.product.price, "\u20AC x", ctx_r3.product.qty, " ");
} }
function CartProductComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CartProductComponent_ng_container_0_img_3_Template, 1, 2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CartProductComponent_ng_container_0_span_4_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CartProductComponent_ng_container_0_div_10_Template, 5, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.product.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.product.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.product.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.product.qty);
} }
class CartProductComponent {
    constructor(cartService) {
        this.cartService = cartService;
    }
    ngOnInit() {
        console.log('asd', this.product);
    }
    reduceProduct(product) {
        this.cartService.removeProduct(product);
    }
}
CartProductComponent.ɵfac = function CartProductComponent_Factory(t) { return new (t || CartProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"])); };
CartProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartProductComponent, selectors: [["app-cart-product"]], inputs: { product: "product" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "container"], [1, "image-container"], ["class", "image", 3, "src", "alt", 4, "ngIf"], [1, "info-container"], [1, "item-name"], [1, "item-description"], ["class", "button-container", 4, "ngIf"], [1, "image", 3, "src", "alt"], [1, "button-container"], [1, "item-qty"], [1, "reduce-cart-button", 3, "click"]], template: function CartProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CartProductComponent_ng_container_0_Template, 11, 5, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Pacifico&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap\");\n\n\n\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  border-bottom: 1px solid #eaeaea;\n  margin-bottom: 15px;\n}\n@media (min-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    flex-direction: row;\n    padding: 10px 15px 25px 15px;\n  }\n}\n.image[_ngcontent-%COMP%] {\n  height: 125px;\n  width: 125px;\n}\n.info-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-width: 300px;\n}\n@media (min-width: 768px) {\n  .info-container[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    margin: 0 170px 0 30px;\n  }\n}\n.item-name[_ngcontent-%COMP%] {\n  font-family: \"Playfair Display\", sans-serif;\n  font-style: italic;\n  font-size: 1rem;\n  font-size: 2.25rem;\n  margin: 15px 0;\n}\n.item-description[_ngcontent-%COMP%] {\n  font-family: \"Playfair Display\", sans-serif;\n  font-style: italic;\n  font-size: 1rem;\n  font-style: normal;\n  font-size: 0.875rem;\n  font-size: 1.125rem;\n  margin: 0;\n  width: 70%;\n  text-align: center;\n}\n@media (min-width: 768px) {\n  .item-description[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: start;\n  }\n}\n.button-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 200px;\n  margin-bottom: 15px;\n}\n@media (min-width: 768px) {\n  .button-container[_ngcontent-%COMP%] {\n    align-items: flex-end;\n  }\n}\n.item-qty[_ngcontent-%COMP%] {\n  font-family: \"Playfair Display\", sans-serif;\n  font-style: italic;\n  font-size: 1rem;\n  font-size: 2.25rem;\n  font-style: normal;\n  margin: 15px 0;\n}\n.reduce-cart-button[_ngcontent-%COMP%] {\n  font-family: \"Playfair Display\", sans-serif;\n  font-style: italic;\n  font-size: 1rem;\n  display: flex;\n  justify-content: center;\n  white-space: nowrap;\n  font-size: 1.125rem;\n  font-style: normal;\n  cursor: pointer;\n  background-color: #fff;\n  border: 1px solid #000;\n  padding: 10px 30px;\n  width: 80%;\n}\n@media (min-width: 768px) {\n  .reduce-cart-button[_ngcontent-%COMP%] {\n    background-color: #fff;\n    color: #000;\n    transition: all 0.25s ease;\n  }\n  .reduce-cart-button[_ngcontent-%COMP%]:hover {\n    background-color: #000;\n    color: #fff;\n    transition: all 0.25s ease;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvX2ZvbnRzLnNjc3MiLCJzcmMvc3R5bGVzL19icmVha3BvaW50cy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NhcnQtcHJvZHVjdC9jYXJ0LXByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzcmMvc3R5bGVzL19taXhpbnMuc2NzcyIsInNyYy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDZFQUFBO0FBQ0EsdUhBQUE7QUNEUix3REFBQTtBQThCQSxxQkFBQTtBQTlCQSx3REFBQTtBQThCQSxxQkFBQTtBQzNCQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FBSUY7QUROSTtFQ0pKO0lBU0ksbUJBQUE7SUFDQSw0QkFBQTtFQUtGO0FBQ0Y7QUFGQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBS0Y7QUFGQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUtGO0FEekJJO0VDZUo7SUFRSSx1QkFBQTtJQUNBLHNCQUFBO0VBTUY7QUFDRjtBQUhBO0VDYkUsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFhQSxrQkFBQTtFRENBLGNBQUE7QUFRRjtBQUxBO0VDbkJFLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBTUEsa0JBQUE7RUFDQSxtQkFBQTtFRGFBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQVdGO0FEbkRJO0VDa0NKO0lBU0ksV0FBQTtJQUNBLGlCQUFBO0VBWUY7QUFDRjtBQVRBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQVlGO0FEbEVJO0VDZ0RKO0lBU0kscUJBQUE7RUFhRjtBQUNGO0FBVkE7RUM5Q0UsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFhQSxrQkFBQTtFRGlDQSxrQkFBQTtFQUVBLGNBQUE7QUFlRjtBQVpBO0VDckRFLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBNkJBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkM1RE07RUQ2RE4sc0JBQUE7RUFDQSxrQkFBQTtFRGdCQSxVQUFBO0FBeUJGO0FEaEdJO0VDb0VKO0lDVkksc0JDakVJO0lEa0VKLFdDakVJO0lEa0VKLDBCQUFBO0VEMENGO0VDeENFO0lBQ0Usc0JDckVFO0lEc0VGLFdDdkVFO0lEd0VGLDBCQUFBO0VEMENKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhcnQtcHJvZHVjdC9jYXJ0LXByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGFjaWZpY28mZGlzcGxheT1zd2FwXCIpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGxheWZhaXIrRGlzcGxheTppdGFsLHdnaHRAMCw0MDA7MCw3MDA7MSw0MDA7MSw3MDAmZGlzcGxheT1zd2FwXCIpO1xyXG4iLCIvKiBzdHlsZWxpbnQtZGlzYWJsZSBibG9jay1jbG9zaW5nLWJyYWNlLW5ld2xpbmUtYWZ0ZXIgKi9cclxuQG1peGluIGJyZWFrcG9pbnQoJGNsYXNzKSB7XHJcbiAgQGlmICRjbGFzcyA9PSBtb2JpbGUge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJGNsYXNzID09IHRhYmxldCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkY2xhc3MgPT0gbGFwdG9wIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRjbGFzcyA9PSBuYXZpZ2F0aW9uIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDgycHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkY2xhc3MgPT0gZGVza3RvcCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJGNsYXNzID09IHhsIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMzAwcHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAd2FybiAnQnJlYWtwb2ludCBtaXhpbiBzdXBwb3J0czogbW9iaWxlLCB0YWJsZXQsIGxhcHRvcCwgbmF2aWdhdGlvbiwgZGVza3RvcCwgeGwnO1xyXG4gIH1cclxufVxyXG4vKiBzdHlsZWxpbnQtZW5hYmxlICovXHJcbiIsIkBpbXBvcnQgXCJtaXhpbnNcIjtcclxuQGltcG9ydCBcImJyZWFrcG9pbnRzXCI7XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGxpZ2h0LWdyYXk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludCh0YWJsZXQpIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHggMjVweCAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLmltYWdlIHtcclxuICBoZWlnaHQ6IDEyNXB4O1xyXG4gIHdpZHRoOiAxMjVweDtcclxufVxyXG5cclxuLmluZm8tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KHRhYmxldCkge1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBtYXJnaW46IDAgMTcwcHggMCAzMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLml0ZW0tbmFtZSB7XHJcbiAgQGluY2x1ZGUgaGVhZGVyLW1lZGl1bTtcclxuXHJcbiAgbWFyZ2luOiAxNXB4IDA7XHJcbn1cclxuXHJcbi5pdGVtLWRlc2NyaXB0aW9uIHtcclxuICBAaW5jbHVkZSBwYXJhZ3JhcGgtc21hbGw7XHJcblxyXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KHRhYmxldCkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICB9XHJcbn1cclxuXHJcbi5idXR0b24tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludCh0YWJsZXQpIHtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICB9XHJcbn1cclxuXHJcbi5pdGVtLXF0eSB7XHJcbiAgQGluY2x1ZGUgaGVhZGVyLW1lZGl1bTtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcblxyXG4gIG1hcmdpbjogMTVweCAwO1xyXG59XHJcblxyXG4ucmVkdWNlLWNhcnQtYnV0dG9uIHtcclxuICBAaW5jbHVkZSBidXR0b247XHJcblxyXG4gIHdpZHRoOiA4MCU7XHJcbn1cclxuIiwiQGltcG9ydCBcImZvbnRzXCI7XHJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcImJyZWFrcG9pbnRzXCI7XHJcblxyXG5AbWl4aW4gbmF2aWdhdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ncmF5O1xyXG4gIHBhZGRpbmc6IDAgMzBweDtcclxuICBAaW5jbHVkZSBicmVha3BvaW50KHRhYmxldCkge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIG5hdi1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuQG1peGluIHBhcmFncmFwaCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbkBtaXhpbiBwYXJhZ3JhcGgtc21hbGwge1xyXG4gIEBpbmNsdWRlIHBhcmFncmFwaDtcclxuXHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbn1cclxuXHJcbkBtaXhpbiBoZWFkZXItbWVkaXVtIHtcclxuICBAaW5jbHVkZSBwYXJhZ3JhcGg7XHJcblxyXG4gIGZvbnQtc2l6ZTogMi4yNXJlbTtcclxufVxyXG5cclxuQG1peGluIHRyaWFuZ2xlLWJvcmRlciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00NWRlZywgJHdoaXRlIDI1cHgsIHRyYW5zcGFyZW50IDApLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAkd2hpdGUgMjVweCwgdHJhbnNwYXJlbnQgMCk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogNTBweCA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBjb250ZW50OiBcIiBcIjtcclxufVxyXG5cclxuQG1peGluIGJ1dHRvbiB7XHJcbiAgQGluY2x1ZGUgcGFyYWdyYXBoO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblxyXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGJsYWNrO1xyXG4gIHBhZGRpbmc6IDEwcHggMzBweDtcclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludCh0YWJsZXQpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuICAgIGNvbG9yOiAkYmxhY2s7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrO1xyXG4gICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJHdoaXRlOiAjZmZmO1xyXG4kYmxhY2s6ICMwMDA7XHJcbiRsaWdodC1ncmF5OiAjZWFlYWVhO1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cart-product',
                templateUrl: './cart-product.component.html',
                styleUrls: ['./cart-product.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"] }]; }, { product: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map