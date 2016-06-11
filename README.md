# ng2 Dynamic Forms (alpha.2)

[![npm version](https://badge.fury.io/js/%40ng2-dynamic-forms%2Fcore.svg)](https://badge.fury.io/js/%40ng2-dynamic-forms%2Fcore)

ng2 Dynamic Forms is a rapid form development library based on the official Angular 2
[**dynamic form cookbook**](https://angular.io/docs/ts/latest/cookbook/dynamic-form.html).
It simplifies all the hard, troublesome work of implementing handcrafted forms by building
upon a layer of descriptive object models.

It also provides a flexible system of dynamic ui components with out of the box support for
**Angular 2 Material** and **Bootstrap**.

## Getting Started

**Install the core package:**
```
npm install @ng2-dynamic-forms/core --save
```
**Choose your UI library** (e.g. Angular 2 Material) **and install the corresponding package:**
```
npm install @ng2-dynamic-forms/ui-material --save
```
When using **SystemJS**, update your configuration file:
```
var map = {

    // ...here goes all the rest (Angular 2, Material, RxJS, etc.)

    "@ng2-dynamic-forms": "node_modules/@ng2-dynamic-forms"
};

var ng2DynamicFormsPackageNames = [

    "@ng2-dynamic-forms/core",
    "@ng2-dynamic-forms/ui-material"
];

ng2DynamicFormsPackageNames.forEach(function (packageName) {

    packages[packageName] = {
        main: "index.js",
        defaultExtension: "js"
    };
});
```

## Usage

**Define your dynamic form model:**
```
export const MY_DYNAMIC_FORM_MODEL = new DynamicFormModel([

    new DynamicTextInputModel({

        id: "exampleInput",
        label: "Example Input",
        maxLength: 42,
        placeholder: "example input",
    }),

    new DynamicCheckboxModel({

        hideLabel: true,
        id: "exampleCheckbox",
        label: "I do agree",
        text: "I do agree"
    })
]);
```
**Provide `DynamicFormService` and plug in the UI component:**

```
@Component({

    directives: [FORM_DIRECTIVES, DynamicFormMaterialControlComponent],
    providers: [DynamicFormService],

    // ... all the rest (selector, templateUrl, etc.)
})
```

**Create the form `ControlGroup`:**
```
export class DynamicFormComponent implements OnInit {

    dynamicFormModel: DynamicFormModel = MY_DYNAMIC_FORM_MODEL;
    form: ControlGroup;

    constructor(private dynamicFormService: DynamicFormService) {}

    ngOnInit() {
        this.form = this.dynamicFormService.createControlGroup(this.dynamicFormModel);
    }
}
```

**Add the UI component to your template:**
```
<form [ngFormModel]="form">

    <div *ngFor="let controlModel of dynamicFormModel.model">

        <dynamic-form-material-control [model]="controlModel"
                                       [form]="form">
        </dynamic-form-material-control>

    </div>

</form>
```
