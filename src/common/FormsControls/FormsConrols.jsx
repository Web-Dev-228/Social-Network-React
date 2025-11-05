import css from './FormsControls.module.css'


export const FormControl = FormElement => ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={`${css.formControl} ${hasError ? css.error : ''}`}> 
                <FormElement {...input} {...props} />
            <span>{hasError && meta.error}</span>
        </div>
    );
};