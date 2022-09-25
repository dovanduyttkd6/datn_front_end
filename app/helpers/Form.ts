import {AbstractControl, FormArray, FormControl, FormGroup} from "@angular/forms";

/** Helper function for mark all dirty form and update validate
 *
 * Usefull when use [nz-form-item]
 */
export const markDirtyAllForm = (ctrl: AbstractControl) => {
  if (ctrl instanceof FormGroup) {
    for (const i in ctrl.controls) {
      markDirtyAllForm(ctrl.controls[i]);
    }
  }
  if (ctrl instanceof FormArray) {
    ctrl.controls.forEach(item => markDirtyAllForm(item))
  }
  if (ctrl instanceof FormControl) {
    ctrl.markAsDirty();
    ctrl.updateValueAndValidity();
  }
}

export const getAllInvalidControl = (form) => {
  if (!form) return;
  const invalid = [];
  const controls = form.controls;
  for (const ctrlName in form.controls) {
    if (controls[ctrlName].invalid) invalid.push(ctrlName);
  }
  return invalid;
}
