import { computed, defineComponent } from 'vue'
import './style.css'

interface Props {
    type: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text',
    disabled: boolean
}

export default defineComponent({
    name: 'Button',
    props: {
        type: {
            type: String,
            default: 'default'
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { emit, slots }) {
        const classAll = computed(() => [
            "rb-button",
            `rb-button_type__${props.type}`,
            props.disabled ? "rb-button_disabled" : "",
        ]);
        return (
            <>
                <button class={classAll}>
                    <span>
                        {
                            slots.default ? slots.default() : null
                        }
                    </span>
                </button>
            </>
        )
    }

})


// const renderDom = ({ type = "default", disabled = false }: Props) => {
//     const classAll = computed(() => [
//         "rb-button",
//         `rb-button_type__${type}`,
//         disabled ? "rb-button_disabled" : "",
//     ]);
//     return (
//         <button class={classAll}>
//             <span>
//                 <slot></slot>
//             </span>
//         </button>
//     )

// }