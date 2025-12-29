import { sva } from 'styled-system/css'

export default sva({
    slots: ['list', 'item'],
    base: {
        list: {
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap', 
            alignItems: 'center',
            _before: {
                content: '"',
                display: 'block',
                borderRadius: '5xl',
                flexBasis: 'auto',
                flexGrow: '0'
            },
            '& [data-list-item]': {
                flexGrow: 1,
                flexBasis: '0%'
            }
        }
    }
})