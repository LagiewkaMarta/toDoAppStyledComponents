export const setRem = (number=16) => {
return `${number/16}rem`
}

export const setColor = {
    btnColor: '#f9b907',
    btnHoverColor: '#ce9804',
    fontColor: '#F4F9FF',
    accentColor: '#00C6BE',
    mainColor: '#278FFF',
    backgroundColor: '#C1C8E4',
    singleTodoColor: '#64aefc'

}

export const setBoxShadow = ({ x='1px', y='1px', blur='1px', spread='0px', color = "black"}= {}) => {
    return `box-shadow: ${x} ${y} ${blur} ${spread} ${color}`
}

export const setFlexRow = ({x='center', y='center'}={}) => {
    return `display: flex; justify-content: ${x}; align-items: ${y};`
}