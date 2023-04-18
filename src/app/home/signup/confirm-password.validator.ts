import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const confirmPasswordValidator: ValidatorFn = (formGroup: AbstractControl): ValidationErrors | null => {

  const password = formGroup.get('password')?.value;
  const confirmPassword = formGroup.get('confirmPassword')?.value;

  if (password.trim() + confirmPassword.trim()) {
    return password == confirmPassword ? null : { confirmPasswordValidator: true};
  } else {
    return null;
  }

}
