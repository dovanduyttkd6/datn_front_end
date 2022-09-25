import {AbstractControl, FormArray, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {REGEX} from '../../utils';

export class CustomValidators extends Validators {
  static minLength(minLength: number): ValidatorFn {
    return (control: AbstractControl) => {
      if (Validators.minLength(minLength)(control) === null) {
        return null;
      }
      return {minlength: {'vi-VN': `Tối thiểu ${minLength} ký tự`, 'en-US': `MinLength is ${minLength}`}};
    };
  }

  static maxLength(maxLength: number): ValidatorFn {
    return (control: AbstractControl) => {
      if (Validators.maxLength(maxLength)(control) === null) {
        return null;
      }
      return {maxlength: {'vi-VN': `Tối đa ${maxLength} ký tự`, 'en-US': `MaxLength is ${maxLength}`}};
    };
  }

  static mobile(control: AbstractControl) {
    const value = control.value;

    if (isEmptyInputValue(value)) {
      return null;
    }

    return isMobile(value) ? null : {
      mobile: {
        'vi-VN': `Số điện thoại không đúng định dạng!`,
        'en-US': `Mobile phone number is not valid!`,
      },
    };
  }

  static multipleEmail(control: AbstractControl) {
    const value = control.value;

    if (isEmptyInputValue(value)) {
      return null;
    }

    return isMultipleEmail(value) ? null : {
      multipleEmail: {
        'vi-VN': `Địa chỉ Email không đúng định dạng!`,
        'en-US': `Email address is not valid!`,
      },
    };
  }

  static patternPercent(control: AbstractControl) {
    const value = control.value;

    if (isEmptyInputValue(value)) {
      return null;
    }

    if (typeof value === 'string' && REGEX.NUMBER_AND_COMMA.test(value)) {
      const temp = value.split(",");
      if (temp.length > 2 || (value.indexOf(",") == value.length - 1)) {
        return {pattern: true}
      }
      if (temp[0].length > 3 ) {
        return {percent1: true}
      }
      if (temp.length > 1 && temp[1].length > 2) {
        return {percent2: true}
      }
      return null;
    } else {
      return {pattern: true}
    }

  }

  static multipleCheckboxRequireOne(fa: FormArray) {
    let valid = false;

    for (let x = 0; x < fa.length; ++x) {
      if (fa.at(x).value) {
        valid = true;
        break;
      }
    }
    return valid ? null : {
      multipleCheckboxRequireOne: true,
    };
  }

  static noWhitespaceValidator(control: AbstractControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : {'whitespace': true};
  }
}

function isEmptyInputValue(value): boolean {
  return value == null || value.length === 0;
}

function isMobile(value: string): boolean {
  return typeof value === 'string' && REGEX.MOBILE.test(value);
}

function isMultipleEmail(value: string): boolean {
  return typeof value === 'string' && REGEX.MULTIPLE_EMAIL.test(value);
}

export function equalValueValidator(targetKey: string, toMatchKey: string): ValidatorFn {
  return (group: FormGroup): { [key: string]: any } => {
    const target = group.controls[targetKey];
    const toMatch = group.controls[toMatchKey];
    if (target.touched && toMatch.touched) {
      const isMatch = target.value === toMatch.value;
      // set equal value error on dirty controls
      if (!isMatch && target.valid && toMatch.valid) {
        toMatch.setErrors({equalValue: targetKey});
        const message = targetKey + ' != ' + toMatchKey;
        return {'equalValue': message};
      }
      if (isMatch && toMatch.hasError('equalValue')) {
        toMatch.setErrors(null);
      }
    }

    return null;
  };
}





