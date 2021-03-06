import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Inject,
    Input,
    Optional,
    Output,
    ViewChild
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MAT_RIPPLE_GLOBAL_OPTIONS, MatCheckbox, RippleGlobalOptions } from "@angular/material";
import {
    DynamicCheckboxModel,
    DynamicFormControlComponent,
    DynamicFormControlCustomEvent,
    DynamicFormLayout,
    DynamicFormLayoutService,
    DynamicFormValidationService,
} from "@ng-dynamic-forms/core";

@Component({
    selector: "dynamic-material-checkbox",
    templateUrl: "./dynamic-material-checkbox.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicMaterialCheckboxComponent extends DynamicFormControlComponent {

    @Input() bindId: boolean = true;
    @Input() group: FormGroup;
    @Input() layout: DynamicFormLayout;
    @Input() model: DynamicCheckboxModel;

    @Output() blur: EventEmitter<any> = new EventEmitter();
    @Output() change: EventEmitter<any> = new EventEmitter();
    @Output() customEvent: EventEmitter<DynamicFormControlCustomEvent> = new EventEmitter();
    @Output() focus: EventEmitter<any> = new EventEmitter();

    @ViewChild("matCheckbox") matCheckbox: MatCheckbox;

    constructor(protected layoutService: DynamicFormLayoutService,
                protected validationService: DynamicFormValidationService,
                @Inject(MAT_RIPPLE_GLOBAL_OPTIONS) @Optional() public RIPPLE_OPTIONS: RippleGlobalOptions) {

        super(layoutService, validationService);
    }
}