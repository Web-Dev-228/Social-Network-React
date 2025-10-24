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


// export const FormControl = ({ input, meta, child, ...props }) => {
//     const hasError = meta.touched && meta.error;
//     return (
//         <div className={`${css.formControl} ${hasError ? css.error : undefined}`}>
//             <div>
//                 <child {...props} {...input} />
//             </div>
//             <span>{hasError && meta.error}</span>
//         </div>
//     )
// }

// export const Textarea = ({ input, meta, ...props }) => {
//     const hasError = meta.touched && meta.error;
//     return (
//         <div className={`${css.formControl} ${hasError ? css.error : undefined}`}>
//             <div>
//                 <textarea {...props} {...input} />
//             </div>
//             <span>{hasError && meta.error}</span>
//         </div>
//     )
// }

// export const Input = ({ input, meta, ...props }) => {
//     const hasError = meta.touched && meta.error;
//     return (
//         <div className={`${css.formControl} ${hasError ? css.error : undefined}`}>
//             <div>
//                 <input {...props} {...input} />
//             </div>
//         </div>
//     )
// } 