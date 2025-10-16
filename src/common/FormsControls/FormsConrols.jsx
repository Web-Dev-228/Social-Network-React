import css from './FormsControls.module.css'

export const Textarea = ({input, meta, ...props}) => {
    return (
        <div className={`${css.formControl} ${meta.touched && meta.error ? css.error : undefined}`}>
            <textarea {...props} {...input} />
        </div>
    )
} 